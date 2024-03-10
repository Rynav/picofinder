import { NextApiRequest, NextApiResponse } from "next";
import File from '@/model/File'; // Adjust the path based on your project structure
import { Op } from "sequelize";

import axios from "axios";
import requestIp from "request-ip";

import nextBase64 from "next-base64";

let isDev = process.env.NODE_ENV


function mmssToSeconds(duration: any) {
	let parts = duration.split(":");
	return parseInt(parts[0]) * 60 + parseInt(parts[1]);
}

async function fetch2(data: any) {
	try {

		if(data.encoder.toString().length <= 1 && data.uploadYear.length <= 2 && data.uploadMonth.length <= 2 && data.title.length <= 1){
			return { error: true, message: "Title is too short, please select an encoder or make the title more than 3 chars long!" };
		}

		// If the query doesn't exist, perform the search and create a new query entry
		const files = await File.findAll({
			attributes: ['id', 'filename', 'url', 'length', 'encoder', 'uploaddate', 'filesize', 'audio'],
			where: {
				encoder: {
					[Op.substring]: data.encoder.toString().replace("[", "").replace("]", ""),
				},
				filename: {
					[Op.substring]: data.title,
				},
				uploadyear: {
					[Op.substring]: data.uploadYear.toString().replace("[", "").replace("]", ""),
				},
				uploaddate: {
					[Op.substring]: data.uploadMonth.toString().replace("[", "").replace("]", ""),
				},
				length: {
					[Op.between]: [isNaN(mmssToSeconds(data.lengthFrom))? 0 : mmssToSeconds(data.lengthFrom)
						, isNaN(mmssToSeconds(data.lengthTo))? 99999999 : mmssToSeconds(data.lengthTo)]
				}
			},
		});

		console.log(" > Found ", files.length, " results!")

		if (files.length === 0) {
			console.log("No matches!");
			return { error: true, message: 'No matches!' };
		}
		if(files.length >= 200000){
			console.log(" >= 200k results.");
			return {error: true, message: "Returned >= 200k results. Please narrow down your search"}
		}

		// Write the JSON data to the file (assuming you want to write a file)


		return { error: false, data: files };
	} catch (error) {
		console.error('Error in fetch function:', error);
		return { error: true, message: 'Internal Server Error' };
	}
}

async function spying(info: any, req: NextApiRequest) {
	try {
		if (isDev == "development") {
			console.log(
				" > Development mode is enabled. Skipping spying function."
			);
			return;
		}
		const detectedIp = requestIp.getClientIp(req);

		// Send data to Discord
		const discordData = {
			embeds: [
				{
					title: "New query!!!",
					description:
						"```json\n" +
						JSON.stringify(JSON.parse(nextBase64.decode(req.body)), null, 2) +
						"```\nIP: " +
						detectedIp +
						"\n" +
						`${
							info.error
								? "Results: 0"
								: "Link: [" +
								decodeURIComponent(req.body) +
								`](${process.env.NODE_ENV == "development"? "http://localhost:3000/result/": "https://pico.rynav.xyz/result/"}` +
								decodeURIComponent(req.body) +
								")"
						}`,
					color: 0xcf08c7,
				},
			],
		};

		await axios.post(process.env.webhook!, discordData);
	} catch (error) {
		console.error("Error in spying function:", error);
	}
}

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	//console.log(req.body)
	let request = req.body
	console.log(" > Got request: ", request)
	let decoded = ""
	try {
		decoded = JSON.parse(nextBase64.decode(request));
	}
	catch (e){
		console.log(" > Malformed input found, returning...")
		return res.status(200).json({error: true, message: "Got malformed input, please use the main page to input data"})
	}

	console.log(" > Decoded request: ", decoded);
	console.log(" > Fetching for the request!")
	let row = await fetch2(decoded);
	await spying(row, req);

	//console.log(row);
	//if (row.error) return res.status(404).json(row);
	res.status(200).json(row);
}

export const config = {
	api: {
		bodyParser: true,
		responseLimit: false,
	},
};

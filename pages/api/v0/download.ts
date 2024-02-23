import { NextApiRequest, NextApiResponse } from 'next';
import Database from 'better-sqlite3';
import requestIp from 'request-ip'
import axios from 'axios';

function fetch(data: string | undefined) {
	const db = new Database('./db/aaaaaaaa.db', { readonly: true });

	const row: any = db.prepare('SELECT url FROM files WHERE id = ?').get(data);
	if (!row)
		return { error: "Not found" }
	else {
		return row
	}

}

function fetch2(data: string | undefined) {
	const db = new Database('./db/aaaaaaaa.db', { readonly: true });

	const row: any = db.prepare('SELECT filename, length, filesize, encoder, uploaddate FROM files WHERE id = ?').get(data);
	if (!row)
		return { error: "Not found" }
	else {
		return row
	}
}

export default (req: NextApiRequest, res: NextApiResponse) => {
	// Replace this with your logic to fetch the data based on the provided ID

	const { id } = req.query;
	if (!id)
		return res.status(404).json({ error: "not found" })

	const data = fetch(id?.toString())

	if (data.error)
		return res.status(404).json({ error: "not found" })


	const data2 = fetch2(id?.toString())
	const detectedIp = requestIp.getClientIp(req)
	const embed = {
		embeds: [
			{
				title: 'New download',
				description: '```json\n' + JSON.stringify(data2, null, 2) + '```\nIP: ``' + detectedIp + '``\n Link: [' + id + '](' + data.url + ')',
				color: 0x7d1bfc,
			}
		],
	};

	axios.post(process.env.webhook!, embed)
		.then(response => {
			console.log('Message sent to Discord:', response.data);
		})
		.catch(error => {
			console.error('Error sending message to Discord:', error);
		});

	return res.redirect(data.url)
};

export const config = {
	api: {
		bodyParser: true,
		responseLimit: false,
	},
}
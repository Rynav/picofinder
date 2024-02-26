"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

import { Input } from "@/components/ui/input";

import Dropdown from "@/components/ui/Dropdown";
import { Button } from "@/components/ui/button";

export default function Home() {
	const { push } = useRouter();

	let [title, setTitle] = useState<string>("");
	let [lengthFrom, setLengthFrom] = useState<any>("");
	let [lengthTo, setLengthTo] = useState<any>("");

	const [encoder, setEncoder] = useState<string>("");
	const [encoderOpen, setEncoderOpen] = useState<boolean>(false);

	const [year, setYear] = useState<string>("");
	const [yearOpen, setYearOpen] = useState<boolean>(false);

	const [month, setMonth] = useState<string>("");
	const [monthOpen, setMonthOpen] = useState<boolean>(false);

	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);
	const [errorMessage, setErrorMessage] = useState<string>();
	const [customEncoder, setCustomEncoder] = useState<string>();

	function fetchData() {

		let query = Buffer.from(JSON.stringify({
			encoder: (customEncoder ? customEncoder : encoder),
			title: title,
			lengthFrom: lengthFrom,
			lengthTo: lengthTo,
			uploadYear: year,
			uploadMonth: month
		}), "utf-8").toString("base64");

		console.log(query);
		if (encoder.toString().length <= 1 && year.length <= 2 && month.length <= 2 && title.length <= 3) {
			setError(true);
			setErrorMessage("Title is too short, please select an encoder or make the title more than 3 chars long!");
			return;
		}
		setLoading(true);

		return push(`result/${query}`);
	}

	return (
		<main className="">
			<div className={"min-h-screen flex flex-col items-center justify-center gap-2"}>
				<form className="flex flex-col text-center gap-2 ">
					<h1>Title</h1>
					<div className="flex flex-row items-center gap-2">
						<Input type={"text"} placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)}
						       name="title" className="w-full focus:outline-none focus:border-blue-500 hover:border-blue-500"
						       disabled={loading} />
					</div>

					<h1>Duration</h1>
					<div className="flex flex-row items-center gap-2">
						<Input type={"text"} placeholder="From" value={lengthFrom}
						       onChange={(e) => setLengthFrom(e.target.value.replace(/[^[0-9]:]/g, ""))}
						       className={`w-full focus:outline-none focus:border-blue-500 hover:border-blue-500 ${(!lengthFrom.match(/^(\d|1\d|2[0-3]):[0-5]\d$/) && lengthFrom.length > 1) ? "border-rose-500" : ""}`}
						       name="dateFrom" />
						-
						<Input type={"text"} placeholder="To" value={lengthTo}
						       onChange={(e) => setLengthTo(e.target.value.replace(/[^[0-9]:]/g, ""))}
						       className={`w-full outline-none focus:outline-none focus:border-blue-500 hover:border-blue-500 ${(!lengthTo.match(/^(\d|1\d|2[0-3]):[0-5]\d$/) && lengthTo.length > 1) ? "border-rose-500" : ""}`}
						       name="dateTo" />
					</div>
					<div>
						<h1>Upload date</h1>
						<div className="flex flex-row items-center gap-2">
							<Dropdown value={month} setValue={setMonth} open={monthOpen} setOpen={setMonthOpen}
							          values={months} label={"Month..."} />
							<Dropdown value={year} setValue={setYear} open={yearOpen} setOpen={setYearOpen} values={years}
							          label={"Year..."} />
						</div>
					</div>

					<h1>Encoder</h1>
					<div className="flex flex-row items-center gap-2">
						<Dropdown value={encoder} setValue={setEncoder} open={encoderOpen} setOpen={setEncoderOpen}
						          values={encoders} label={"Encoder..."} />
					</div>
					{encoder == "Custom" && (
						<div>
							<h1>Custom encoder</h1>
							<div className="flex flex-row items-center gap-2">
								<input type={"text"} placeholder="Custom encoder" value={customEncoder}
								       onChange={(e) => setCustomEncoder(e.target.value)} name="custom encoder"
								       className="w-full input " disabled={loading} />
							</div>
						</div>
					)}

				</form>
				<Button onClick={fetchData} variant="outline" className={"hover:border-blue-500"}
				        disabled={loading || (!lengthFrom.match(/^(\d|1\d|2[0-3]):[0-5]\d$/) && lengthFrom.length > 1 || !lengthTo.match(/^(\d|1\d|2[0-3]):[0-5]\d$/) && lengthTo.length > 1)}>Submit</Button>

				<h3>Join us on <a href="https://discord.gg/BbSGtQfvJu" className="text-purple-300">discord</a>!</h3>
				{error && (
					<div role="alert" className="alert alert-error w-fit">
						<span>{errorMessage}</span>
					</div>
				)}
			</div>
			<footer className="absolute bottom-0 left-0 w-screen h-16">
				<div className="container mx-auto text-center text-xs">
					<p>&copy; 2023 - {new Date().getFullYear()} Rynav | contact@rynav.xyz</p>
					<div className="mt-4">
						<a href="/terms-of-service" className="text-blue-400 hover:underline">Terms of Service</a> |
						<a href="/privacy-policy" className="text-blue-400 hover:underline"> Privacy Policy</a>
					</div>
				</div>
			</footer>
		</main>
	);
}


const encoders = [
	{
		value: "LAME in FL Studio 8",
		label: "LAME in FL Studio 8"
	},
	{
		value: "LAME in FL Studio 10",
		label: "LAME in FL Studio 10"
	},
	{
		value: "LAME in FL Studio 11",
		label: "LAME in FL Studio 11"
	},
	{
		value: "LAME in FL Studio 12",
		label: "LAME in FL Studio 12"
	},
	{
		value: "LAME in FL Studio 20",
		label: "LAME in FL Studio 20"
	},
	{
		value: "LAME",
		label: "LAME"
	},
	{
		value: "REAPER",
		label: "REAPER"
	},
	{
		value: "iTunes",
		label: "iTunes"
	},
	{
		value: "Logic Pro",
		label: "Logic Pro"
	},
	{
		value: "GarageBand",
		label: "GarageBand"
	},
	{
		value: "MediaMonkey",
		label: "MediaMonkey"
	},
	{
		value: "Fraunhofer",
		label: "Fraunhofer"
	},
	{
		value: "Mixcraft",
		label: "Mixcraft"
	},
	{
		value: "Exact Audio Copy",
		label: "Exact Audio Copy"
	},
	{
		value: "Lavf",
		label: "Lavf"
	},
	{
		value: "Custom",
		label: "Custom"
	},
	{
		value: "NONE",
		label: "NONE"
	}
];

const months = [
	{
		value: "Jan",
		label: "Jan"
	},
	{
		value: "Feb",
		label: "Feb"
	},
	{
		value: "Mar",
		label: "Mar"
	},
	{
		value: "Apr",
		label: "Apr"
	},
	{
		value: "May",
		label: "May"
	},
	{
		value: "Jun",
		label: "Jun"
	},
	{
		value: "Jul",
		label: "Jul"
	},
	{
		value: "Aug",
		label: "Aug"
	},
	{
		value: "Sept",
		label: "Sept"
	},
	{
		value: "Oct",
		label: "Oct"
	},
	{
		value: "Nov",
		label: "Nov"
	},
	{
		value: "Dec",
		label: "Dec"
	},
	{
		value: "",
		label: "ALL"
	}
];

const years = [
	{
		value: "2010",
		label: "2010"
	},
	{
		value: "2011",
		label: "2011"
	},
	{
		value: "2012",
		label: "2012"
	},
	{
		value: "2013",
		label: "2013"
	},
	{
		value: "2014",
		label: "2014"
	},
	{
		value: "2015",
		label: "2015"
	},
	{
		value: "2016",
		label: "2016"
	},
	{
		value: "2017",
		label: "2017"
	},
	{
		value: "2018",
		label: "2018"
	},
	{
		value: "2019",
		label: "2019"
	},
	{
		value: "",
		label: "ALL"
	}
];
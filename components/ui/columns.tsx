"use client"

import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown } from "lucide-react"
import { Button, buttonVariants } from "./button";

type fileStruct = {
	audio: string,
	encoder: string,
	filename: string,
	filesize: string,
	id: string,
	length: number,
	uploaddate: string,
	url: string,
}

export const columns: ColumnDef<fileStruct>[] = [
	{
		accessorKey: "id",
		header: "",
		cell:({row}) => {
			return <a className={buttonVariants({ variant: "outline" })} href={"http://localhost:3000/api/v0/download?id="+row.getValue("id")}><i className={"bi-download"}></i></a>
		}
	},
	{
		accessorKey: "filename",
		header: "File name",
		cell: ({row}) => {
			return <p className={"overflow-hidden w-auto"}>{row.getValue("filename")}</p>
		}
	},
	{
		accessorKey: "length",
		header: ({column}) => {
			return (
				<Button
					variant="ghost"
					onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
				>
					Song duration
					<ArrowUpDown className="ml-2 h-4 w-4" />
				</Button>
			)
		},
		cell: ({row}) => {
			// @ts-ignore
			return <p className={"text-center"}>{Math.floor(row.getValue("length") / 60).toString().padStart(2, "0")}:{(row.getValue("length") % 60).toString().padStart(2, "0")}</p>;
		}
	},
	{
		accessorKey: "filesize",
		header: "File size"
	},
	{
		accessorKey: "uploaddate",
		header: "Upload date"
	},
	{
		accessorKey: "encoder",
		header: "Encoder",
	},
	{
		accessorKey: "audio",
		header: "",
		cell: ({row}) => {
			return <audio controls src={row.getValue("audio")}></audio>
		}
	},
]
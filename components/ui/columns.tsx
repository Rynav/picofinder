"use client"

import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown } from "lucide-react"
import { Button } from "./button"

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
		accessorKey: "filename",
		header: "File name",
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
	},
	{
		accessorKey: "filesize",
		header: "File size",
	},
	{
		accessorKey: "uploaddate",
		header: "Upload date",
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
"use client"

import * as React from "react"
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
} from "@/components/ui/command"
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover"

interface Props {
	value: string,
	setValue: any,
	open: boolean,
	setOpen: any,
	values : {value:string, label: string}[],
	label: string
}


const Dropdown = (props: Props) => {

	return (
		<Popover open={props.open} onOpenChange={props.setOpen}>
			<PopoverTrigger asChild>
				<Button
					variant="outline"
					role="combobox"
					aria-expanded={props.open}
					className="w-full justify-between focus:outline-none focus:border-blue-500 hover:border-blue-500"
				>
					{props.value
						? props.values.find((framework) => framework.value.toLowerCase() === props.value)?.label
						: props.label}
					<CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
				</Button>
			</PopoverTrigger>
			<PopoverContent className="w-full p-0">
				<Command>
					<CommandInput placeholder="Search..." className="h-9" />
					<CommandEmpty>No framework found.</CommandEmpty>
					<CommandGroup>
						{props.values.map((framework) => (
							<CommandItem
								key={framework.value}
								value={framework.value}
								onSelect={(currentValue) => {
									props.setValue(currentValue === props.value ? "" : currentValue)
									props.setOpen(false)
								}}
							>
								{framework.label}
								<CheckIcon
									className={cn(
										"ml-auto h-4 w-4",
										props.value === framework.value ? "opacity-100" : "opacity-0"
									)}
								/>
							</CommandItem>
						))}
					</CommandGroup>
				</Command>
			</PopoverContent>
		</Popover>
	)
}

export default Dropdown
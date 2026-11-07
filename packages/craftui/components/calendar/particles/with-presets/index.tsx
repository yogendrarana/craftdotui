"use client";

import * as React from "react";
import { addDays, format } from "date-fns";
import { Button } from "@craftdotui/baseui/components/button";
import { Calendar } from "@craftdotui/craftui/components/calendar";

const presets = [
	{ label: "Today", offset: 0 },
	{ label: "Tomorrow", offset: 1 },
	{ label: "In 3 days", offset: 3 },
	{ label: "In a week", offset: 7 },
	{ label: "In 2 weeks", offset: 14 },
];

export default function Particle() {
	const [date, setDate] = React.useState<Date | undefined>(new Date());
	const [month, setMonth] = React.useState<Date>(new Date());

	return (
		<div className="flex flex-col sm:flex-row overflow-hidden rounded-lg border border-border bg-background shadow-2xs">
			<div className="flex flex-row sm:flex-col gap-1 border-b sm:border-b-0 sm:border-r border-border p-3 sm:w-36 overflow-x-auto">
				{presets.map((preset) => {
					const targetDate = addDays(new Date(), preset.offset);
					return (
						<Button
							key={preset.label}
							variant="ghost"
							size="sm"
							className="justify-start font-normal text-xs shrink-0"
							onClick={() => {
								setDate(targetDate);
								setMonth(targetDate);
							}}
						>
							{preset.label}
						</Button>
					);
				})}
			</div>
			<div className="flex flex-col">
				<Calendar
					mode="single"
					month={month}
					onMonthChange={setMonth}
					selected={date}
					onSelect={setDate}
				/>
				<div className="border-t border-border bg-muted/40 px-3 py-2 text-xs text-muted-foreground">
					Selected:{" "}
					<span className="font-medium text-foreground">
						{date ? format(date, "PPP") : "None"}
					</span>
				</div>
			</div>
		</div>
	);
}

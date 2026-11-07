"use client";

import * as React from "react";
import { addDays } from "date-fns";
import { Button } from "@craftdotui/baseui/components/button";
import { DatePicker } from "@craftdotui/craftui/components/date-picker";

const presets = [
	{ label: "Today", offset: 0 },
	{ label: "Tomorrow", offset: 1 },
	{ label: "In 3 days", offset: 3 },
	{ label: "In a week", offset: 7 },
];

export default function Particle() {
	const [date, setDate] = React.useState<Date | undefined>(new Date());
	const [month, setMonth] = React.useState<Date>(new Date());

	return (
		<DatePicker
			value={date}
			onValueChange={setDate}
			calendarProps={{
				month,
				onMonthChange: setMonth,
			}}
		>
			<div className="grid grid-cols-2 gap-1.5 border-b border-border p-2.5">
				{presets.map((preset) => {
					const target = addDays(new Date(), preset.offset);
					return (
						<Button
							key={preset.label}
							variant="outline"
							size="xs"
							className="w-full justify-center font-normal text-xs"
							onClick={() => {
								setDate(target);
								setMonth(target);
							}}
						>
							{preset.label}
						</Button>
					);
				})}
			</div>
		</DatePicker>
	);
}

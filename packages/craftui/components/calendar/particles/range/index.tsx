"use client";

import * as React from "react";
import { addDays } from "date-fns";
import {
	Calendar,
	type DateRange,
} from "@craftdotui/craftui/components/calendar";

export default function Particle() {
	const [range, setRange] = React.useState<DateRange | undefined>({
		from: new Date(new Date().getFullYear(), new Date().getMonth(), 10),
		to: addDays(
			new Date(new Date().getFullYear(), new Date().getMonth(), 10),
			8,
		),
	});

	return (
		<Calendar
			mode="range"
			defaultMonth={range?.from}
			selected={range}
			onSelect={setRange}
			numberOfMonths={2}
			className="rounded-lg border border-border shadow-2xs"
		/>
	);
}

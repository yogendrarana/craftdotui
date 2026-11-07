"use client";

import * as React from "react";
import { addDays } from "date-fns";
import { Calendar } from "@craftdotui/craftui/components/calendar";

export default function Particle() {
	const today = new Date();
	const [dates, setDates] = React.useState<Date[] | undefined>([
		today,
		addDays(today, 2),
		addDays(today, 5),
	]);

	return (
		<Calendar
			mode="multiple"
			selected={dates}
			onSelect={setDates}
			className="rounded-lg border border-border shadow-2xs"
		/>
	);
}

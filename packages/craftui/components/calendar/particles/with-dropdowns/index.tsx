"use client";

import * as React from "react";
import { Calendar } from "@craftdotui/craftui/components/calendar";

export default function Particle() {
	const [date, setDate] = React.useState<Date | undefined>(new Date());

	return (
		<Calendar
			mode="single"
			captionLayout="dropdown"
			selected={date}
			onSelect={setDate}
			startMonth={new Date(1980, 0)}
			endMonth={new Date(2035, 11)}
			className="rounded-lg border border-border shadow-2xs"
		/>
	);
}

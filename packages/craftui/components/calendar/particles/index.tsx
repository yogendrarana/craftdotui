"use client";

import * as React from "react";
import { Calendar } from "@craftdotui/craftui/components/calendar";

export default function Particle() {
	const [date, setDate] = React.useState<Date | undefined>(new Date());

	return (
		<Calendar
			mode="single"
			selected={date}
			onSelect={setDate}
			className="rounded-lg border border-border shadow-2xs"
		/>
	);
}

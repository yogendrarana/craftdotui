"use client";

import * as React from "react";
import { DatePicker } from "@craftdotui/craftui/components/date-picker";

export default function Particle() {
	const [date, setDate] = React.useState<Date | undefined>();

	return (
		<DatePicker
			value={date}
			onValueChange={setDate}
			placeholder="Select date of birth"
			calendarProps={{
				captionLayout: "dropdown",
				startMonth: new Date(1950, 0),
				endMonth: new Date(),
			}}
		/>
	);
}

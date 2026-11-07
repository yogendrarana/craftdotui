"use client";

import * as React from "react";
import { DatePicker } from "@craftdotui/craftui/components/date-picker";

export default function Particle() {
	const [date, setDate] = React.useState<Date | undefined>(new Date());

	return <DatePicker value={date} onValueChange={setDate} />;
}

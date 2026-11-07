"use client";

import * as React from "react";
import { addDays } from "date-fns";
import {
	DateRangePicker,
	type DateRange,
} from "@craftdotui/craftui/components/date-picker";

export default function Particle() {
	const [range, setRange] = React.useState<DateRange | undefined>({
		from: new Date(),
		to: addDays(new Date(), 7),
	});

	return <DateRangePicker value={range} onValueChange={setRange} />;
}

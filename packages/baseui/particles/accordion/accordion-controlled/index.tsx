"use client";

import { useState } from "react";
import {
	Accordion,
	AccordionItem,
	AccordionTrigger,
	AccordionPanel,
} from "@craftdotui/baseui/components/accordion";
import { Button } from "@craftdotui/baseui/components/button";

export default function Particle() {
	const [value, setValue] = useState<string[]>(["item-1"]);

	return (
		<div className="w-full max-w-md space-y-4">
			<Accordion value={value} onValueChange={setValue}>
				<AccordionItem value="item-1">
					<AccordionTrigger>Who won 2022 World Cup?</AccordionTrigger>
					<AccordionPanel>
						Argentina defeated France in the final (3-3, 4-2 on
						penalties).
					</AccordionPanel>
				</AccordionItem>

				<AccordionItem value="item-2">
					<AccordionTrigger>Most World Cup goals?</AccordionTrigger>
					<AccordionPanel>
						Miroslav Klose (Germany) with 16 goals across 4
						tournaments.
					</AccordionPanel>
				</AccordionItem>

				<AccordionItem value="item-3">
					<AccordionTrigger>
						Ballon d'Or 2024 winner?
					</AccordionTrigger>
					<AccordionPanel>
						Rodri (Manchester City) for his outstanding midfield
						play.
					</AccordionPanel>
				</AccordionItem>
			</Accordion>

			<div className="flex gap-2">
				<Button
					onClick={() => setValue(["item-1", "item-2", "item-3"])}
				>
					Open All
				</Button>
				<Button variant="outline" onClick={() => setValue([])}>
					Close All
				</Button>
			</div>
		</div>
	);
}

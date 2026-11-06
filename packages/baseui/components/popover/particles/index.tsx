"use client";

import { Button } from "@craftdotui/baseui/components/button";
import {
	PopoverRoot,
	PopoverTrigger,
	PopoverContent,
	PopoverTitle,
	PopoverDescription,
} from "@craftdotui/baseui/components/popover";

export default function Particle() {
	return (
		<PopoverRoot>
			<PopoverTrigger
				render={<Button variant="outline">Open Popover</Button>}
			/>
			<PopoverContent>
				<PopoverTitle>Popover Title</PopoverTitle>
				<PopoverDescription>
					This is a simple popover description.
				</PopoverDescription>
			</PopoverContent>
		</PopoverRoot>
	);
}

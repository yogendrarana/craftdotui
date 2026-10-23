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
				openOnHover
				delay={300}
				render={<Button variant="outline">Hover me</Button>}
			/>
			<PopoverContent>
				<PopoverTitle>Hover Popover</PopoverTitle>
				<PopoverDescription>
					This popover opens on hover with a delay of 300ms.
				</PopoverDescription>
			</PopoverContent>
		</PopoverRoot>
	);
}

"use client";

import {
	PopoverRoot,
	PopoverTrigger,
	PopoverContent,
	PopoverTitle,
	PopoverDescription,
} from "@craftdotui/baseui/components/popover";
import { Button } from "@craftdotui/baseui/components/button";

export default function Particle() {
	return (
		<PopoverRoot>
			<PopoverTrigger render={<Button variant="outline">Click</Button>} />
			<PopoverContent hasBackdrop>
				<PopoverTitle>Backdrop Popover</PopoverTitle>
				<PopoverDescription>
					This popover has a backdrop that dims the background.
				</PopoverDescription>
			</PopoverContent>
		</PopoverRoot>
	);
}

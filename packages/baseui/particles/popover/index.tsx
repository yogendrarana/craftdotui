"use client";

import { Button } from "@craftdotui/baseui/components/button";
import {
	PopoverRoot,
	PopoverTrigger,
	PopoverPortal,
	PopoverPositioner,
	PopoverPopup,
	PopoverTitle,
	PopoverDescription,
	PopoverArrow,
} from "@craftdotui/baseui/components/popover";

export default function Particle() {
	return (
		<PopoverRoot>
			<PopoverTrigger
				render={<Button variant="outline">Open Popover</Button>}
			/>
			<PopoverPortal>
				<PopoverPositioner>
					<PopoverPopup>
						<PopoverArrow />
						<PopoverTitle>Popover Title</PopoverTitle>
						<PopoverDescription>
							This is a simple popover description.
						</PopoverDescription>
					</PopoverPopup>
				</PopoverPositioner>
			</PopoverPortal>
		</PopoverRoot>
	);
}

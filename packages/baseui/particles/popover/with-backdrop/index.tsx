"use client";

import {
	PopoverRoot,
	PopoverTrigger,
	PopoverPortal,
	PopoverPositioner,
	PopoverPopup,
	PopoverTitle,
	PopoverDescription,
	PopoverBackdrop,
	PopoverArrow,
} from "@craftdotui/baseui/components/popover";
import { Button } from "@craftdotui/baseui/components/button";

export default function Particle() {
	return (
		<PopoverRoot>
			<PopoverTrigger render={<Button variant="outline">Click</Button>} />
			<PopoverPortal>
				<PopoverBackdrop />
				<PopoverPositioner>
					<PopoverPopup>
						<PopoverArrow />
						<PopoverTitle>Backdrop Popover</PopoverTitle>
						<PopoverDescription>
							This popover has a backdrop that dims the
							background.
						</PopoverDescription>
					</PopoverPopup>
				</PopoverPositioner>
			</PopoverPortal>
		</PopoverRoot>
	);
}

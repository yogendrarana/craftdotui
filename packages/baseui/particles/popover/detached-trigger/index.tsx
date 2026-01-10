"use client";

import { Button } from "@craftdotui/baseui/components/button";
import {
	PopoverRoot,
	PopoverTrigger,
	PopoverPortal,
	PopoverPositioner,
	PopoverPopup,
	PopoverArrow,
	PopoverTitle,
	PopoverDescription,
	PopoverPrimitive,
} from "@craftdotui/baseui/components/popover";

const demoPopover = PopoverPrimitive.createHandle();

export default function Particle() {
	return (
		<div className="flex flex-col items-center gap-4">
			<PopoverTrigger
				handle={demoPopover}
				render={<Button variant="outline">Detached Popover</Button>}
			/>

			<PopoverRoot handle={demoPopover}>
				<PopoverPortal>
					<PopoverPositioner>
						<PopoverPopup>
							<PopoverArrow />
							<PopoverTitle>Detached Popover</PopoverTitle>
							<PopoverDescription>
								This popover is controlled by a trigger outside
								of its Root.
							</PopoverDescription>
						</PopoverPopup>
					</PopoverPositioner>
				</PopoverPortal>
			</PopoverRoot>
		</div>
	);
}

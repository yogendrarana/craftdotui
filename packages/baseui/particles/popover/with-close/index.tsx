"use client";

import { XIcon } from "lucide-react";
import { Button } from "@craftdotui/baseui/components/button";
import {
	PopoverRoot,
	PopoverTrigger,
	PopoverPortal,
	PopoverPositioner,
	PopoverPopup,
	PopoverTitle,
	PopoverDescription,
	PopoverClose,
	PopoverArrow,
} from "@craftdotui/baseui/components/popover";

export default function Particle() {
	return (
		<PopoverRoot>
			<PopoverTrigger render={<Button variant="outline">Click</Button>} />
			<PopoverPortal>
				<PopoverPositioner>
					<PopoverPopup>
						<PopoverArrow />
						<PopoverClose
							className="absolute right-2 top-2"
							render={
								<Button variant="ghost" size="icon-xs">
									<XIcon />
								</Button>
							}
						/>
						<PopoverTitle>Close Popover</PopoverTitle>
						<PopoverDescription>
							This popover has a close button in the top right
							corner.
						</PopoverDescription>
						<PopoverClose
							render={<Button variant="outline" size="sm" />}
						>
							Close
						</PopoverClose>
					</PopoverPopup>
				</PopoverPositioner>
			</PopoverPortal>
		</PopoverRoot>
	);
}

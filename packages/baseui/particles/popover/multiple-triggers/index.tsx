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
	PopoverPrimitive,
	PopoverArrow,
} from "@craftdotui/baseui/components/popover";

const demoPopover = PopoverPrimitive.createHandle<{ text: string }>();

export default function Particle() {
	return (
		<div className="flex flex-col items-center gap-4">
			<div className="flex gap-2">
				<PopoverTrigger
					handle={demoPopover}
					payload={{ text: "Trigger 1" }}
					render={<Button variant="outline">Trigger 1</Button>}
				/>
				<PopoverTrigger
					handle={demoPopover}
					payload={{ text: "Trigger 2" }}
					render={<Button variant="outline">Trigger 2</Button>}
				/>
			</div>

			<PopoverRoot handle={demoPopover}>
				{({ payload }) => (
					<PopoverPortal>
						<PopoverPositioner>
							<PopoverPopup>
								<PopoverArrow />
								<PopoverTitle>Multiple Triggers</PopoverTitle>
								{payload && (
									<PopoverDescription>
										This popover was opened by{" "}
										<strong>{payload?.text}</strong>.
									</PopoverDescription>
								)}
							</PopoverPopup>
						</PopoverPositioner>
					</PopoverPortal>
				)}
			</PopoverRoot>
		</div>
	);
}

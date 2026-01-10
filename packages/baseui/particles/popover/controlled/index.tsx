"use client";

import * as React from "react";
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
import { Button } from "@craftdotui/baseui/components/button";

const demoPopover = PopoverPrimitive.createHandle();

export default function Particle() {
	const [open, setOpen] = React.useState(false);
	const [triggerId, setTriggerId] = React.useState<string | null>(null);

	const handleOpenChange = (
		isOpen: boolean,
		eventDetails: PopoverPrimitive.Root.ChangeEventDetails,
	) => {
		setOpen(isOpen);
		setTriggerId(eventDetails.trigger?.id ?? null);
	};

	return (
		<div className="flex flex-col items-center gap-4">
			<div className="flex gap-2">
				<PopoverTrigger
					handle={demoPopover}
					id="trigger-1"
					render={<Button variant="outline">Trigger 1</Button>}
				/>
				<PopoverTrigger
					handle={demoPopover}
					id="trigger-2"
					render={<Button variant="outline">Trigger 2</Button>}
				/>
				<Button
					type="button"
					variant="secondary"
					onClick={() => {
						setTriggerId("trigger-2");
						setOpen(true);
					}}
				>
					Open Trigger 2
				</Button>
			</div>

			<PopoverRoot
				handle={demoPopover}
				open={open}
				onOpenChange={handleOpenChange}
				triggerId={triggerId}
			>
				<PopoverPortal>
					<PopoverPositioner>
						<PopoverPopup>
							<PopoverArrow />
							<PopoverTitle>Controlled Popover</PopoverTitle>
							<PopoverDescription>
								The active trigger is{" "}
								<strong>{triggerId}</strong>.
							</PopoverDescription>
						</PopoverPopup>
					</PopoverPositioner>
				</PopoverPortal>
			</PopoverRoot>
		</div>
	);
}

import { useState } from "react";
import {
	Tooltip,
	TooltipPopup,
	TooltipPositioner,
	TooltipPortal,
	TooltipProvider,
	TooltipTrigger,
} from "@craftdotui/baseui/components/tooltip";
import { Button } from "@craftdotui/baseui/components/button";

export function Particle() {
	const [open, setOpen] = useState(false);

	return (
		<TooltipProvider>
			<div className="flex items-center gap-4">
				<Tooltip open={open} onOpenChange={setOpen}>
					<TooltipTrigger
						render={
							<Button variant="outline" aria-label="Open Tooltip">
								Open Tooltip
							</Button>
						}
					/>
					<TooltipPortal>
						<TooltipPositioner sideOffset={10}>
							<TooltipPopup>Controlled Tooltip</TooltipPopup>
						</TooltipPositioner>
					</TooltipPortal>
				</Tooltip>

				<Button
					onClick={() => setOpen((prev) => !prev)}
					variant="secondary"
				>
					Click
				</Button>
			</div>
		</TooltipProvider>
	);
}

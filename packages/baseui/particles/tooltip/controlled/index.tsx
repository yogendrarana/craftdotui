import { useState } from "react";
import {
	TooltipRoot,
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
				<TooltipRoot open={open} onOpenChange={setOpen}>
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
				</TooltipRoot>

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

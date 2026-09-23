import {
	TooltipRoot,
	TooltipPopup,
	TooltipPositioner,
	TooltipPortal,
	TooltipProvider,
	TooltipTrigger,
	createHandle,
} from "@craftdotui/baseui/components/tooltip";
import { Button } from "@craftdotui/baseui/components/button";
import { Info } from "lucide-react";

const demoTooltip = createHandle();

export function Particle() {
	return (
		<TooltipProvider>
			<div className="flex flex-col items-center gap-4">
				<TooltipTrigger
					handle={demoTooltip}
					render={
						<Button variant="outline" size="icon">
							<Info className="h-4 w-4" />
						</Button>
					}
				/>

				<TooltipRoot handle={demoTooltip}>
					<TooltipPortal>
						<TooltipPositioner sideOffset={10}>
							<TooltipPopup>
								This is a detached tooltip
							</TooltipPopup>
						</TooltipPositioner>
					</TooltipPortal>
				</TooltipRoot>
			</div>
		</TooltipProvider>
	);
}

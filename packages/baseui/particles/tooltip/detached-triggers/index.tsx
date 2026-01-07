import {
	Tooltip,
	TooltipPopup,
	TooltipPositioner,
	TooltipPortal,
	TooltipPrimitive,
	TooltipProvider,
	TooltipTrigger,
} from "@craftdotui/baseui/components/tooltip";
import { Button } from "@craftdotui/baseui/components/button";
import { Info } from "lucide-react";

const demoTooltip = TooltipPrimitive.createHandle();

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

				<Tooltip handle={demoTooltip}>
					<TooltipPortal>
						<TooltipPositioner sideOffset={10}>
							<TooltipPopup>
								This is a detached tooltip
							</TooltipPopup>
						</TooltipPositioner>
					</TooltipPortal>
				</Tooltip>
			</div>
		</TooltipProvider>
	);
}

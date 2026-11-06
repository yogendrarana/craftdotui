"use client";

import {
	TooltipRoot,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
	createHandle,
} from "@craftdotui/baseui/components/tooltip";
import { Button } from "@craftdotui/baseui/components/button";
import { HelpCircle, Info } from "lucide-react";

const sharedTooltip = createHandle();

export function Particle() {
	return (
		<TooltipProvider>
			<div className="flex items-center gap-4">
				<TooltipTrigger
					handle={sharedTooltip}
					render={
						<Button variant="outline" size="icon">
							<Info className="h-4 w-4" />
						</Button>
					}
				/>
				<TooltipTrigger
					handle={sharedTooltip}
					render={
						<Button variant="outline" size="icon">
							<HelpCircle className="h-4 w-4" />
						</Button>
					}
				/>

				<TooltipRoot handle={sharedTooltip}>
					<TooltipContent positionerProps={{ sideOffset: 8 }}>
						Tooltip triggered by multiple elements
					</TooltipContent>
				</TooltipRoot>
			</div>
		</TooltipProvider>
	);
}

export default Particle;

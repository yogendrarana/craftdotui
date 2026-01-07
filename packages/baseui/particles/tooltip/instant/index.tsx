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
	return (
		<TooltipProvider delay={0}>
			<Tooltip>
				<TooltipTrigger
					render={
						<Button variant="outline">Instant Animation</Button>
					}
				/>
				<TooltipPortal>
					<TooltipPositioner sideOffset={10}>
						<TooltipPopup>Custom Styled & Animated</TooltipPopup>
					</TooltipPositioner>
				</TooltipPortal>
			</Tooltip>
		</TooltipProvider>
	);
}

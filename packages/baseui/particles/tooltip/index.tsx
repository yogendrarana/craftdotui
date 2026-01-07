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
		<TooltipProvider>
			<Tooltip>
				<TooltipTrigger
					render={<Button variant="outline">Hover me</Button>}
				/>
				<TooltipPortal>
					<TooltipPositioner sideOffset={10}>
						<TooltipPopup>Add to library</TooltipPopup>
					</TooltipPositioner>
				</TooltipPortal>
			</Tooltip>
		</TooltipProvider>
	);
}

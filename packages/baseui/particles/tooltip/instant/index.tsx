import {
	TooltipRoot,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@craftdotui/baseui/components/tooltip";
import { Button } from "@craftdotui/baseui/components/button";

export function Particle() {
	return (
		<TooltipProvider delay={0}>
			<TooltipRoot>
				<TooltipTrigger
					render={
						<Button variant="outline">Instant Animation</Button>
					}
				/>
				<TooltipContent>Custom Styled & Animated</TooltipContent>
			</TooltipRoot>
		</TooltipProvider>
	);
}

export default Particle;

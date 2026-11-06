import {
	TooltipRoot,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@craftdotui/baseui/components/tooltip";
import { Button } from "@craftdotui/baseui/components/button";

export function Particle() {
	return (
		<TooltipProvider>
			<TooltipRoot>
				<TooltipTrigger
					render={<Button variant="outline">Hover me</Button>}
				/>
				<TooltipContent>Add to library</TooltipContent>
			</TooltipRoot>
		</TooltipProvider>
	);
}

export default Particle;

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
			<div className="grid grid-cols-2 grid-rows-2 gap-2">
				<TooltipRoot>
					<TooltipTrigger
						render={
							<Button className="w-20" variant="outline">
								Top
							</Button>
						}
					/>
					<TooltipContent positionerProps={{ side: "top" }}>
						Tooltip on top
					</TooltipContent>
				</TooltipRoot>

				<TooltipRoot>
					<TooltipTrigger
						render={
							<Button className="w-20" variant="outline">
								Right
							</Button>
						}
					/>
					<TooltipContent positionerProps={{ side: "right" }}>
						Tooltip on right
					</TooltipContent>
				</TooltipRoot>

				<TooltipRoot>
					<TooltipTrigger
						render={
							<Button className="w-20" variant="outline">
								Left
							</Button>
						}
					/>
					<TooltipContent positionerProps={{ side: "left" }}>
						Tooltip on left
					</TooltipContent>
				</TooltipRoot>

				<TooltipRoot>
					<TooltipTrigger
						render={
							<Button className="w-20" variant="outline">
								Bottom
							</Button>
						}
					/>
					<TooltipContent positionerProps={{ side: "bottom" }}>
						Tooltip on bottom
					</TooltipContent>
				</TooltipRoot>
			</div>
		</TooltipProvider>
	);
}

export default Particle;

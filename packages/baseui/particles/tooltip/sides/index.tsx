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
			<div className="grid grid-cols-2 grid-rows-2 gap-2">
				<Tooltip>
					<TooltipTrigger
						render={
							<Button className="w-20" variant="outline">
								Top
							</Button>
						}
					/>
					<TooltipPortal>
						<TooltipPositioner side="top" sideOffset={10}>
							<TooltipPopup>Tooltip on top</TooltipPopup>
						</TooltipPositioner>
					</TooltipPortal>
				</Tooltip>

				<Tooltip>
					<TooltipTrigger
						render={
							<Button className="w-20" variant="outline">
								Right
							</Button>
						}
					/>
					<TooltipPortal>
						<TooltipPositioner side="right" sideOffset={10}>
							<TooltipPopup>Tooltip on right</TooltipPopup>
						</TooltipPositioner>
					</TooltipPortal>
				</Tooltip>

				<Tooltip>
					<TooltipTrigger
						render={
							<Button className="w-20" variant="outline">
								Left
							</Button>
						}
					/>
					<TooltipPortal>
						<TooltipPositioner side="left" sideOffset={10}>
							<TooltipPopup>Tooltip on left</TooltipPopup>
						</TooltipPositioner>
					</TooltipPortal>
				</Tooltip>

				<Tooltip>
					<TooltipTrigger
						render={
							<Button className="w-20" variant="outline">
								Bottom
							</Button>
						}
					/>
					<TooltipPortal>
						<TooltipPositioner side="bottom" sideOffset={10}>
							<TooltipPopup>Tooltip on bottom</TooltipPopup>
						</TooltipPositioner>
					</TooltipPortal>
				</Tooltip>
			</div>
		</TooltipProvider>
	);
}

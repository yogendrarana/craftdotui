import { BoldIcon, ItalicIcon, UnderlineIcon } from "lucide-react";

import {
	TooltipRoot,
	TooltipPopup,
	TooltipProvider,
	TooltipTrigger,
	TooltipPortal,
	TooltipPositioner,
} from "@craftdotui/baseui/components/tooltip";

import {
	ToggleGroupItem,
	ToggleGroupRoot,
} from "@craftdotui/baseui/components/toggle-group";

export default function Particle() {
	return (
		<TooltipProvider>
			<ToggleGroupRoot defaultValue={["bold"]} multiple>
				<TooltipRoot>
					<TooltipTrigger
						render={
							<ToggleGroupItem
								aria-label="Toggle bold"
								value="bold"
							/>
						}
					>
						<BoldIcon />
					</TooltipTrigger>
					<TooltipPortal>
						<TooltipPositioner sideOffset={10}>
							<TooltipPopup>Bold</TooltipPopup>
						</TooltipPositioner>
					</TooltipPortal>
				</TooltipRoot>

				<TooltipRoot>
					<TooltipTrigger
						render={
							<ToggleGroupItem
								aria-label="Toggle italic"
								value="italic"
							/>
						}
					>
						<ItalicIcon />
					</TooltipTrigger>
					<TooltipPortal>
						<TooltipPositioner sideOffset={10}>
							<TooltipPopup>Italic</TooltipPopup>
						</TooltipPositioner>
					</TooltipPortal>
				</TooltipRoot>

				<TooltipRoot>
					<TooltipTrigger
						render={
							<ToggleGroupItem
								aria-label="Toggle underline"
								value="underline"
							/>
						}
					>
						<UnderlineIcon />
					</TooltipTrigger>
					<TooltipPortal>
						<TooltipPositioner sideOffset={10}>
							<TooltipPopup>Underline</TooltipPopup>
						</TooltipPositioner>
					</TooltipPortal>
				</TooltipRoot>
			</ToggleGroupRoot>
		</TooltipProvider>
	);
}

import { BoldIcon, ItalicIcon, UnderlineIcon } from "lucide-react";

import {
	Tooltip,
	TooltipPopup,
	TooltipProvider,
	TooltipTrigger,
	TooltipPortal,
	TooltipPositioner,
} from "@craftdotui/baseui/components/tooltip";

import {
	ToggleGroupItem,
	ToggleGroup,
} from "@craftdotui/baseui/components/toggle-group";

export default function Particle() {
	return (
		<TooltipProvider>
			<ToggleGroup defaultValue={["bold"]} multiple>
				<Tooltip>
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
				</Tooltip>

				<Tooltip>
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
				</Tooltip>

				<Tooltip>
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
				</Tooltip>
			</ToggleGroup>
		</TooltipProvider>
	);
}

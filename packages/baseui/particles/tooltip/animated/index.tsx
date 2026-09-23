import { BoldIcon, ItalicIcon, UnderlineIcon } from "lucide-react";

import {
	TooltipRoot,
	TooltipPopup,
	TooltipProvider,
	TooltipTrigger,
	TooltipPortal,
	TooltipPositioner,
	createHandle,
} from "@craftdotui/baseui/components/tooltip";

import {
	ToggleGroupItem,
	ToggleGroupRoot,
} from "@craftdotui/baseui/components/toggle-group";

const tooltipHandle = createHandle();

const BoldTooltip = () => <span>Apply bold to text.</span>;
const ItalicTooltip = () => <span>Italicizing the text is fun.</span>;
const UnderlineTooltip = () => (
	<span>Underlined text helps to highlight the text.</span>
);

export default function Particle() {
	return (
		<TooltipProvider delay={100}>
			<ToggleGroupRoot>
				<TooltipTrigger
					handle={tooltipHandle}
					payload={BoldTooltip}
					render={
						<ToggleGroupItem
							aria-label="Toggle bold"
							value="bold"
							size="icon"
						/>
					}
				>
					<BoldIcon />
				</TooltipTrigger>

				<TooltipTrigger
					handle={tooltipHandle}
					payload={ItalicTooltip}
					render={
						<ToggleGroupItem
							aria-label="Toggle italic"
							value="italic"
							size="icon"
						/>
					}
				>
					<ItalicIcon />
				</TooltipTrigger>

				<TooltipTrigger
					handle={tooltipHandle}
					payload={UnderlineTooltip}
					render={
						<ToggleGroupItem
							aria-label="Toggle underline"
							value="underline"
							size="icon"
						/>
					}
				>
					<UnderlineIcon />
				</TooltipTrigger>
			</ToggleGroupRoot>

			<TooltipRoot handle={tooltipHandle}>
				{({ payload }) => {
					const Payload = payload as React.ComponentType | undefined;

					return (
						<TooltipPortal>
							<TooltipPositioner sideOffset={10}>
								<TooltipPopup>
									{Payload && <Payload />}
								</TooltipPopup>
							</TooltipPositioner>
						</TooltipPortal>
					);
				}}
			</TooltipRoot>
		</TooltipProvider>
	);
}

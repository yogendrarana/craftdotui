import { BoldIcon, ItalicIcon, UnderlineIcon } from "lucide-react";

import {
	Tooltip,
	TooltipPopup,
	TooltipProvider,
	TooltipTrigger,
	TooltipPortal,
	TooltipPositioner,
	TooltipPrimitive,
} from "@craftdotui/baseui/components/tooltip";

import {
	ToggleGroupItem,
	ToggleGroup,
} from "@craftdotui/baseui/components/toggle-group";

const tooltipHandle = TooltipPrimitive.createHandle();

const BoldTooltip = () => <span>Apply bold to text.</span>;
const ItalicTooltip = () => <span>Italicizing the text is fun.</span>;
const UnderlineTooltip = () => (
	<span>Underlined text helps to highlight the text.</span>
);

export default function Particle() {
	return (
		<TooltipProvider delay={100}>
			<ToggleGroup>
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
			</ToggleGroup>

			<Tooltip handle={tooltipHandle}>
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
			</Tooltip>
		</TooltipProvider>
	);
}

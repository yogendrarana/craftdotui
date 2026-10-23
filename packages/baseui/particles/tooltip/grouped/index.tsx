import { BoldIcon, ItalicIcon, UnderlineIcon } from "lucide-react";

import {
	TooltipRoot,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@craftdotui/baseui/components/tooltip";

import {
	ToggleGroupItem,
	ToggleGroupRoot,
} from "@craftdotui/baseui/components/toggle-group";

export function Particle() {
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
					<TooltipContent>Bold</TooltipContent>
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
					<TooltipContent>Italic</TooltipContent>
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
					<TooltipContent>Underline</TooltipContent>
				</TooltipRoot>
			</ToggleGroupRoot>
		</TooltipProvider>
	);
}

export default Particle;

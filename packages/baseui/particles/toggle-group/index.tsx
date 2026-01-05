import {
	ToggleGroup,
	ToggleGroupItem,
} from "@craftdotui/baseui/components/toggle-group";
import { Bold, Italic, Underline } from "lucide-react";

export function Particle() {
	return (
		<ToggleGroup defaultValue={["bold"]} multiple>
			<ToggleGroupItem value="bold" aria-label="Toggle bold" size="icon">
				<Bold className="h-4 w-4" />
			</ToggleGroupItem>
			<ToggleGroupItem
				value="italic"
				aria-label="Toggle italic"
				size="icon"
			>
				<Italic className="h-4 w-4" />
			</ToggleGroupItem>
			<ToggleGroupItem
				value="underline"
				aria-label="Toggle underline"
				size="icon"
			>
				<Underline className="h-4 w-4" />
			</ToggleGroupItem>
		</ToggleGroup>
	);
}

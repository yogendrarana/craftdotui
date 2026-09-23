import { ToggleRoot } from "@craftdotui/baseui/components/toggle";
import { Italic } from "lucide-react";

export function Particle() {
	return (
		<ToggleRoot aria-label="Toggle italic">
			<Italic className="mr-2 h-4 w-4" />
			Italic
		</ToggleRoot>
	);
}

import { Toggle } from "@craftdotui/baseui/components/toggle";
import { Italic } from "lucide-react";

export function Particle() {
	return (
		<Toggle aria-label="Toggle italic">
			<Italic className="mr-2 h-4 w-4" />
			Italic
		</Toggle>
	);
}

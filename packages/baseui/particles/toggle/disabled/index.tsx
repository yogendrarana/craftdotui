import { Toggle } from "@craftdotui/baseui/components/toggle";
import { Underline } from "lucide-react";

export function Particle() {
	return (
		<Toggle disabled variant="outline" size="icon">
			<Underline className="h-4 w-4" />
		</Toggle>
	);
}

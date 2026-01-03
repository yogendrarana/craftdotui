import { Toggle } from "@craftdotui/baseui/components/toggle";
import { Bold, Italic, Underline } from "lucide-react";

export function Particle() {
	return (
		<div className="flex items-center gap-1">
			<Toggle variant="outline" size="icon">
				<Bold className="h-4 w-4" />
			</Toggle>
			<Toggle variant="outline" size="icon">
				<Italic className="h-4 w-4" />
			</Toggle>
			<Toggle variant="outline" size="icon">
				<Underline className="h-4 w-4" />
			</Toggle>
		</div>
	);
}

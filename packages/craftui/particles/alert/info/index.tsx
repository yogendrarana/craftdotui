import { Info } from "lucide-react";
import {
	AlertDescription,
	AlertRoot,
	AlertTitle,
} from "@craftdotui/craftui/components/alert";

export function Particle() {
	return (
		<AlertRoot variant="info" className="max-w-lg">
			<Info />
			<AlertTitle>New version available</AlertTitle>
			<AlertDescription>
				Craft UI v2.0 is now available with support for Tailwind CSS v4
				design tokens.
			</AlertDescription>
		</AlertRoot>
	);
}

export default Particle;

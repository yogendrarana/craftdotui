import { CircleAlert } from "lucide-react";
import {
	AlertDescription,
	AlertRoot,
	AlertTitle,
} from "@craftdotui/craftui/components/alert";

export function Particle() {
	return (
		<AlertRoot variant="destructive" className="max-w-lg">
			<CircleAlert />
			<AlertTitle>Unable to process your payment.</AlertTitle>
			<AlertDescription>
				<p>Please verify your billing information and try again.</p>
			</AlertDescription>
		</AlertRoot>
	);
}

export default Particle;

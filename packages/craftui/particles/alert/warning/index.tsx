import { TriangleAlert } from "lucide-react";
import {
	AlertDescription,
	AlertRoot,
	AlertTitle,
} from "@craftdotui/craftui/components/alert";

export function Particle() {
	return (
		<AlertRoot variant="warning" className="max-w-lg">
			<TriangleAlert />
			<AlertTitle>API rate limit approaching</AlertTitle>
			<AlertDescription>
				You have used 90% of your monthly request quota. Consider
				upgrading your plan to avoid interruptions.
			</AlertDescription>
		</AlertRoot>
	);
}

export default Particle;

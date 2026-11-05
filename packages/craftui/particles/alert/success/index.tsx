import { CircleCheck } from "lucide-react";
import {
	AlertDescription,
	AlertRoot,
	AlertTitle,
} from "@craftdotui/craftui/components/alert";

export function Particle() {
	return (
		<AlertRoot variant="success" className="max-w-lg">
			<CircleCheck />
			<AlertTitle>Deployment successful!</AlertTitle>
			<AlertDescription>
				Your changes have been deployed to production and are now live.
			</AlertDescription>
		</AlertRoot>
	);
}

export default Particle;

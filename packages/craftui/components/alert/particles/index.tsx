import { Terminal } from "lucide-react";
import {
	AlertDescription,
	AlertRoot,
	AlertTitle,
} from "@craftdotui/craftui/components/alert";

export function Particle() {
	return (
		<AlertRoot className="max-w-lg">
			<Terminal />
			<AlertTitle>Heads up!</AlertTitle>
			<AlertDescription>
				You can add components and dependencies to your app using the
				cli.
			</AlertDescription>
		</AlertRoot>
	);
}

export default Particle;

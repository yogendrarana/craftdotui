import {
	AlertDescription,
	AlertRoot,
	AlertTitle,
} from "@craftdotui/craftui/components/alert";

export function Particle() {
	return (
		<AlertRoot className="max-w-lg">
			<AlertTitle>Scheduled maintenance</AlertTitle>
			<AlertDescription>
				Our database cluster will undergo scheduled maintenance on
				Sunday at 02:00 UTC.
			</AlertDescription>
		</AlertRoot>
	);
}

export default Particle;

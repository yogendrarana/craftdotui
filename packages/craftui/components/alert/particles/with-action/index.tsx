import { ShieldAlert } from "lucide-react";
import {
	AlertDescription,
	AlertRoot,
	AlertTitle,
} from "@craftdotui/craftui/components/alert";
import { Button } from "@craftdotui/baseui/components/button";

export function Particle() {
	return (
		<AlertRoot className="max-w-lg py-5">
			<ShieldAlert />
			<AlertTitle>Two-factor authentication is not enabled</AlertTitle>
			<AlertDescription>
				<p>
					Add an extra layer of security to your account by enabling
					two-factor authentication.
				</p>
				<div className="mt-2 flex items-center gap-2">
					<Button size="xs">Enable 2FA</Button>
					<Button size="xs" variant="ghost">
						Learn more
					</Button>
				</div>
			</AlertDescription>
		</AlertRoot>
	);
}

export default Particle;

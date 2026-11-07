import { Input } from "@craftdotui/baseui/components/input";
import { Label } from "@craftdotui/craftui/components/label";

export default function Particle() {
	return (
		<div className="flex w-full max-w-xs flex-col gap-2">
			<Label htmlFor="label-demo-email">Email address</Label>
			<Input
				id="label-demo-email"
				type="email"
				placeholder="you@craftui.com"
			/>
		</div>
	);
}

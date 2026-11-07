import { Input } from "@craftdotui/baseui/components/input";
import { Label } from "@craftdotui/craftui/components/label";

export default function Particle() {
	return (
		<div
			data-disabled="true"
			className="group flex w-full max-w-xs flex-col gap-2"
		>
			<Label htmlFor="label-disabled-input">Workspace ID</Label>
			<Input
				id="label-disabled-input"
				disabled
				defaultValue="ws_94f820a1b"
			/>
		</div>
	);
}

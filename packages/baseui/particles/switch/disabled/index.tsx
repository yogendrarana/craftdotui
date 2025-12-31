import { Switch } from "@craftdotui/baseui/components/switch";

export function Particle() {
	return (
		<div className="flex items-center space-x-2">
			<Switch id="disabled-mode" disabled />
			<label
				htmlFor="disabled-mode"
				className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
			>
				Disabled
			</label>
		</div>
	);
}

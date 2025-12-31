import { Switch } from "@craftdotui/baseui/components/switch";

export function Particle() {
	return (
		<div className="flex items-center space-x-2">
			<Switch id="airplane-mode" />
			<label htmlFor="airplane-mode" className="text-sm font-medium">
				Airplane Mode
			</label>
		</div>
	);
}

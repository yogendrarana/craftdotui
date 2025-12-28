import { Input } from "@craftdotui/baseui/components/input";

export function Particle() {
	return (
		<div className="max-w-64 space-y-4">
			<Input size="sm" placeholder="Small input" />
			<Input size="md" placeholder="Medium input" />
			<Input size="lg" placeholder="Large input" />
		</div>
	);
}

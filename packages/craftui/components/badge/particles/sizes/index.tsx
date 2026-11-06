import { Badge } from "@craftdotui/craftui/components/badge";

export function Particle() {
	return (
		<div className="flex flex-wrap items-center gap-2">
			<Badge size="sm">Small</Badge>
			<Badge size="md">Medium</Badge>
			<Badge size="lg">Large</Badge>
		</div>
	);
}

export default Particle;

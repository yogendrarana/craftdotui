import { Badge } from "@craftdotui/craftui/components/badge";

export function Particle() {
	return (
		<div className="flex flex-wrap items-center gap-2">
			<Badge variant="success">Success</Badge>
			<Badge variant="warning">Warning</Badge>
			<Badge variant="info">Info</Badge>
			<Badge variant="destructive">Destructive</Badge>
		</div>
	);
}

export default Particle;

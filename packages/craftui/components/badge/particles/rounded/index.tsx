import { Badge } from "@craftdotui/craftui/components/badge";

export function Particle() {
	return (
		<div className="flex flex-wrap items-center gap-2">
			<Badge className="rounded-full">Pill</Badge>
			<Badge variant="outline" className="rounded-full">
				v2.4.0
			</Badge>
			<Badge className="min-w-5.5 rounded-full px-1.5 tabular-nums">
				8
			</Badge>
			<Badge
				variant="destructive"
				className="min-w-5.5 rounded-full px-1.5 tabular-nums"
			>
				99+
			</Badge>
		</div>
	);
}

export default Particle;

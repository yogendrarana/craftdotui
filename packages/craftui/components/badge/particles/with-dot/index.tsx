import { Badge } from "@craftdotui/craftui/components/badge";

export function Particle() {
	return (
		<div className="flex flex-wrap items-center gap-2">
			<Badge variant="outline">
				<span
					aria-hidden="true"
					className="size-1.5 rounded-full bg-success"
				/>
				Operational
			</Badge>
			<Badge variant="outline">
				<span
					aria-hidden="true"
					className="size-1.5 rounded-full bg-warning"
				/>
				Degraded
			</Badge>
			<Badge variant="outline">
				<span
					aria-hidden="true"
					className="size-1.5 rounded-full bg-destructive"
				/>
				Outage
			</Badge>
		</div>
	);
}

export default Particle;

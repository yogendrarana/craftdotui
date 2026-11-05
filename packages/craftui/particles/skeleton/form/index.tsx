import { Skeleton } from "@craftdotui/craftui/components/skeleton";

export function Particle() {
	return (
		<div className="w-full max-w-xs space-y-4">
			<div className="space-y-2">
				<Skeleton className="h-3.5 w-20" />
				<Skeleton className="h-8 w-full rounded-md" />
			</div>
			<div className="space-y-2">
				<Skeleton className="h-3.5 w-28" />
				<Skeleton className="h-8 w-full rounded-md" />
			</div>
			<Skeleton className="h-8 w-24 rounded-md" />
		</div>
	);
}

export default Particle;

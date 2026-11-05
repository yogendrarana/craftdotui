import { Skeleton } from "@craftdotui/craftui/components/skeleton";

export function Particle() {
	return (
		<div className="flex items-center space-x-4">
			<Skeleton className="size-11 rounded-full" />
			<div className="space-y-2">
				<Skeleton className="h-4 w-50" />
				<Skeleton className="h-4 w-36" />
			</div>
		</div>
	);
}

export default Particle;

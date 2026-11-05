import { Skeleton } from "@craftdotui/craftui/components/skeleton";

export function Particle() {
	return (
		<div className="flex w-full max-w-xs flex-col space-y-3 rounded-lg border border-border p-4">
			<Skeleton className="h-32 w-full rounded-md" />
			<div className="space-y-2">
				<Skeleton className="h-4 w-3/4" />
				<Skeleton className="h-3.5 w-full" />
				<Skeleton className="h-3.5 w-5/6" />
			</div>
			<div className="flex items-center justify-between pt-2">
				<Skeleton className="h-4 w-16" />
				<Skeleton className="h-7 w-20 rounded-md" />
			</div>
		</div>
	);
}

export default Particle;

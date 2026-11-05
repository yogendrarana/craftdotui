import { Skeleton } from "@craftdotui/craftui/components/skeleton";

export function Particle() {
	return (
		<div className="w-full max-w-md space-y-2.5">
			<Skeleton className="h-5 w-2/5" />
			<Skeleton className="h-3.5 w-full" />
			<Skeleton className="h-3.5 w-11/12" />
			<Skeleton className="h-3.5 w-4/5" />
		</div>
	);
}

export default Particle;

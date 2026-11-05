import { Skeleton } from "@craftdotui/craftui/components/skeleton";

export function Particle() {
	return (
		<div className="w-full max-w-md rounded-lg border border-border">
			<div className="grid grid-cols-4 gap-4 border-b border-border bg-muted/30 px-4 py-2.5">
				<Skeleton className="h-3.5 w-16" />
				<Skeleton className="h-3.5 w-20" />
				<Skeleton className="h-3.5 w-14" />
				<Skeleton className="ml-auto h-3.5 w-12" />
			</div>
			<div className="divide-y divide-border">
				{Array.from({ length: 4 }).map((_, i) => (
					<div
						key={i}
						className="grid grid-cols-4 items-center gap-4 px-4 py-3"
					>
						<Skeleton className="h-3.5 w-20" />
						<Skeleton className="h-3.5 w-24" />
						<Skeleton className="h-5 w-14 rounded-full" />
						<Skeleton className="ml-auto h-3.5 w-10" />
					</div>
				))}
			</div>
		</div>
	);
}

export default Particle;

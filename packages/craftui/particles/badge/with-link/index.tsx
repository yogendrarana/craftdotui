import { ArrowUpRight } from "lucide-react";
import { Badge } from "@craftdotui/craftui/components/badge";

export function Particle() {
	return (
		<div className="flex flex-wrap items-center gap-2">
			<Badge
				variant="outline"
				render={<a href="/docs/getting-started/introduction" />}
			>
				Documentation
				<ArrowUpRight />
			</Badge>
			<Badge
				variant="secondary"
				render={<a href="/docs/craftui/components/breadcrumb" />}
			>
				Breadcrumb
				<ArrowUpRight />
			</Badge>
		</div>
	);
}

export default Particle;

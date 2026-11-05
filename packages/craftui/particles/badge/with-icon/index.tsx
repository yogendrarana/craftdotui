import { ArrowRight, BadgeCheck, ShieldAlert } from "lucide-react";
import { Badge } from "@craftdotui/craftui/components/badge";

export function Particle() {
	return (
		<div className="flex flex-wrap items-center gap-2">
			<Badge variant="info">
				<BadgeCheck />
				Verified
			</Badge>
			<Badge variant="destructive">
				<ShieldAlert />
				Action Required
			</Badge>
			<Badge variant="secondary">
				Next Step
				<ArrowRight />
			</Badge>
		</div>
	);
}

export default Particle;

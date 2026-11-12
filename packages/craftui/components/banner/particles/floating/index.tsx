import { ArrowRight, Zap } from "lucide-react";
import {
	BannerAction,
	BannerClose,
	BannerContent,
	BannerDescription,
	BannerIcon,
	BannerRoot,
	BannerTitle,
} from "@craftdotui/craftui/components/banner";
import { Button } from "@craftdotui/baseui/components/button";

export function Particle() {
	return (
		<div className="relative min-h-[140px] w-full rounded-lg border bg-muted/20 p-6">
			<BannerRoot
				appearance="floating"
				variant="default"
				className="static translate-x-0 mx-auto"
			>
				<BannerIcon>
					<Zap className="text-warning fill-warning" />
				</BannerIcon>
				<BannerContent>
					<BannerTitle>Pro Plan 50% Off</BannerTitle>
					<BannerDescription>
						Limited-time offer for the next 48 hours.
					</BannerDescription>
				</BannerContent>
				<BannerAction>
					<Button
						size="xs"
						variant="default"
						className="rounded-full gap-1"
					>
						Claim Offer
						<ArrowRight className="size-3" />
					</Button>
				</BannerAction>
				<BannerClose />
			</BannerRoot>
		</div>
	);
}

export default Particle;

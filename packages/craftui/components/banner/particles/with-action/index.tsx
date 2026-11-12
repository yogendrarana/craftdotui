import { ArrowRight, Sparkles } from "lucide-react";
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
		<BannerRoot
			variant="promotional"
			appearance="inset"
			className="max-w-3xl"
		>
			<BannerIcon>
				<Sparkles />
			</BannerIcon>
			<BannerContent>
				<BannerTitle>Early Access</BannerTitle>
				<BannerDescription>
					Try the new AI design copilot features ahead of public
					launch.
				</BannerDescription>
			</BannerContent>
			<BannerAction>
				<Button
					size="xs"
					variant="secondary"
					className="font-medium gap-1"
				>
					Join Waitlist
					<ArrowRight className="size-3" />
				</Button>
			</BannerAction>
			<BannerClose />
		</BannerRoot>
	);
}

export default Particle;

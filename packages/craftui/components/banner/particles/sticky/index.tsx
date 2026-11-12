import { ExternalLink, Info } from "lucide-react";
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
		<div className="relative w-full overflow-hidden rounded-lg border bg-background">
			<BannerRoot appearance="sticky" variant="info">
				<BannerIcon>
					<Info />
				</BannerIcon>
				<BannerContent centered>
					<BannerTitle>Scheduled Maintenance:</BannerTitle>
					<BannerDescription>
						Systems will undergo upgrade on Sunday at 02:00 UTC.
					</BannerDescription>
				</BannerContent>
				<BannerAction>
					<Button
						size="xs"
						variant="ghost"
						className="gap-1 text-xs"
						render={<a href="#status" />}
					>
						Status Page
						<ExternalLink className="size-3" />
					</Button>
				</BannerAction>
				<BannerClose />
			</BannerRoot>
			<div className="p-8 text-center text-sm text-muted-foreground">
				Page content scrolls below the sticky announcement bar.
			</div>
		</div>
	);
}

export default Particle;

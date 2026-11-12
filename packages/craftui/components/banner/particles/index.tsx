import { Megaphone } from "lucide-react";
import {
	BannerClose,
	BannerContent,
	BannerDescription,
	BannerIcon,
	BannerRoot,
	BannerTitle,
} from "@craftdotui/craftui/components/banner";

export function Particle() {
	return (
		<BannerRoot appearance="inset" className="max-w-2xl">
			<BannerIcon>
				<Megaphone />
			</BannerIcon>
			<BannerContent>
				<BannerTitle>New Release!</BannerTitle>
				<BannerDescription>
					Craft UI v2.0 is now live with enhanced components and full
					Tailwind v4 support.
				</BannerDescription>
			</BannerContent>
			<BannerClose />
		</BannerRoot>
	);
}

export default Particle;

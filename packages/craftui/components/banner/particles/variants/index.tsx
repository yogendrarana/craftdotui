import {
	AlertCircle,
	AlertTriangle,
	CheckCircle2,
	Info,
	Megaphone,
	Sparkles,
} from "lucide-react";
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
		<div className="flex flex-col gap-3 w-full max-w-2xl">
			<BannerRoot appearance="inset" variant="default">
				<BannerIcon>
					<Megaphone />
				</BannerIcon>
				<BannerContent>
					<BannerTitle>Default:</BannerTitle>
					<BannerDescription>
						General announcement or update.
					</BannerDescription>
				</BannerContent>
				<BannerClose />
			</BannerRoot>

			<BannerRoot appearance="inset" variant="info">
				<BannerIcon>
					<Info />
				</BannerIcon>
				<BannerContent>
					<BannerTitle>Information:</BannerTitle>
					<BannerDescription>
						Informational message for users.
					</BannerDescription>
				</BannerContent>
				<BannerClose />
			</BannerRoot>

			<BannerRoot appearance="inset" variant="success">
				<BannerIcon>
					<CheckCircle2 />
				</BannerIcon>
				<BannerContent>
					<BannerTitle>Success:</BannerTitle>
					<BannerDescription>
						Operation completed successfully.
					</BannerDescription>
				</BannerContent>
				<BannerClose />
			</BannerRoot>

			<BannerRoot appearance="inset" variant="warning">
				<BannerIcon>
					<AlertTriangle />
				</BannerIcon>
				<BannerContent>
					<BannerTitle>Warning:</BannerTitle>
					<BannerDescription>
						Please review your account security settings.
					</BannerDescription>
				</BannerContent>
				<BannerClose />
			</BannerRoot>

			<BannerRoot appearance="inset" variant="destructive">
				<BannerIcon>
					<AlertCircle />
				</BannerIcon>
				<BannerContent>
					<BannerTitle>Destructive:</BannerTitle>
					<BannerDescription>
						Payment failed. Please update billing info.
					</BannerDescription>
				</BannerContent>
				<BannerClose />
			</BannerRoot>

			<BannerRoot appearance="inset" variant="promotional">
				<BannerIcon>
					<Sparkles />
				</BannerIcon>
				<BannerContent>
					<BannerTitle>Promotional:</BannerTitle>
					<BannerDescription>
						Upgrade to Enterprise with 30% discount today.
					</BannerDescription>
				</BannerContent>
				<BannerClose />
			</BannerRoot>
		</div>
	);
}

export default Particle;

import * as React from "react";
import { Bell, RotateCcw } from "lucide-react";
import {
	BannerClose,
	BannerContent,
	BannerDescription,
	BannerIcon,
	BannerRoot,
	BannerTitle,
} from "@craftdotui/craftui/components/banner";
import { Button } from "@craftdotui/baseui/components/button";

export function Particle() {
	const [open, setOpen] = React.useState(true);

	return (
		<div className="flex flex-col items-center gap-4 w-full max-w-2xl">
			<BannerRoot
				appearance="inset"
				variant="info"
				open={open}
				onOpenChange={setOpen}
				className="w-full"
			>
				<BannerIcon>
					<Bell />
				</BannerIcon>
				<BannerContent>
					<BannerTitle>Dismissible Notice:</BannerTitle>
					<BannerDescription>
						Click the close button on the right to dismiss this
						notice with a smooth exit animation.
					</BannerDescription>
				</BannerContent>
				<BannerClose />
			</BannerRoot>

			{!open && (
				<Button
					size="sm"
					variant="outline"
					onClick={() => setOpen(true)}
					className="gap-1.5"
				>
					<RotateCcw className="size-3.5" />
					Reset Banner
				</Button>
			)}
		</div>
	);
}

export default Particle;

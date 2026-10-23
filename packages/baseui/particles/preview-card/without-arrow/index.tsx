"use client";

import {
	PreviewCardRoot,
	PreviewCardTrigger,
	PreviewCardContent,
} from "@craftdotui/baseui/components/preview-card";

export default function Particle() {
	return (
		<p className="max-w-md text-base text-balance text-primary">
			Minimalist designs often prefer a{" "}
			<PreviewCardRoot>
				<PreviewCardTrigger className="font-medium">
					cleaner look
				</PreviewCardTrigger>
				<PreviewCardContent
					hasArrow={false}
					positionerProps={{ sideOffset: 10 }}
				>
					<p className="text-sm">
						This preview card has no arrow, providing a cleaner and
						more minimalist appearance.
					</p>
				</PreviewCardContent>
			</PreviewCardRoot>{" "}
			without any pointing indicators.
		</p>
	);
}

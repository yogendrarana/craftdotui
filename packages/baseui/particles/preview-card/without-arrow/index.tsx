"use client";

import {
	PreviewCardRoot,
	PreviewCardTrigger,
	PreviewCardPortal,
	PreviewCardPositioner,
	PreviewCardPopup,
} from "@craftdotui/baseui/components/preview-card";

export default function Particle() {
	return (
		<p className="max-w-md text-base text-balance text-primary">
			Minimalist designs often prefer a{" "}
			<PreviewCardRoot>
				<PreviewCardTrigger className="font-medium">
					cleaner look
				</PreviewCardTrigger>
				<PreviewCardPortal>
					<PreviewCardPositioner sideOffset={10}>
						<PreviewCardPopup showPreviewCardArrow={false}>
							<p className="text-sm">
								This preview card has no arrow, providing a
								cleaner and more minimalist appearance.
							</p>
						</PreviewCardPopup>
					</PreviewCardPositioner>
				</PreviewCardPortal>
			</PreviewCardRoot>{" "}
			without any pointing indicators.
		</p>
	);
}

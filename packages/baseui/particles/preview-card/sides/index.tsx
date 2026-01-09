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
			Preview cards can be positioned globally around the trigger:
			appearing on the{" "}
			<PreviewCardRoot>
				<PreviewCardTrigger className="font-medium">
					top
				</PreviewCardTrigger>
				<PreviewCardPortal>
					<PreviewCardPositioner side="top" sideOffset={10}>
						<PreviewCardPopup showPreviewCardArrow={false}>
							<p className="text-sm">Positioned to the top.</p>
						</PreviewCardPopup>
					</PreviewCardPositioner>
				</PreviewCardPortal>
			</PreviewCardRoot>
			, at the{" "}
			<PreviewCardRoot>
				<PreviewCardTrigger className="font-medium">
					bottom
				</PreviewCardTrigger>
				<PreviewCardPortal>
					<PreviewCardPositioner side="bottom" sideOffset={10}>
						<PreviewCardPopup showPreviewCardArrow={false}>
							<p className="text-sm">Positioned to the bottom.</p>
						</PreviewCardPopup>
					</PreviewCardPositioner>
				</PreviewCardPortal>
			</PreviewCardRoot>
			, to the{" "}
			<PreviewCardRoot>
				<PreviewCardTrigger className="font-medium">
					left
				</PreviewCardTrigger>
				<PreviewCardPortal>
					<PreviewCardPositioner side="left" sideOffset={10}>
						<PreviewCardPopup showPreviewCardArrow={false}>
							<p className="text-sm">Positioned to the left.</p>
						</PreviewCardPopup>
					</PreviewCardPositioner>
				</PreviewCardPortal>
			</PreviewCardRoot>
			, or on the{" "}
			<PreviewCardRoot>
				<PreviewCardTrigger className="font-medium">
					right
				</PreviewCardTrigger>
				<PreviewCardPortal>
					<PreviewCardPositioner side="right" sideOffset={10}>
						<PreviewCardPopup showPreviewCardArrow={false}>
							<p className="text-sm">Positioned to the right.</p>
						</PreviewCardPopup>
					</PreviewCardPositioner>
				</PreviewCardPortal>
			</PreviewCardRoot>
			.
		</p>
	);
}

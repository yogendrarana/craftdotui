"use client";

import {
	PreviewCardRoot,
	PreviewCardTrigger,
	PreviewCardContent,
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
				<PreviewCardContent
					hasArrow={false}
					positionerProps={{ side: "top", sideOffset: 10 }}
				>
					<p className="text-sm">Positioned to the top.</p>
				</PreviewCardContent>
			</PreviewCardRoot>
			, at the{" "}
			<PreviewCardRoot>
				<PreviewCardTrigger className="font-medium">
					bottom
				</PreviewCardTrigger>
				<PreviewCardContent
					hasArrow={false}
					positionerProps={{ side: "bottom", sideOffset: 10 }}
				>
					<p className="text-sm">Positioned to the bottom.</p>
				</PreviewCardContent>
			</PreviewCardRoot>
			, to the{" "}
			<PreviewCardRoot>
				<PreviewCardTrigger className="font-medium">
					left
				</PreviewCardTrigger>
				<PreviewCardContent
					hasArrow={false}
					positionerProps={{ side: "left", sideOffset: 10 }}
				>
					<p className="text-sm">Positioned to the left.</p>
				</PreviewCardContent>
			</PreviewCardRoot>
			, or on the{" "}
			<PreviewCardRoot>
				<PreviewCardTrigger className="font-medium">
					right
				</PreviewCardTrigger>
				<PreviewCardContent
					hasArrow={false}
					positionerProps={{ side: "right", sideOffset: 10 }}
				>
					<p className="text-sm">Positioned to the right.</p>
				</PreviewCardContent>
			</PreviewCardRoot>
			.
		</p>
	);
}

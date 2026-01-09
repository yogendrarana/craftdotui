"use client";

import {
	PreviewCardRoot,
	PreviewCardTrigger,
	PreviewCardPortal,
	PreviewCardPositioner,
	PreviewCardPopup,
} from "@craftdotui/baseui/components/preview-card";

const particles = [
	{
		label: "Typography",
		img: "https://images.unsplash.com/photo-1619615391095-dfa29e1672ef?q=80&w=448&h=300",
	},
	{
		label: "Layout",
		img: "https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=448&h=300",
	},
	{
		label: "Motion",
		img: "https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?q=80&w=448&h=300",
	},
];

export default function Particle() {
	return (
		<p className="max-w-md text-base text-balance text-primary">
			Modern interfaces blend{" "}
			{particles.map((p, i) => (
				<PreviewCardRoot key={p.label}>
					<PreviewCardTrigger href="#">{p.label}</PreviewCardTrigger>
					{i < particles.length - 1 && ", "}
					<PreviewCardPortal>
						<PreviewCardPositioner>
							<PreviewCardPopup>
								<div className="flex flex-col gap-2">
									<img
										src={p.img}
										alt={p.label}
										className="block w-full rounded-sm"
									/>
									<p className="text-sm">
										<strong>{p.label}</strong> enhances
										clarity, hierarchy, and user delight.
									</p>
								</div>
							</PreviewCardPopup>
						</PreviewCardPositioner>
					</PreviewCardPortal>
				</PreviewCardRoot>
			))}{" "}
			to create expressive systems.
		</p>
	);
}

"use client";

import {
	PreviewCardRoot,
	PreviewCardTrigger,
	PreviewCardPortal,
	PreviewCardPositioner,
	PreviewCardPopup,
} from "@craftdotui/baseui/components/preview-card";
import { ForkKnife, Star } from "lucide-react";

const projects = [
	{
		name: "React",
		repo: "facebook/react",
		description: "A JavaScript library for building user interfaces.",
		stars: "220k",
		forks: "45k",
		language: "TypeScript",
	},
	{
		name: "Next.js",
		repo: "vercel/next.js",
		description: "The React framework for the Web.",
		stars: "120k",
		forks: "26k",
		language: "TypeScript",
	},
	{
		name: "Tailwind CSS",
		repo: "tailwindlabs/tailwindcss",
		description: "A utility-first CSS framework.",
		stars: "78k",
		forks: "4k",
		language: "CSS",
	},
];

export default function Particle() {
	return (
		<p className="max-w-md text-base text-balance text-primary">
			Popular open-source tools like{" "}
			{projects.map((project, i) => (
				<PreviewCardRoot key={project.repo}>
					<PreviewCardTrigger
						href={`https://github.com/${project.repo}`}
						delay={80}
						closeDelay={80}
					>
						{project.name}
					</PreviewCardTrigger>
					{i < projects.length - 1 && ", "}
					<PreviewCardPortal>
						<PreviewCardPositioner sideOffset={10}>
							<PreviewCardPopup>
								<div className=" flex flex-col gap-3">
									<div>
										<p className="text-sm font-semibold text-primary">
											{project.repo}
										</p>
										<p className="text-xs text-muted-foreground">
											{project.description}
										</p>
									</div>

									<div className="flex items-center gap-4 text-xs text-muted-foreground">
										<span className="flex items-center gap-1">
											<Star className="w-3.5 h-3.5" />{" "}
											{project.stars}
										</span>
										<span className="flex items-center gap-1">
											<ForkKnife className="w-3.5 h-3.5" />{" "}
											{project.forks}
										</span>
										<span className="rounded bg-secondary text-secondary-foreground px-1.5 py-0.5">
											{project.language}
										</span>
									</div>
								</div>
							</PreviewCardPopup>
						</PreviewCardPositioner>
					</PreviewCardPortal>
				</PreviewCardRoot>
			))}{" "}
			power modern interfaces.
		</p>
	);
}

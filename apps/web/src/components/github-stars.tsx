"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Star } from "lucide-react";

import { cn } from "@/lib/utils";
import { GitHub } from "./icons/github";

interface PropTypes {
	className?: string;
}

export const GithubStars = ({ className }: PropTypes) => {
	const [stars, setStars] = useState<string | number>(0);

	useEffect(() => {
		const fetchStars = async () => {
			if (Number(stars) > 100) return;
			try {
				const response = await fetch(
					"https://api.github.com/repos/yogendrarana/craftdotui",
					{
						headers: process.env.NEXT_PUBLIC_GITHUB_OAUTH_TOKEN
							? {
									Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_OAUTH_TOKEN}`,
									"Content-Type": "application/json",
								}
							: {},
					},
				);

				if (response.ok) {
					const data = await response.json();
					const starsCount =
						data.stargazers_count >= 1000
							? `${(data.stargazers_count / 1000).toFixed(2)}k`
							: data.stargazers_count;
					setStars(starsCount);
				}
			} catch (error) {
				console.error("Error fetching GitHub stars:", error);
			}
		};

		fetchStars();
	}, [stars]);

	return (
		<Link
			href="https://github.com/yogendrarana/craftui"
			target="_blank"
			rel="noopener noreferrer"
			aria-label={`GitHub repository, ${stars} stars`}
			className={cn(
				"hidden sm:inline-flex h-full items-center gap-2 px-3",
				"text-sm text-muted-foreground",
				"hover:text-foreground hover:bg-muted/50",
				"transition-colors duration-200",
				"focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
				className,
			)}
		>
			<GitHub className="size-4" />

			<span className="font-medium">GitHub</span>

			<span className="inline-flex items-center gap-1 rounded-full bg-muted px-2 py-0.5 text-xs tabular-nums text-muted-foreground">
				<Star className="size-3 fill-current" />
				{stars}
			</span>
		</Link>
	);
};

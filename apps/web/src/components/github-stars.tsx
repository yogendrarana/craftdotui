"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Star } from "lucide-react";

import { cn } from "@/lib/utils";

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
			className={cn(
				"hidden sm:inline-flex items-center gap-2 px-4 h-full rounded-none bg-background text-foreground hover:bg-muted/40 transition-colors font-mono text-xs",
				className,
			)}
			aria-label="GitHub repository"
		>
			<Star className="size-3.5 fill-current text-foreground" />
			<span className="font-medium">GitHub</span>
			<span className="rounded-sm border border bg-muted px-1.5 py-0.5 text-[11px] font-mono leading-none text-muted-foreground">
				{stars}
			</span>
		</Link>
	);
};

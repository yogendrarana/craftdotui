"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { siteConfig } from "@/config/site";
import { CornerCrosshairs } from "@/components/grid-system";
import { buttonVariants } from "@craftdotui/baseui/components/button";
import { cn } from "@/lib/utils";

export function Hero() {
	return (
		<section className="flex-1 flex flex-col w-full border-b border-border bg-background">
			<div className="flex-1 flex flex-col items-center justify-center max-w-7xl w-full mx-auto border-x border-border relative px-6 py-24 text-center">
				<CornerCrosshairs top={false} bottom />

				<div className="max-w-2xl flex flex-col items-center">
					<h1 className="text-balance text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tight text-foreground leading-[1.08]">
						<span>Build.</span>{" "}
						<span className="text-muted-foreground">Craft.</span>
					</h1>

					<p className="mx-auto mt-5 max-w-xl text-pretty text-base sm:text-lg leading-relaxed text-muted-foreground">
						{siteConfig.description}
					</p>

					<div className="mt-8 flex flex-wrap items-center justify-center gap-3">
						<Link
							href="/docs/getting-started/introduction"
							className={cn(
								buttonVariants({
									variant: "default",
									size: "lg",
								}),
								"rounded-md gap-2",
							)}
						>
							Get Started
							<ArrowRight className="size-4" />
						</Link>
						<Link
							href="/docs/baseui/components/accordion"
							className={cn(
								buttonVariants({
									variant: "outline",
									size: "lg",
								}),
								"rounded-md",
							)}
						>
							Browse Components
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}

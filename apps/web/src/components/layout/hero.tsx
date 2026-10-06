"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { siteConfig } from "@/config/site";
import { Container } from "@/components/container";
import { buttonVariants } from "@craftdotui/baseui/components/button";
import { cn } from "@/lib/utils";

export function Hero() {
	return (
		<section className="flex-1 relative overflow-hidden border-b bg-background">
			<Container
				size="2xl"
				className="h-full relative sm:border-l sm:border-r"
			>
				<motion.div
					initial={{ opacity: 0, y: 18 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					className="flex h-full min-h-[64svh] flex-col items-center justify-center py-16 text-center md:min-h-[68svh] md:py-20"
				>
					<div className="max-w-3xl flex flex-col items-center">
						<h1 className="text-balance text-5xl font-medium tracking-tight text-foreground sm:text-6xl md:text-7xl leading-[1.08]">
							<span className="mr-4">Build.</span>
							<span className="text-muted-foreground">
								Craft.
							</span>
						</h1>

						<p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
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
									"rounded-md shadow-xs gap-2",
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
				</motion.div>
			</Container>
		</section>
	);
}

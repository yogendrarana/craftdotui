"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Code2, Component, Terminal } from "lucide-react";

import { siteConfig } from "@/config/site";
import { Container } from "@/components/container";
import { buttonVariants } from "@craftdotui/baseui/components/button";
import { cn } from "@/lib/utils";

const featureSections = [
	{
		title: "Base UI foundations",
		description:
			"Accessible primitives with styling kept close to the component, so every example is easy to inspect and adapt.",
		icon: Component,
	},
	{
		title: "Registry workflow",
		description:
			"Install only what you need from the registry and keep the source in your app instead of hiding it behind a package.",
		icon: Terminal,
	},
	{
		title: "Focused documentation",
		description:
			"Each component page keeps the demo, source, install command, and API details in the same flow.",
		icon: Code2,
	},
];

export function Hero() {
	return (
		<>
			<section className="relative overflow-hidden border-b bg-background">
				<Container
					size="2xl"
					className="relative sm:border-l sm:border-r"
				>
					<motion.div
						initial={{ opacity: 0, y: 18 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
						className="flex min-h-[64svh] flex-col items-center justify-center py-16 text-center md:min-h-[68svh] md:py-20"
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

			<section className="border-b bg-muted/20">
				<Container size="2xl" className="sm:border-l sm:border-r">
					<div className="grid gap-0 md:grid-cols-3">
						{featureSections.map(
							({ title, description, icon: Icon }) => (
								<div
									key={title}
									className="border-b px-0 py-10 md:border-b-0 md:border-r md:px-8 md:last:border-r-0"
								>
									<Icon className="mb-6 size-5 text-muted-foreground" />
									<h2 className="text-xl font-semibold tracking-tight">
										{title}
									</h2>
									<p className="mt-3 text-sm leading-6 text-muted-foreground">
										{description}
									</p>
								</div>
							),
						)}
					</div>
				</Container>
			</section>
		</>
	);
}

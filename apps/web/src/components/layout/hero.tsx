"use client";

import { motion } from "framer-motion";
import { Code2, Component, Terminal } from "lucide-react";

import { siteConfig } from "@/config/site";
import { MaxWidthContainer } from "@/components/max-width-container";

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
				<MaxWidthContainer className="relative sm:border-l sm:border-r">
					<motion.div
						initial={{ opacity: 0, y: 18 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
						className="flex min-h-[68svh] flex-col items-center justify-center py-14 text-center md:min-h-[72svh] md:py-16"
					>
						<div className="max-w-3xl">
							<h1 className="text-balance text-6xl font-black leading-[0.9] tracking-tight text-primary sm:text-7xl md:text-8xl">
								Craft UI
							</h1>

							<p className="mx-auto mt-7 max-w-2xl text-pretty text-lg leading-8 text-muted-foreground md:text-xl">
								{siteConfig.description}
							</p>
						</div>
					</motion.div>
				</MaxWidthContainer>
			</section>

			<section className="border-b bg-muted/20">
				<MaxWidthContainer className="sm:border-l sm:border-r">
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
				</MaxWidthContainer>
			</section>
		</>
	);
}

"use client";

import { ChevronDown, ChevronRight } from "lucide-react";
import {
	NavigationMenuRoot,
	NavigationMenuList,
	NavigationMenuItem,
	NavigationMenuTrigger,
	NavigationMenuContent,
	NavigationMenuLink,
	NavigationMenuPortal,
	NavigationMenuPositioner,
	NavigationMenuPopup,
	NavigationMenuArrow,
	NavigationMenuIcon,
	navigationMenuLinkStyle,
} from "@craftdotui/baseui/components/navigation-menu";
import { cn } from "@craftdotui/lib/utils";

const homeLinks = [
	{
		href: "/docs/getting-started/introduction",
		title: "Introduction",
		description:
			"Re-usable components built using Base UI and Tailwind CSS.",
	},
	{
		href: "/docs/getting-started/installation",
		title: "Installation",
		description: "How to install dependencies and structure your app.",
	},
] as const;

const componentLinks = [
	{
		href: "/docs/baseui/components/accordion",
		title: "Accordion",
		description: "Collapsible panels with multiple variants and states.",
	},
	{
		href: "/docs/baseui/components/button",
		title: "Button",
		description: "Action buttons with multiple variants and states.",
	},
	{
		href: "/docs/baseui/components/card",
		title: "Card",
		description: "Content containers with flexible layouts.",
	},
	{
		href: "/docs/baseui/components/tooltip",
		title: "Tooltip",
		description: "Accessible tooltip component.",
	},
] as const;

export default function Particle() {
	return (
		<NavigationMenuRoot>
			<NavigationMenuList>
				<NavigationMenuItem>
					<NavigationMenuTrigger>
						Home
						<NavigationMenuIcon>
							<ChevronDown className="size-4" />
						</NavigationMenuIcon>
					</NavigationMenuTrigger>

					<NavigationMenuContent>
						<ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
							<li className="row-span-3">
								<NavigationMenuLink
									href="/"
									className={
										"from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b p-6 no-underline outline-hidden select-none focus:shadow-md"
									}
								>
									<div className="mt-4 mb-2 text-lg font-medium">
										CraftUI
									</div>
									<p className="text-muted-foreground text-sm leading-tight">
										A collection of components built with
										React.js and Tailwind CSS.
									</p>
								</NavigationMenuLink>
							</li>

							{homeLinks.map((item) => (
								<li key={item.href}>
									<NavigationMenuLink
										href={item.href}
										className="block p-3 leading-none rounded-md focus:bg-accent focus:shadow-md"
									>
										<h3>{item.title}</h3>
										<p className="text-muted-foreground text-sm">
											{item.description}
										</p>
									</NavigationMenuLink>
								</li>
							))}
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>

				<NavigationMenuItem>
					<NavigationMenuTrigger>
						Docs
						<NavigationMenuIcon>
							<ChevronDown className="size-4" />
						</NavigationMenuIcon>
					</NavigationMenuTrigger>

					<NavigationMenuContent>
						<ul className="max-w-[400px] flex flex-col justify-center whitespace-normal">
							<li>
								<NavigationMenuLink href="/docs/hooks/use-confetti">
									<h3>Hooks</h3>
									<p className="text-muted-foreground text-sm">
										Re-usable hooks built for React.js.
									</p>
								</NavigationMenuLink>
							</li>

							<li>
								<NavigationMenuRoot>
									<NavigationMenuList>
										<NavigationMenuItem>
											<NavigationMenuTrigger
												className={cn(
													navigationMenuLinkStyle(),
												)}
											>
												<h3 className="flex gap-1 items-center">
													Components
													<NavigationMenuIcon>
														<ChevronRight className="size-4" />
													</NavigationMenuIcon>
												</h3>
												<p className="text-muted-foreground text-sm text-start">
													Re-usable components built
													using Base UI and Tailwind
													CSS.
												</p>
											</NavigationMenuTrigger>

											<NavigationMenuContent>
												<ul className="max-w-[300px] flex flex-col justify-center">
													{componentLinks.map(
														(item) => (
															<li key={item.href}>
																<NavigationMenuLink
																	href={
																		item.href
																	}
																>
																	<h3>
																		{
																			item.title
																		}
																	</h3>
																	<p className="text-muted-foreground text-sm">
																		{
																			item.description
																		}
																	</p>
																</NavigationMenuLink>
															</li>
														),
													)}
												</ul>
											</NavigationMenuContent>
										</NavigationMenuItem>
									</NavigationMenuList>

									<NavigationMenuPortal>
										<NavigationMenuPositioner
											side="right"
											align="start"
										>
											<NavigationMenuPopup />
										</NavigationMenuPositioner>
									</NavigationMenuPortal>
								</NavigationMenuRoot>
							</li>
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>

				<NavigationMenuItem>
					<NavigationMenuLink
						href="https://github.com/yogendrarana/craftdotui"
						className="p-2 rounded-md"
						target="_blank"
						rel="noopener noreferrer"
					>
						GitHub
						<span className="sr-only">
							- CraftUI GitHub repository (opens in new tab)
						</span>
					</NavigationMenuLink>
				</NavigationMenuItem>
			</NavigationMenuList>

			<NavigationMenuPortal>
				<NavigationMenuPositioner>
					<NavigationMenuPopup>
						<NavigationMenuArrow />
					</NavigationMenuPopup>
				</NavigationMenuPositioner>
			</NavigationMenuPortal>
		</NavigationMenuRoot>
	);
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { ToggleMode } from "@/components/toggle-mode";
import { GithubStars } from "@/components/github-stars";
import DocsMobileSidebar from "@/components/docs-mobile-sidebar";
import { docsNavItems } from "@/config/docs";
import { Crosshair } from "@/components/grid-system";

const navLinks = [
	{
		href: "/docs/getting-started/introduction",
		matchPrefix: "/docs/getting-started",
		label: "Docs",
	},
	{
		href: "/docs/baseui/components/accordion",
		matchPrefix: "/docs/baseui",
		label: "Components",
	},
	{
		href: "/theming",
		matchPrefix: "/theming",
		label: "Theming",
	},
];

export function Header() {
	const pathname = usePathname();

	return (
		<header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur-md">
			<div className="max-w-7xl mx-auto border-x border-border relative">
				<Crosshair position="bottom-left" />
				<Crosshair position="bottom-right" />

				<nav className="flex h-14 items-stretch justify-between">
					<Link
						href="/"
						className="inline-flex items-center gap-2.5 px-4 sm:px-6 text-sm font-semibold tracking-tight text-foreground"
					>
						<span>Craft UI</span>
					</Link>

					{/* Right Navigation & Actions */}
					<div className="flex items-stretch divide-x divide-border border-l border-border ml-auto">
						<div className="hidden md:flex items-stretch divide-x divide-border">
							{navLinks.map(({ href, matchPrefix, label }) => {
								const isActive =
									pathname.startsWith(matchPrefix);
								return (
									<Link
										key={href}
										href={href}
										className={cn(
											"relative inline-flex items-center px-4 font-mono text-xs rounded-none transition-colors",
											isActive
												? "bg-muted/40 text-foreground font-medium"
												: "text-muted-foreground hover:text-foreground hover:bg-muted/40",
										)}
									>
										{label}
									</Link>
								);
							})}
						</div>

						<GithubStars />
						<ToggleMode />
						<div className="md:hidden flex items-stretch">
							<DocsMobileSidebar items={docsNavItems} />
						</div>
					</div>
				</nav>
			</div>
		</header>
	);
}

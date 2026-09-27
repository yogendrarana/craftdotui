"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { ToggleMode } from "@/components/toggle-mode";
import { GithubStars } from "@/components/github-stars";
import DocsMobileSidebar from "@/components/docs-mobile-sidebar";
import { docsNavItems } from "@/config/docs";
import { MaxWidthContainer } from "@/components/max-width-container";

export function Header() {
	const pathname = usePathname();

	const navLinks = [
		{ href: "/docs/getting-started/introduction", label: "Docs" },
		{
			href: "/docs/baseui/components/accordion",
			label: "Components",
		},
		{ href: "/docs/loaders/classic", label: "Loaders" },
		{ href: "/docs/hooks/use-callback", label: "Hooks" },
	];

	return (
		<header className="sticky top-0 z-50 border-b bg-background/85 backdrop-blur-xl">
			<MaxWidthContainer className="sm:border-l sm:border-r">
				<nav className="flex h-16 items-center justify-between gap-4">
					<Link
						href="/"
						className="inline-flex items-center text-lg font-bold"
					>
						Craft UI
					</Link>

					{/* Desktop Navigation */}
					<div className="hidden items-center rounded-full border bg-muted/40 p-1 md:flex">
						{navLinks.map(({ href, label }) => {
							const isActive = pathname.startsWith(href);
							return (
								<Link
									key={href}
									href={href}
									className={cn(
										"rounded-full px-3 py-1.5 text-sm transition-colors",
										isActive
											? "bg-background text-foreground border"
											: "text-muted-foreground hover:text-foreground",
									)}
								>
									{label}
								</Link>
							);
						})}
					</div>

					<div className="hidden md:flex items-center gap-2">
						<GithubStars className="rounded-md" />
						<ToggleMode />
					</div>

					<div className="md:hidden ml-auto">
						<DocsMobileSidebar items={docsNavItems} />
					</div>
				</nav>
			</MaxWidthContainer>
		</header>
	);
}

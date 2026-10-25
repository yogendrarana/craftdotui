import Link from "next/link";

import { siteConfig } from "@/config/site";
import { CornerCrosshairs } from "@/components/grid-system";

export function Footer() {
	return (
		<footer className="w-full border-b border-border bg-background">
			<div className="max-w-7xl mx-auto border-x border-border px-4 sm:px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 relative">
				<CornerCrosshairs top={false} bottom />

				<p className="text-xs text-muted-foreground">
					Crafted by{" "}
					<Link
						href={siteConfig.author.links.website}
						className="text-foreground underline underline-offset-4 hover:text-muted-foreground transition-colors"
						target="_blank"
						rel="noopener noreferrer"
					>
						Yogendra Rana
					</Link>
				</p>

				<span className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground">
					{siteConfig.name}
				</span>
			</div>
		</footer>
	);
}

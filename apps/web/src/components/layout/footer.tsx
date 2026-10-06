import Link from "next/link";

import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/container";

export function Footer() {
	return (
		<footer className="bg-muted/20">
			<Container size="2xl" className="sm:border-l sm:border-r">
				<div
					className={cn(
						"flex flex-col gap-4 py-5 sm:flex-row sm:items-center sm:justify-between",
					)}
				>
					<div className="space-y-2">
						<span className="text-base font-semibold">
							{siteConfig.name}
						</span>
						<p className="text-sm text-muted-foreground">
							Crafted by{" "}
							<Link
								href={siteConfig.author.links.website}
								className="underline text-sm text-muted-foreground"
								target="__blank"
							>
								Yogendra Rana
							</Link>
						</p>
					</div>

					<p className="text-sm text-muted-foreground">
						Open source components for React interfaces.
					</p>
				</div>
			</Container>
		</footer>
	);
}

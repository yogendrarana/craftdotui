import { cn } from "@/lib/utils";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { DocsSidebar } from "@/components/docs-sidebar";
import { CornerCrosshairs, HatchSeparator } from "@/components/grid-system";
import {
	ScrollAreaContent,
	ScrollAreaRoot,
	ScrollAreaScrollbar,
	ScrollAreaThumb,
	ScrollAreaViewport,
} from "@craftdotui/baseui/components/scroll-area";

interface DocsLayoutProps {
	children: React.ReactNode;
}

export default function DocsLayout({ children }: DocsLayoutProps) {
	return (
		<div className="min-h-screen flex flex-col bg-background text-foreground">
			<Header />

			<section className="w-full border-b border-border flex-1 bg-background">
				<div className="max-w-7xl mx-auto border-x border-border relative min-h-[calc(100vh-3.5rem)]">
					<CornerCrosshairs top={false} bottom />

					<div
						className={cn(
							"flex-1 items-start",
							"md:grid md:grid-cols-[260px_minmax(0,1fr)] xl:grid-cols-[260px_minmax(0,1fr)_240px] md:divide-x md:divide-border",
						)}
					>
						{/* Left Exposed Hairline Sidebar */}
						<aside className="h-[calc(100vh-3.5rem)] hidden md:block md:sticky md:top-14 bg-background">
							<ScrollAreaRoot className="h-full rounded-none border-0">
								<ScrollAreaViewport>
									<ScrollAreaContent>
										<DocsSidebar />
									</ScrollAreaContent>
								</ScrollAreaViewport>
								<ScrollAreaScrollbar>
									<ScrollAreaThumb />
								</ScrollAreaScrollbar>
							</ScrollAreaRoot>
						</aside>

						{/* Main Document Content + Right Table of Contents */}
						{children}
					</div>
				</div>
			</section>

			<HatchSeparator height="sm" />
			<Footer />
		</div>
	);
}

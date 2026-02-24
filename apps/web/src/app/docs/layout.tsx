import { cn } from "@/lib/utils";
import { Header } from "@/components/layout/header";
import { DocsSidebar } from "@/components/docs-sidebar";
import { MaxWidthContainer } from "@/components/max-width-container";
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
		<div className="min-h-screen flex flex-col">
			<Header />

			<MaxWidthContainer className="border-b sm:border-l sm:border-r border-dashed px-0">
				<div
					className={cn(
						"flex-1 items-start overflow-hidden md:overflow-visible",
						"md:grid md:grid-cols-[275px_minmax(0,1fr)_275px]",
					)}
				>
					{/* sidebar */}
					<div className="h-[calc(100vh-5rem)] p-2 hidden md:block md:sticky md:top-20">
						<ScrollAreaRoot className="h-full border border-dashed rounded-md">
							<ScrollAreaViewport>
								<ScrollAreaContent>
									<DocsSidebar />
								</ScrollAreaContent>
							</ScrollAreaViewport>

							<ScrollAreaScrollbar>
								<ScrollAreaThumb />
							</ScrollAreaScrollbar>
						</ScrollAreaRoot>
					</div>

					{/* main content + toc */}
					{children}
				</div>
			</MaxWidthContainer>
		</div>
	);
}

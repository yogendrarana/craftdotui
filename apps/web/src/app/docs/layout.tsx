import { cn } from "@/lib/utils";
import { Header } from "@/components/layout/header";
import { Scrollbar } from "@radix-ui/react-scroll-area";
import { ScrollArea } from "@/components/ui/scroll-area";
import { DocsSidebar } from "@/components/docs-sidebar";
import { MaxWidthContainer } from "@/components/max-width-container";

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
						<ScrollArea
							hideScrollbar
							scrollHideDelay={1}
							type="hover"
							className="h-full"
						>
							<DocsSidebar />
							<Scrollbar />
						</ScrollArea>
					</div>

					{/* main content + toc */}
					{children}
				</div>
			</MaxWidthContainer>
		</div>
	);
}

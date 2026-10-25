import { notFound } from "next/navigation";
import { allDocs } from "content-collections";

import { cn } from "@/lib/utils";
import { Mdx } from "@/components/mdx-components";
import { TableOfContent } from "@/components/toc";
import { Crosshair, InlineHatchBar } from "@/components/grid-system";
import {
	ScrollAreaContent,
	ScrollAreaRoot,
	ScrollAreaScrollbar,
	ScrollAreaThumb,
	ScrollAreaViewport,
} from "@craftdotui/baseui/components/scroll-area";

interface PageProps {
	params: Promise<{ slug?: string[] }>;
}

async function getDocFromParams(paramsPromise: PageProps["params"]) {
	const params = await paramsPromise;
	const slug = params.slug?.join("/");
	const doc = allDocs.find((doc) => doc.slugAsParams === slug);
	return doc ?? null;
}

export default async function DocsPage({ params }: PageProps) {
	const doc = await getDocFromParams(params);

	if (!doc?.published) {
		notFound();
	}

	return (
		<>
			{/* Main Document Surface */}
			<div className="min-w-0 flex flex-col bg-background">
				{/* Document Header */}
				<div className="relative border-b border-border bg-dot-matrix px-6 py-8 sm:px-8">
					<Crosshair position="bottom-left" />
					<Crosshair position="bottom-right" />

					<div className="max-w-3xl space-y-2">
						<h1
							className={cn(
								"text-3xl sm:text-4xl font-semibold tracking-tight text-foreground",
							)}
						>
							{doc.title}
						</h1>

						{doc?.description && (
							<p className="text-balance text-base leading-relaxed text-muted-foreground">
								{doc.description}
							</p>
						)}
					</div>
				</div>

				{/* Narrow Diagonal Hatch Separator Bar */}
				<InlineHatchBar height="sm" />

				{/* Primary Clean Content Surface */}
				<div className="px-6 py-8 sm:px-8 bg-background flex-1">
					<Mdx code={doc.body.code} />
				</div>
			</div>

			{/* Right Exposed Hairline Table of Contents */}
			<aside className="h-[calc(100vh-3.5rem)] hidden xl:block xl:sticky xl:top-14 bg-background">
				<ScrollAreaRoot className="h-full rounded-none border-0 p-0">
					<ScrollAreaViewport>
						<ScrollAreaContent>
							<TableOfContent toc={doc.toc} />
						</ScrollAreaContent>
					</ScrollAreaViewport>

					<ScrollAreaScrollbar>
						<ScrollAreaThumb />
					</ScrollAreaScrollbar>
				</ScrollAreaRoot>
			</aside>
		</>
	);
}

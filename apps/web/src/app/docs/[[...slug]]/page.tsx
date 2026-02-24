import { notFound } from "next/navigation";
import { allDocs } from "content-collections";

import { cn } from "@/lib/utils";
import { Mdx } from "@/components/mdx-components";
import { TableOfContent } from "@/components/toc";
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

	if (!doc || !doc.published) {
		notFound();
	}

	return (
		<>
			{/* main content */}
			<div className="px-4 py-2 h-full border-x border-dashed">
				<div></div>
				<div className="mb-6">
					<h1 className={cn("mb-1 text-4xl font-bold")}>
						{doc.title}
					</h1>

					{doc?.description && (
						<p className="text-balance text-lg text-muted-foreground">
							{doc.description}
						</p>
					)}
				</div>

				<Mdx code={doc.body.code} />
			</div>

			{/* table of contents */}
			<div className="h-[calc(100vh-5rem)] p-2 hidden md:block md:sticky md:top-20">
				<ScrollAreaRoot className="border border-dashed rounded-md p-0">
					<ScrollAreaViewport>
						<ScrollAreaContent>
							<TableOfContent toc={doc.toc} />
						</ScrollAreaContent>
					</ScrollAreaViewport>

					<ScrollAreaScrollbar>
						<ScrollAreaThumb />
					</ScrollAreaScrollbar>
				</ScrollAreaRoot>
			</div>
		</>
	);
}

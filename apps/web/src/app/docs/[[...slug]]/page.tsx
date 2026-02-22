import { notFound } from "next/navigation";
import { allDocs } from "content-collections";

import { cn } from "@/lib/utils";
import { Mdx } from "@/components/mdx-components";
import { TableOfContents } from "@/components/toc";

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
			<div className="p-4 h-full border-x border-dashed">
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
			<div className="hidden md:block md:sticky md:top-20">
				<TableOfContents toc={doc.toc} />
			</div>
		</>
	);
}

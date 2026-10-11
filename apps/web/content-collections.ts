import { z } from "zod";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import GithubSlugger from "github-slugger";
import { codeImport } from "remark-code-import";
import { compileMDX } from "@content-collections/mdx";
import { defineCollection, defineConfig } from "@content-collections/core";

const docs = defineCollection({
	name: "Docs",
	directory: "src/content",
	include: "**/*.mdx",
	schema: z.object({
		title: z.string(),
		description: z.string(),
		published: z.boolean().default(false),

		// optionals
		date: z.string().optional(),
		provider: z.string().optional(),
		category: z.string().optional(),
		subCategory: z.string().optional(),
		label: z.string().optional(),
		paid: z.boolean().optional(),
		author: z
			.object({
				name: z.string().optional(),
				twitter: z.string().optional(),
			})
			.optional(),

		// other
		content: z.string(),
	}),
	transform: async (document, context) => {
		const body = await compileMDX(context, document, {
			remarkPlugins: [codeImport, remarkGfm],
			rehypePlugins: [rehypeSlug],
		});

		const toc = await getTableOfContents(document.content);

		return {
			...document,
			slug: `/${document._meta.path}`,
			slugAsParams: document._meta.path.split("/").join("/"),
			toc: toc as TocSection[],
			body: {
				raw: document.content,
				code: body,
			},
		};
	},
});

type TocSection = {
	title: string;
	url: string;
	items: {
		title: string;
		url: string;
		items?: { title: string; url: string }[];
	}[];
};

async function getTableOfContents(content: string) {
	const slugger = new GithubSlugger();
	const toc: TocSection[] = [];

	const lines = content.split("\n");
	let currentSection: TocSection | null = null;
	let inCodeBlock = false;

	for (const line of lines) {
		const trimmed = line.trim();
		if (trimmed.startsWith("```")) {
			inCodeBlock = !inCodeBlock;
			continue;
		}
		if (inCodeBlock) continue;

		if (trimmed.startsWith("## ")) {
			const rawTitle = trimmed.replace(/^##\s+/, "").trim();
			const cleanTitle = rawTitle.replace(/`([^`]+)`/g, "$1");
			const slug = slugger.slug(cleanTitle);
			currentSection = { title: cleanTitle, url: `#${slug}`, items: [] };
			toc.push(currentSection);
		} else if (trimmed.startsWith("### ") || trimmed.startsWith("#### ")) {
			const rawTitle = trimmed.replace(/^#{3,4}\s+/, "").trim();
			const cleanTitle = rawTitle.replace(/`([^`]+)`/g, "$1");
			const slug = slugger.slug(cleanTitle);

			if (currentSection) {
				currentSection.items.push({
					title: cleanTitle,
					url: `#${slug}`,
				});
			} else {
				currentSection = {
					title: cleanTitle,
					url: `#${slug}`,
					items: [],
				};
				toc.push(currentSection);
			}
		}
	}
	return toc;
}

export default defineConfig({
	content: [docs],
});

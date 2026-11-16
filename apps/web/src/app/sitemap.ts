import type { MetadataRoute } from "next";
import { allDocs } from "content-collections";
import { siteConfig } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
	const now = new Date();

	const staticRoutes: MetadataRoute.Sitemap = [
		{
			url: siteConfig.url,
			lastModified: now,
			changeFrequency: "weekly",
			priority: 1,
		},
		{
			url: `${siteConfig.url}/theming`,
			lastModified: now,
			changeFrequency: "weekly",
			priority: 0.8,
		},
	];

	const docRoutes: MetadataRoute.Sitemap = allDocs
		.filter((doc) => doc.published)
		.map((doc) => ({
			url: `${siteConfig.url}/docs/${doc.slugAsParams}`,
			lastModified: doc.date ? new Date(doc.date) : now,
			changeFrequency: "weekly",
			priority: 0.8,
		}));

	return [...staticRoutes, ...docRoutes];
}

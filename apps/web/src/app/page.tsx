import { Hero } from "@/components/layout/hero";
import { BaseUIShowcase } from "@/components/layout/baseui-showcase";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { siteConfig } from "@/config/site";

const jsonLd = {
	"@context": "https://schema.org",
	"@type": "WebSite",
	name: siteConfig.name,
	url: siteConfig.url,
	description: siteConfig.description,
	author: {
		"@type": "Person",
		name: siteConfig.author.name,
		url: siteConfig.author.links.website,
	},
};

export default function HomePage() {
	return (
		<div className="min-h-screen flex flex-col bg-background text-foreground">
			<script
				type="application/ld+json"
				// biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD structured data
				dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
			/>
			<Header />
			<Hero />
			<BaseUIShowcase />
			<Footer />
		</div>
	);
}

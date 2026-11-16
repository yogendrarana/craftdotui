import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";

import "@/styles/globals.css";
import { siteConfig } from "@/config/site";
import { Provider } from "@/components/provider";
import { fontMono, fontSans } from "@/lib/fonts";
import { cn } from "@/lib/utils";

// metadata
export const metadata: Metadata = {
	title: {
		default: siteConfig.title,
		template: `%s - ${siteConfig.name}`,
	},
	description: siteConfig.description,
	metadataBase: new URL(siteConfig.url),
	alternates: {
		canonical: "/",
	},
	icons: {
		icon: [
			{ url: "/favicon.ico", sizes: "any" },
			{ url: "/icon.png", type: "image/png", sizes: "192x192" },
		],
		apple: [
			{ url: "/apple-icon.png", type: "image/png", sizes: "180x180" },
		],
	},
	creator: siteConfig.author.name,
	authors: [
		{ name: siteConfig.author.name, url: siteConfig.author.links.twitter },
	],
	keywords: [
		"Craft UI",
		"React",
		"Next.js",
		"Tailwind CSS",
		"Base UI",
		"Motion",
		"shadcn/ui",
		"UI Components",
		"Design System",
	],
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	openGraph: {
		title: siteConfig.title,
		description: siteConfig.description,
		url: siteConfig.url,
		siteName: siteConfig.name,
		locale: "en_US",
		images: [
			{
				url: `${siteConfig.url}/opengraph-image.png`,
				width: 1200,
				height: 630,
				alt: "Craft UI Open Graph Image",
			},
		],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: siteConfig.title,
		description: siteConfig.description,
		images: [`${siteConfig.url}/opengraph-image.png`],
		creator: "@yooogendra_rana",
	},
};

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html
			lang="en"
			data-scroll-behavior="smooth"
			suppressHydrationWarning
			className={cn(fontSans.variable, fontMono.variable)}
		>
			<body className="min-h-screen bg-background font-sans text-foreground antialiased selection:bg-primary selection:text-primary-foreground">
				<Provider>
					<main className="root flex min-h-screen flex-col bg-background text-foreground">
						{children}
					</main>
				</Provider>
			</body>

			<Analytics />
		</html>
	);
}

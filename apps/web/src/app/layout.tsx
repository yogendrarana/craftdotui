import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";

import "@/styles/globals.css";
import { siteConfig } from "@/config/site";
import { Provider } from "@/components/provider";

// metadata
export const metadata: Metadata = {
	title: siteConfig.title,
	description: siteConfig.description,
	metadataBase: new URL(siteConfig.url),
	creator: "Yogendra Rana",
	authors: [
		{ name: siteConfig.author.name, url: siteConfig.author.links.twitter },
	],
	keywords: ["React", "Next.js", "Tailwind CSS", "Motion", "Shad CN"],
	openGraph: {
		title: siteConfig.title,
		description: siteConfig.description,
		url: siteConfig.url,
		siteName: "Craft UI",
		images: [
			{
				url: `${siteConfig.url}/og-image.png`,
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
		images: [`${siteConfig.url}/og-image.png`],
		creator: "@yooogendra_rana",
	},
};

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
			<body>
				<Provider>
					<main className="root">{children}</main>
				</Provider>
			</body>

			<Analytics />
		</html>
	);
}

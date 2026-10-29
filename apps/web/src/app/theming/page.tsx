import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { ThemeStudio } from "@/components/theming/theme-studio";

export const metadata: Metadata = {
	title: "Theme Studio - Craft UI",
	description:
		"Interactive OKLCH design token workbench for shadcn/ui and Craft UI semantic extensions. Customize, preview, import, and export Tailwind CSS v4 themes.",
};

export default function ThemingPage() {
	return (
		<div className="h-dvh overflow-hidden flex flex-col bg-background text-foreground">
			<Header />
			<ThemeStudio />
		</div>
	);
}

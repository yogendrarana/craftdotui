import { Figtree, Geist_Mono as FontMono } from "next/font/google";

export const fontSans = Figtree({
	subsets: ["latin"],
	variable: "--font-sans",
	display: "swap",
});

export const fontMono = FontMono({
	subsets: ["latin"],
	variable: "--font-mono",
	display: "swap",
});

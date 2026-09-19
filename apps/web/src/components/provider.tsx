"use client";

import { ThemeProvider } from "next-themes";
import { TooltipProvider } from "@craftdotui/baseui/components/tooltip";
import {
	AnchoredToastProvider,
	ToastProvider,
} from "@craftdotui/baseui/components/toast";

export function Provider({ children }: { children: React.ReactNode }) {
	return (
		<ThemeProvider
			attribute="class"
			defaultTheme="system"
			enableSystem
			disableTransitionOnChange
		>
			<ToastProvider>
				<AnchoredToastProvider>
					<TooltipProvider delay={100}>{children}</TooltipProvider>
				</AnchoredToastProvider>
			</ToastProvider>
		</ThemeProvider>
	);
}

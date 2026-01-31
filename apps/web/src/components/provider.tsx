"use client";

import { ThemeProvider } from "next-themes";
import { useEffect, useState } from "react";
import { TooltipProvider } from "@/components/ui/tooltip";
import {
	AnchoredToastProvider,
	ToastProvider,
} from "@craftdotui/baseui/components/toast";

export function Provider({ children }: { children: React.ReactNode }) {
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		// we can also return a loader here
		return null;
	}

	return (
		<ThemeProvider
			attribute="class"
			defaultTheme="system"
			enableSystem
			disableTransitionOnChange
		>
			<ToastProvider>
				<AnchoredToastProvider>
					<TooltipProvider delayDuration={100}>
						{children}
					</TooltipProvider>
				</AnchoredToastProvider>
			</ToastProvider>
		</ThemeProvider>
	);
}

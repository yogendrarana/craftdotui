"use client";

import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "lucide-react";
import { useEffect, useState } from "react";

export function ToggleMode() {
	const [mounted, setMounted] = useState(false);
	const { resolvedTheme, setTheme } = useTheme();

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return (
			<button
				type="button"
				className="inline-flex h-full w-12 items-center justify-center rounded-none bg-background text-muted-foreground hover:bg-muted/40 hover:text-foreground transition-colors cursor-pointer"
				aria-label="Toggle theme"
			>
				<span className="size-4 inline-block" />
			</button>
		);
	}

	return (
		<button
			type="button"
			className="inline-flex h-full w-12 items-center justify-center rounded-none bg-background text-muted-foreground hover:bg-muted/40 hover:text-foreground transition-colors cursor-pointer"
			onClick={() =>
				setTheme(resolvedTheme === "dark" ? "light" : "dark")
			}
			aria-label="Toggle theme"
		>
			{resolvedTheme === "dark" ? (
				<SunIcon className="size-4" />
			) : (
				<MoonIcon className="size-4" />
			)}
		</button>
	);
}

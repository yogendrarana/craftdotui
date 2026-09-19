"use client";

import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@craftdotui/baseui/components/button";

export function ToggleMode() {
	const [mounted, setMounted] = useState(false);
	const { resolvedTheme, setTheme } = useTheme();

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return (
			<Button
				variant="outline"
				size="sm"
				className="rounded-none cursor-pointer"
				aria-label="Toggle theme"
			>
				<span className="h-5 w-5 inline-block" />
			</Button>
		);
	}

	return (
		<Button
			variant="outline"
			size="sm"
			className="rounded-none cursor-pointer"
			onClick={() =>
				setTheme(resolvedTheme === "dark" ? "light" : "dark")
			}
			aria-label="Toggle theme"
		>
			{resolvedTheme === "dark" ? (
				<SunIcon className="h-5 w-5" />
			) : (
				<MoonIcon className="h-5 w-5" />
			)}
		</Button>
	);
}

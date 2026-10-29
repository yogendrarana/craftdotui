"use client";

import { Plus } from "lucide-react";

import { Button } from "@craftdotui/baseui/components/button";

export function Preview05() {
	return (
		<div
			className="border border-border bg-card text-card-foreground p-5 text-center space-y-3"
			style={{
				borderRadius: "var(--radius-xl)",
				boxShadow: "var(--shadow-sm)",
			}}
		>
			<div className="mx-auto size-10 rounded-full bg-muted flex items-center justify-center text-foreground">
				<Plus className="size-4" />
			</div>
			<div className="space-y-1">
				<h4 className="text-sm font-semibold text-card-foreground">
					Distribute Track
				</h4>
				<p className="text-xs text-muted-foreground leading-relaxed">
					Upload your first master to start reaching listeners on
					Spotify, Apple Music, and more.
				</p>
			</div>
			<Button
				size="sm"
				variant="default"
				style={{ borderRadius: "var(--radius)" }}
			>
				Create Release
			</Button>
		</div>
	);
}

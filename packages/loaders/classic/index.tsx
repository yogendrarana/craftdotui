"use client";

import type React from "react";

export default function ClassicLoader({
	className,
	...props
}: React.HTMLAttributes<HTMLDivElement>) {
	return (
		<div
			role="status"
			aria-label="Loading"
			className={[
				"size-8 animate-spin rounded-full border-2 border-current border-t-transparent text-foreground",
				className,
			]
				.filter(Boolean)
				.join(" ")}
			{...props}
		/>
	);
}

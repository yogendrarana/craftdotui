"use client";

import type React from "react";

export default function Spinner({
	className,
	...props
}: React.HTMLAttributes<HTMLDivElement>) {
	return (
		<div
			role="status"
			aria-label="Loading"
			className={[
				"size-10 animate-spin rounded-full border-b-2 border-current text-foreground",
				className,
			]
				.filter(Boolean)
				.join(" ")}
			{...props}
		>
			<span className="sr-only">Loading...</span>
		</div>
	);
}

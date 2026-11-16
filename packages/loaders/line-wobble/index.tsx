"use client";

import type React from "react";

export default function LineWobble({
	className,
	...props
}: React.HTMLAttributes<HTMLDivElement>) {
	return (
		<div
			role="status"
			aria-label="Loading"
			className={[
				"relative flex h-1 w-20 items-center overflow-hidden rounded-full text-foreground",
				className,
			]
				.filter(Boolean)
				.join(" ")}
			{...props}
		>
			<div className="absolute inset-0 bg-current opacity-10" />
			<div className="h-full w-full rounded-full bg-current animate-[loader-wobble_1.75s_ease-in-out_infinite]" />

			<style>{`
				@keyframes loader-wobble {
					0%,
					100% {
						transform: translateX(-95%);
					}
					50% {
						transform: translateX(95%);
					}
				}
			`}</style>
		</div>
	);
}

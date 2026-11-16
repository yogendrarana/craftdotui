"use client";

import type React from "react";

export default function Zoomies({
	className,
	...props
}: React.HTMLAttributes<HTMLDivElement>) {
	const duration = 1.4;

	return (
		<div
			role="status"
			aria-label="Loading"
			className={[
				"relative flex h-[5px] w-20 items-center justify-center overflow-hidden rounded-full text-foreground",
				className,
			]
				.filter(Boolean)
				.join(" ")}
			{...props}
		>
			<div className="absolute inset-0 bg-current opacity-10" />
			<div
				className="size-full rounded-full bg-current"
				style={{
					animation: `loader-zoom ${duration}s ease-in-out infinite`,
				}}
			/>

			<style>
				{`
					@keyframes loader-zoom {
						0% {
							transform: translateX(-100%);
						}
						100% {
							transform: translateX(100%);
						}
					}
				`}
			</style>
		</div>
	);
}

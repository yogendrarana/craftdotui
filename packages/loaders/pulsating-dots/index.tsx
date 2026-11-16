"use client";

import type React from "react";

export default function PulsingDots({
	className,
	...props
}: React.HTMLAttributes<HTMLDivElement>) {
	const dotCount = 5;
	const duration = 1.3;

	return (
		<div
			role="status"
			aria-label="Loading"
			className={[
				"relative flex items-center justify-between gap-1 text-foreground",
				className,
			]
				.filter(Boolean)
				.join(" ")}
			{...props}
		>
			{Array.from({ length: dotCount }).map((_, i) => {
				const fraction =
					dotCount > 1 ? -0.25 * (i / (dotCount - 1)) : 0;

				return (
					<div
						key={i}
						className="size-2.5 rounded-full bg-current"
						style={{
							animation: `loader-pulsating-dots ${duration}s ease-in-out infinite`,
							animationDelay: `calc(${duration}s * ${fraction})`,
						}}
					/>
				);
			})}

			<style>{`
				@keyframes loader-pulsating-dots {
					0%,
					100% {
						transform: scale(0);
					}
					50% {
						transform: scale(1);
					}
				}
			`}</style>
		</div>
	);
}

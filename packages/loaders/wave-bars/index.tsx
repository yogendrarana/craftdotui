"use client";

import type React from "react";

export default function WaveBars({
	className,
	...props
}: React.HTMLAttributes<HTMLDivElement>) {
	const bars = 5;
	const duration = 1;

	return (
		<div
			role="status"
			aria-label="Loading"
			className={[
				"flex h-8 items-center justify-center gap-1 text-foreground",
				className,
			]
				.filter(Boolean)
				.join(" ")}
			{...props}
		>
			{Array.from({ length: bars }).map((_, index) => (
				<div
					key={index}
					className="h-full w-1 rounded-full bg-current"
					style={{
						animation: `loader-wave-bars ${duration}s ease-in-out infinite`,
						animationDelay: `-${((bars - index) * duration) / bars}s`,
					}}
				/>
			))}

			<style>{`
				@keyframes loader-wave-bars {
					0%,
					100% {
						transform: scaleY(0.3);
						opacity: 0.5;
					}
					50% {
						transform: scaleY(1);
						opacity: 1;
					}
				}
			`}</style>
		</div>
	);
}

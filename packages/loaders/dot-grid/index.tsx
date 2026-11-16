"use client";

import type React from "react";

const delays = [0, 0.15, 0.3, 0.15, 0.3, 0.45, 0.3, 0.45, 0.6];

export default function DotGrid({
	className,
	...props
}: React.HTMLAttributes<HTMLDivElement>) {
	return (
		<div
			role="status"
			aria-label="Loading"
			className={["grid grid-cols-3 gap-1.5 text-foreground", className]
				.filter(Boolean)
				.join(" ")}
			{...props}
		>
			{delays.map((delay, index) => (
				<div
					key={index}
					className="size-2 rounded-full bg-current"
					style={{
						animation: "loader-dot-grid 1.3s ease-in-out infinite",
						animationDelay: `${delay}s`,
					}}
				/>
			))}

			<style>{`
				@keyframes loader-dot-grid {
					0%,
					100% {
						transform: scale(0.4);
						opacity: 0.3;
					}
					50% {
						transform: scale(1);
						opacity: 1;
					}
				}
			`}</style>
		</div>
	);
}

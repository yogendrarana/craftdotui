"use client";

import type React from "react";

export default function Ring({
	className,
	...props
}: React.HTMLAttributes<HTMLDivElement>) {
	return (
		<div
			role="status"
			aria-label="Loading"
			className={["size-10 text-foreground", className]
				.filter(Boolean)
				.join(" ")}
			{...props}
		>
			<svg
				viewBox="0 0 40 40"
				className="size-full origin-center transform-gpu will-change-transform animate-[loader-ring-rotate_1.4s_linear_infinite] motion-reduce:animate-[loader-ring-rotate_4.2s_linear_infinite]"
				aria-hidden="true"
			>
				<circle
					cx="20"
					cy="20"
					r="17.5"
					pathLength={100}
					fill="none"
					stroke="currentColor"
					strokeWidth="3.5"
					strokeLinecap="round"
					shapeRendering="geometricPrecision"
					className="animate-[loader-ring-dash_1.1s_linear_infinite] motion-reduce:animate-[loader-ring-dash_3.3s_linear_infinite]"
				/>
			</svg>

			<style>{`
				@keyframes loader-ring-rotate {
					to {
						transform: rotate(360deg);
					}
				}

				@keyframes loader-ring-dash {
					0% {
						stroke-dasharray: 15 85;
						stroke-dashoffset: 0;
					}
					50% {
						stroke-dasharray: 70 30;
						stroke-dashoffset: -15;
					}
					100% {
						stroke-dasharray: 15 85;
						stroke-dashoffset: -100;
					}
				}
			`}</style>
		</div>
	);
}

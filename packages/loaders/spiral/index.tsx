"use client";

import type React from "react";

export default function Spiral({
	className,
	...props
}: React.HTMLAttributes<HTMLDivElement>) {
	const dotCount = 8;
	const duration = 0.9;

	return (
		<div
			role="status"
			aria-label="Loading"
			className={["relative size-10 text-foreground", className]
				.filter(Boolean)
				.join(" ")}
			{...props}
		>
			{Array.from({ length: dotCount }).map((_, index) => {
				const rotation = (360 / dotCount) * index;

				return (
					<div
						key={index}
						className="absolute top-0 left-0 flex size-full items-center justify-start"
						style={{ transform: `rotate(${rotation}deg)` }}
					>
						<div
							className="size-[20%] rounded-full bg-current"
							style={{
								animation: `loader-spiral ${duration}s ease-in-out infinite`,
								animationDelay: `-${index * (duration / dotCount)}s`,
							}}
						/>
					</div>
				);
			})}

			<style>{`
				@keyframes loader-spiral {
					0%,
					100% {
						transform: scale(0);
						opacity: 0.5;
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

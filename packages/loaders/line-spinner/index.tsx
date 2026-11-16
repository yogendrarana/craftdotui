"use client";

import type React from "react";

export default function LineSpinner({
	className,
	...props
}: React.HTMLAttributes<HTMLDivElement>) {
	const lines = 12;
	const duration = 1;

	return (
		<div
			role="status"
			aria-label="Loading"
			className={["relative size-10 text-foreground", className]
				.filter(Boolean)
				.join(" ")}
			{...props}
		>
			{Array.from({ length: lines }).map((_, i) => (
				<div
					key={i}
					className="absolute top-0 left-1/2 h-full w-1 -translate-x-1/2"
					style={{ transform: `rotate(${i * (360 / lines)}deg)` }}
				>
					<div
						className="h-[28%] w-full rounded-full bg-current"
						style={{
							animation: `loader-line-spinner ${duration}s linear infinite`,
							animationDelay: `-${((lines - i) * duration) / lines}s`,
						}}
					/>
				</div>
			))}

			<style>{`
				@keyframes loader-line-spinner {
					0%,
					100% {
						opacity: 0.15;
					}
					50% {
						opacity: 1;
					}
				}
			`}</style>
		</div>
	);
}

"use client";

import type React from "react";

export default function TypingDots({
	className,
	...props
}: React.HTMLAttributes<HTMLDivElement>) {
	const dots = 3;
	const duration = 1.2;

	return (
		<div
			role="status"
			aria-label="Loading"
			className={["flex items-center gap-1 text-foreground", className]
				.filter(Boolean)
				.join(" ")}
			{...props}
		>
			{Array.from({ length: dots }).map((_, index) => (
				<div
					key={index}
					className="size-1.5 rounded-full bg-current"
					style={{
						animation: `loader-typing-dots ${duration}s ease-in-out infinite`,
						animationDelay: `${index * 0.16}s`,
					}}
				/>
			))}

			<style>{`
				@keyframes loader-typing-dots {
					0%,
					60%,
					100% {
						transform: translateY(0);
						opacity: 0.4;
					}
					30% {
						transform: translateY(-4px);
						opacity: 1;
					}
				}
			`}</style>
		</div>
	);
}

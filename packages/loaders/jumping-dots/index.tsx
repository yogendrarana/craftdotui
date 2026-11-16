"use client";

import type React from "react";

export default function JumpingDots({
	className,
	...props
}: React.HTMLAttributes<HTMLDivElement>) {
	const dots = 4;

	return (
		<div
			role="status"
			aria-label="Loading"
			className={["flex items-end gap-1.5 text-foreground", className]
				.filter(Boolean)
				.join(" ")}
			{...props}
		>
			{Array.from({ length: dots }).map((_, index) => (
				<div
					key={index}
					className="size-2 rounded-full bg-current animate-[loader-jump_1s_ease-in-out_infinite]"
					style={{
						animationDelay: `-${(dots - index) * 0.15}s`,
					}}
				/>
			))}

			<style>{`
				@keyframes loader-jump {
					0%,
					100% {
						transform: translateY(0);
					}
					50% {
						transform: translateY(-200%);
					}
				}
			`}</style>
		</div>
	);
}

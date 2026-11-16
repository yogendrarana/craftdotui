"use client";

import type React from "react";

export default function Ripple({
	className,
	...props
}: React.HTMLAttributes<HTMLDivElement>) {
	return (
		<div
			role="status"
			aria-label="Loading"
			className={["relative size-10 text-foreground", className]
				.filter(Boolean)
				.join(" ")}
			{...props}
		>
			{[0, 1].map((index) => (
				<div
					key={index}
					className="absolute inset-0 rounded-full border-2 border-current"
					style={{
						animation:
							"loader-ripple 1.8s cubic-bezier(0, 0.2, 0.8, 1) infinite",
						animationDelay: index === 1 ? "-0.9s" : "0s",
					}}
				/>
			))}

			<style>{`
				@keyframes loader-ripple {
					0% {
						transform: scale(0);
						opacity: 1;
					}
					100% {
						transform: scale(1);
						opacity: 0;
					}
				}
			`}</style>
		</div>
	);
}

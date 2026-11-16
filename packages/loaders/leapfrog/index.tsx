"use client";

import type React from "react";

export default function LeapFrog({
	className,
	...props
}: React.HTMLAttributes<HTMLDivElement>) {
	const delays = ["0s", "-0.833s", "-1.667s"];

	return (
		<div
			role="status"
			aria-label="Loading"
			className={["relative size-10 text-foreground", className]
				.filter(Boolean)
				.join(" ")}
			{...props}
		>
			{delays.map((delay, index) => (
				<div
					key={index}
					className="absolute inset-0 flex size-full items-center justify-start animate-[loader-leap-frog_2.5s_ease_infinite] before:block before:size-2 before:rounded-full before:bg-current before:content-['']"
					style={{ animationDelay: delay }}
				/>
			))}

			<style>{`
				@keyframes loader-leap-frog {
					0% {
						transform: translateX(0) rotate(0deg);
					}
					33.333% {
						transform: translateX(0) rotate(180deg);
					}
					66.666% {
						transform: translateX(-15px) rotate(180deg);
					}
					99.999% {
						transform: translateX(-31px) rotate(180deg);
					}
					100% {
						transform: translateX(0) rotate(0deg);
					}
				}
			`}</style>
		</div>
	);
}

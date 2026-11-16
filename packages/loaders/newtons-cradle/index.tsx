"use client";

import type React from "react";

export default function NewtonsCradle({
	className,
	...props
}: React.HTMLAttributes<HTMLDivElement>) {
	const dots = 5;

	return (
		<div
			role="status"
			aria-label="Loading"
			className={[
				"relative flex items-center justify-center text-foreground",
				className,
			]
				.filter(Boolean)
				.join(" ")}
			{...props}
		>
			{Array.from({ length: dots }).map((_, index) => (
				<div
					key={index}
					className={[
						"flex h-10 origin-top items-center justify-center",
						index === 0
							? "animate-[loader-swing_1.4s_linear_infinite]"
							: index === dots - 1
								? "animate-[loader-swing-2_1.4s_linear_infinite]"
								: "",
					]
						.filter(Boolean)
						.join(" ")}
				>
					<div className="size-2 rounded-full bg-current" />
				</div>
			))}

			<style>{`
				@keyframes loader-swing {
					0% {
						transform: rotate(0deg);
						animation-timing-function: ease-out;
					}
					25% {
						transform: rotate(70deg);
						animation-timing-function: ease-in;
					}
					50% {
						transform: rotate(0deg);
						animation-timing-function: linear;
					}
					100% {
						transform: rotate(0deg);
					}
				}

				@keyframes loader-swing-2 {
					0% {
						transform: rotate(0deg);
						animation-timing-function: linear;
					}
					50% {
						transform: rotate(0deg);
						animation-timing-function: ease-out;
					}
					75% {
						transform: rotate(-70deg);
						animation-timing-function: ease-in;
					}
					100% {
						transform: rotate(0deg);
					}
				}
			`}</style>
		</div>
	);
}

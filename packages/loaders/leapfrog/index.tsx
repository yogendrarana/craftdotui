"use client";

import { cn } from "@craftdotui/lib/utils";

export default function LeapFrog() {
	const delays = ["0s", "-0.833s", "-1.667s"];

	return (
		<div className="relative h-10 w-10">
			{delays.map((delay, index) => (
				<div
					key={index}
					className={cn(
						"absolute inset-0",
						"w-full h-full flex items-center justify-start",
						"before:content-[''] before:block",
						"before:w-2 before:h-2",
						"before:rounded-full",
						"before:bg-black dark:before:bg-white",
						"before:transition-colors before:duration-300 before:ease-in-out",
						"animate-leapFrog",
					)}
					style={{ animationDelay: delay }}
				/>
			))}

			<style>{`
				@keyframes leapFrog {
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

				.animate-leapFrog {
					animation: leapFrog 2.5s ease infinite;
				}
			`}</style>
		</div>
	);
}

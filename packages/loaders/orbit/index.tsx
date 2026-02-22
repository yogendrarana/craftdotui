"use client";

import type { CSSProperties } from "react";
import { cn } from "@craftdotui/lib/utils";

export default function Orbit({ className }: { className?: string }) {
	const size = 35; // px
	const speed = 1.4; // seconds

	return (
		<div
			className={cn("relative", className)}
			style={
				{
					"--orbit-size": `${size}px`,
					"--orbit-speed": `${speed}s`,
				} as CSSProperties
			}
		>
			{[0, 1].map((i) => (
				<div
					key={i}
					className="bg-primary absolute left-0 top-1/2 size-4 -translate-y-1/2 rounded-full"
					style={{
						animation: "orbit var(--orbit-speed) linear infinite",
						animationDelay:
							i === 1 ? "calc(var(--orbit-speed) / -2)" : "0s",
					}}
				/>
			))}

			<style>
				{`
                    @keyframes orbit {
                    0% {
                        transform: translateX(calc(var(--orbit-size) * 0.25)) scale(0.73684);
                        opacity: 0.65;
                    }
                    5% {
                        transform: translateX(calc(var(--orbit-size) * 0.235)) scale(0.684208);
                        opacity: 0.58;
                    }
                    10% {
                        transform: translateX(calc(var(--orbit-size) * 0.182)) scale(0.631576);
                        opacity: 0.51;
                    }
                    15% {
                        transform: translateX(calc(var(--orbit-size) * 0.129)) scale(0.578944);
                        opacity: 0.44;
                    }
                    20% {
                        transform: translateX(calc(var(--orbit-size) * 0.076)) scale(0.526312);
                        opacity: 0.37;
                    }
                    25% {
                        transform: translateX(0%) scale(0.47368);
                        opacity: 0.3;
                    }
                    30% {
                        transform: translateX(calc(var(--orbit-size) * -0.076)) scale(0.526312);
                        opacity: 0.37;
                    }
                    35% {
                        transform: translateX(calc(var(--orbit-size) * -0.129)) scale(0.578944);
                        opacity: 0.44;
                    }
                    40% {
                        transform: translateX(calc(var(--orbit-size) * -0.182)) scale(0.631576);
                        opacity: 0.51;
                    }
                    45% {
                        transform: translateX(calc(var(--orbit-size) * -0.235)) scale(0.684208);
                        opacity: 0.58;
                    }
                    50% {
                        transform: translateX(calc(var(--orbit-size) * -0.25)) scale(0.73684);
                        opacity: 0.65;
                    }
                    55% {
                        transform: translateX(calc(var(--orbit-size) * -0.235)) scale(0.789472);
                        opacity: 0.72;
                    }
                    60% {
                        transform: translateX(calc(var(--orbit-size) * -0.182)) scale(0.842104);
                        opacity: 0.79;
                    }
                    65% {
                        transform: translateX(calc(var(--orbit-size) * -0.129)) scale(0.894736);
                        opacity: 0.86;
                    }
                    70% {
                        transform: translateX(calc(var(--orbit-size) * -0.076)) scale(0.947368);
                        opacity: 0.93;
                    }
                    75% {
                        transform: translateX(0%) scale(1);
                        opacity: 1;
                    }
                    80% {
                        transform: translateX(calc(var(--orbit-size) * 0.076)) scale(0.947368);
                        opacity: 0.93;
                    }
                    85% {
                        transform: translateX(calc(var(--orbit-size) * 0.129)) scale(0.894736);
                        opacity: 0.86;
                    }
                    90% {
                        transform: translateX(calc(var(--orbit-size) * 0.182)) scale(0.842104);
                        opacity: 0.79;
                    }
                    95% {
                        transform: translateX(calc(var(--orbit-size) * 0.235)) scale(0.789472);
                        opacity: 0.72;
                    }
                    100% {
                        transform: translateX(calc(var(--orbit-size) * 0.25)) scale(0.73684);
                        opacity: 0.65;
                    }
                }
            `}
			</style>
		</div>
	);
}

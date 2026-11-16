"use client";

import type React from "react";
import { cn } from "cn";

export interface MarqueeProps extends React.HTMLAttributes<HTMLDivElement> {
	duration?: number;
	repeat?: number;
	className?: string;
	pauseOnHover?: boolean;
	children: React.ReactNode;
	direction?: "left" | "right";
	gap?: number;
}

export function Marquee({
	children,
	className,
	duration = 20,
	repeat = 2,
	direction = "left",
	pauseOnHover = true,
	gap = 0,
	style,
	...props
}: MarqueeProps) {
	return (
		<div
			{...props}
			style={
				{
					"--duration": `${duration}s`,
					"--gap": `${gap}px`,
					...style,
				} as React.CSSProperties
			}
			className={cn(
				"group relative flex overflow-hidden gap-(--gap)",
				className,
			)}
		>
			{Array.from({ length: repeat }).map((_, index) => (
				<div
					key={index}
					aria-hidden={index > 0 || undefined}
					className={cn(
						"flex min-w-full w-max shrink-0 items-center justify-around gap-(--gap) text-foreground motion-reduce:animate-none",
						direction === "left"
							? "animate-[marquee-left_var(--duration)_linear_infinite]"
							: "animate-[marquee-right_var(--duration)_linear_infinite]",
						pauseOnHover && "group-hover:paused",
					)}
				>
					{children}
				</div>
			))}

			<style>
				{`
					@keyframes marquee-left {
						0% { transform: translateX(0); }
						100% { transform: translateX(calc(-100% - var(--gap))); }
					}

					@keyframes marquee-right {
						0% { transform: translateX(calc(-100% - var(--gap))); }
						100% { transform: translateX(0); }
					}
				`}
			</style>
		</div>
	);
}

export default Marquee;

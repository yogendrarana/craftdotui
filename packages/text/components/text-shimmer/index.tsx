"use client";

import * as React from "react";
import { motion, type HTMLMotionProps } from "motion/react";
import { cn } from "cn";

export interface TextShimmerProps
	extends Omit<React.HTMLAttributes<HTMLElement>, "children" | "color"> {
	/**
	 * The text or inline content to apply the shimmer effect to.
	 */
	children: React.ReactNode;
	/**
	 * The HTML element or React component to render as.
	 */
	as?: React.ElementType;
	/**
	 * Duration of one shimmer sweep in seconds.
	 */
	duration?: number;
	/**
	 * Width of the shimmer highlight band. Numbers are treated as pixels.
	 */
	spread?: number | string;
	/**
	 * Angle offset of the shimmer gradient in degrees.
	 */
	angle?: number;
	/**
	 * Custom highlight color for the shimmer peak.
	 */
	color?: string;
	/**
	 * Whether the shimmer animation plays only once instead of looping.
	 */
	once?: boolean;
	/**
	 * Reverse the shimmer sweep direction.
	 */
	reverse?: boolean;
	/**
	 * Delay between shimmer loops in seconds.
	 */
	repeatDelay?: number;
	/**
	 * Whether the shimmer effect is active. When false, renders plain text.
	 */
	active?: boolean;
}

export function TextShimmer({
	children,
	as: Component = "p",
	duration = 2,
	spread = "calc(3ch + 40px)",
	angle = 20,
	color,
	once = false,
	reverse = false,
	repeatDelay = 0,
	active = true,
	className,
	style,
	...props
}: TextShimmerProps) {
	const [prefersReducedMotion, setPrefersReducedMotion] =
		React.useState(false);

	React.useEffect(() => {
		if (typeof window === "undefined") return;
		const mediaQuery = window.matchMedia(
			"(prefers-reduced-motion: reduce)",
		);
		setPrefersReducedMotion(mediaQuery.matches);

		const handleChange = (event: MediaQueryListEvent) => {
			setPrefersReducedMotion(event.matches);
		};
		mediaQuery.addEventListener("change", handleChange);
		return () => mediaQuery.removeEventListener("change", handleChange);
	}, []);

	const MotionComponent = React.useMemo(
		() =>
			motion.create(
				Component as React.ComponentType<
					React.HTMLAttributes<HTMLElement>
				>,
			),
		[Component],
	);

	const isShimmery = active && !prefersReducedMotion;
	const resolvedSpread = typeof spread === "number" ? `${spread}px` : spread;

	const shimmerStyle: React.CSSProperties & Record<string, string | number> =
		isShimmery
			? {
					"--shimmer-spread": resolvedSpread,
					...(color ? { "--shimmer-highlight": color } : {}),
					WebkitTextFillColor: "transparent",
					backgroundImage: `linear-gradient(${90 + angle}deg, currentColor calc(50% - var(--shimmer-spread)), color-mix(in oklch, var(--shimmer-highlight), currentColor 50%) calc(50% - var(--shimmer-spread) * 0.5), var(--shimmer-highlight) 50%, color-mix(in oklch, var(--shimmer-highlight), currentColor 50%) calc(50% + var(--shimmer-spread) * 0.5), currentColor calc(50% + var(--shimmer-spread)))`,
					backgroundRepeat: "no-repeat",
					backgroundSize:
						"calc(200% + var(--shimmer-spread) * 2) 100%",
					WebkitBackgroundClip: "text",
					backgroundClip: "text",
					...style,
				}
			: { ...style };

	const motionProps = props as Omit<
		HTMLMotionProps<"div">,
		"children" | "style" | "className"
	>;

	return (
		<MotionComponent
			className={cn(
				"inline-block",
				isShimmery &&
					"[--shimmer-highlight:oklch(from_currentColor_l_c_h/calc(alpha*0.2))] dark:[--shimmer-highlight:oklch(from_currentColor_max(0.8,calc(l+0.4))_c_h/calc(alpha+0.4))]",
				className,
			)}
			style={shimmerStyle}
			initial={
				isShimmery
					? { backgroundPosition: reverse ? "0% 0%" : "100% 0%" }
					: undefined
			}
			animate={
				isShimmery
					? { backgroundPosition: reverse ? "100% 0%" : "0% 0%" }
					: undefined
			}
			transition={
				isShimmery
					? {
							duration,
							repeat: once ? 0 : Infinity,
							ease: "linear",
							repeatDelay,
						}
					: undefined
			}
			{...motionProps}
		>
			{children}
		</MotionComponent>
	);
}

export default TextShimmer;

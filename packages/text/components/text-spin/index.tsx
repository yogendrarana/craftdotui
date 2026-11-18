"use client";

import * as React from "react";
import {
	motion,
	useAnimationFrame,
	useMotionValue,
	useReducedMotion,
} from "motion/react";
import { cn } from "cn";

export interface TextSpinProps
	extends Omit<React.HTMLAttributes<HTMLDivElement>, "children"> {
	/**
	 * The text string to arrange in a circle.
	 */
	children: string;
	/**
	 * Radius of the circular text path in pixels.
	 */
	radius?: number;
	/**
	 * Duration of one full 360° rotation in seconds.
	 */
	duration?: number;
	/**
	 * Number of times to repeat the text around the circle.
	 */
	repeat?: number;
	/**
	 * Separator inserted between repeated text segments when `repeat > 1`.
	 */
	separator?: string;
	/**
	 * Rotate counter-clockwise instead of clockwise.
	 */
	reverse?: boolean;
	/**
	 * Whether the ring is actively spinning.
	 */
	trigger?: boolean;
	/**
	 * Pause spinning while hovering or focusing within the component.
	 */
	pauseOnHover?: boolean;
	/**
	 * Optional content rendered at the center of the ring.
	 */
	center?: React.ReactNode;
}

export function TextSpin({
	children,
	radius = 48,
	duration = 10,
	repeat = 1,
	separator = " • ",
	reverse = false,
	trigger = true,
	pauseOnHover = false,
	center,
	className,
	style,
	onMouseEnter,
	onMouseLeave,
	onFocus,
	onBlur,
	...props
}: TextSpinProps) {
	const prefersReducedMotion = useReducedMotion();
	const [isPaused, setIsPaused] = React.useState(false);
	const rotation = useMotionValue(0);

	const fullText = React.useMemo(() => {
		if (repeat <= 1) return children;
		return Array.from(
			{ length: repeat },
			() => `${children}${separator}`,
		).join("");
	}, [children, repeat, separator]);

	const characters = React.useMemo(() => Array.from(fullText), [fullText]);
	const angleStep = characters.length > 0 ? 360 / characters.length : 0;

	useAnimationFrame((_, delta) => {
		if (
			!trigger ||
			prefersReducedMotion ||
			(pauseOnHover && isPaused) ||
			duration <= 0
		) {
			return;
		}
		const direction = reverse ? -1 : 1;
		const degreesPerSecond = 360 / duration;
		rotation.set(
			(rotation.get() + (delta / 1000) * degreesPerSecond * direction) %
				360,
		);
	});

	const size = radius * 2;

	return (
		<div
			role="img"
			aria-label={children}
			className={cn(
				"relative inline-flex shrink-0 items-center justify-center select-none",
				className,
			)}
			style={{
				width: size,
				height: size,
				...style,
			}}
			onMouseEnter={(e) => {
				onMouseEnter?.(e);
				if (pauseOnHover) setIsPaused(true);
			}}
			onMouseLeave={(e) => {
				onMouseLeave?.(e);
				if (pauseOnHover) setIsPaused(false);
			}}
			onFocus={(e) => {
				onFocus?.(e);
				if (pauseOnHover) setIsPaused(true);
			}}
			onBlur={(e) => {
				onBlur?.(e);
				if (pauseOnHover) setIsPaused(false);
			}}
			{...props}
		>
			<motion.div
				aria-hidden="true"
				className="relative size-full"
				style={{ rotate: rotation }}
			>
				{characters.map((char, index) => (
					<span
						key={`${index}-${char}`}
						className="absolute top-1/2 left-1/2 inline-block whitespace-pre"
						style={{
							transform: `translate(-50%, -50%) rotate(${index * angleStep}deg) translateY(-${radius}px)`,
						}}
					>
						{char}
					</span>
				))}
			</motion.div>

			{center ? (
				<div className="pointer-events-none absolute inset-0 flex items-center justify-center">
					{center}
				</div>
			) : null}
		</div>
	);
}

export default TextSpin;

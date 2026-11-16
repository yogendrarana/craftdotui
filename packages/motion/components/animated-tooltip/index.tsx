"use client";

import type React from "react";
import { useCallback, useEffect, useRef, useState } from "react";
import {
	AnimatePresence,
	type HTMLMotionProps,
	motion,
	useMotionValue,
	useReducedMotion,
	useSpring,
	useTransform,
} from "motion/react";
import { cn } from "cn";

export interface AnimatedTooltipProps extends HTMLMotionProps<"div"> {
	children: React.ReactNode;
	label: string;
	className?: string;
	delay?: number;
}

export function AnimatedTooltip({
	children,
	label,
	onClick,
	onFocus,
	onBlur,
	onMouseEnter,
	onMouseLeave,
	onMouseMove,
	className,
	delay = 100,
	...props
}: AnimatedTooltipProps) {
	const [isOpen, setIsOpen] = useState(false);
	const showTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
	const prefersReducedMotion = useReducedMotion();

	const x = useMotionValue(0);
	const springConfig = { stiffness: 200, damping: 10 };
	const rotate = useSpring(
		useTransform(x, [-50, 50], [-25, 25]),
		springConfig,
	);
	const translateX = useSpring(
		useTransform(x, [-50, 50], [-10, 10]),
		springConfig,
	);

	const clearPendingTimeout = useCallback(() => {
		if (showTimeoutRef.current) {
			clearTimeout(showTimeoutRef.current);
			showTimeoutRef.current = null;
		}
	}, []);

	const openWithDelay = () => {
		clearPendingTimeout();
		if (delay <= 0) {
			setIsOpen(true);
			return;
		}
		showTimeoutRef.current = setTimeout(() => setIsOpen(true), delay);
	};

	const close = () => {
		clearPendingTimeout();
		setIsOpen(false);
		x.set(0);
	};

	const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
		onMouseMove?.(event);
		if (prefersReducedMotion) return;

		const rect = event.currentTarget.getBoundingClientRect();
		const centerX = rect.left + rect.width / 2;
		x.set(event.clientX - centerX);
	};

	const handleMouseEnter = (event: React.MouseEvent<HTMLDivElement>) => {
		onMouseEnter?.(event);
		openWithDelay();
	};

	const handleMouseLeave = (event: React.MouseEvent<HTMLDivElement>) => {
		onMouseLeave?.(event);
		close();
	};

	const handleFocus = (event: React.FocusEvent<HTMLDivElement>) => {
		onFocus?.(event);
		openWithDelay();
	};

	const handleBlur = (event: React.FocusEvent<HTMLDivElement>) => {
		onBlur?.(event);
		close();
	};

	useEffect(() => {
		return () => clearPendingTimeout();
	}, [clearPendingTimeout]);

	return (
		<motion.div
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			onMouseMove={handleMouseMove}
			onFocus={handleFocus}
			onBlur={handleBlur}
			whileTap={prefersReducedMotion ? undefined : { scale: 0.9 }}
			className={cn(
				"relative flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-border bg-neutral-100 shadow-md transition-shadow hover:shadow-lg dark:bg-neutral-900",
				className,
			)}
			onClick={onClick}
			{...props}
		>
			{children}
			<AnimatePresence>
				{isOpen && (
					<motion.div
						role="tooltip"
						initial={
							prefersReducedMotion
								? { opacity: 0 }
								: { opacity: 0, y: 10, scale: 0.75 }
						}
						animate={
							prefersReducedMotion
								? { opacity: 1 }
								: { opacity: 1, y: 0, scale: 1 }
						}
						exit={
							prefersReducedMotion
								? { opacity: 0 }
								: { opacity: 0, y: 10, scale: 0.75 }
						}
						style={
							prefersReducedMotion
								? undefined
								: {
										rotate,
										translateX,
										transformOrigin: "center center",
									}
						}
						className="pointer-events-none absolute bottom-full mb-2 whitespace-nowrap rounded bg-black/75 px-2 py-1 text-xs text-white shadow-lg dark:bg-white dark:text-black"
					>
						{label}
					</motion.div>
				)}
			</AnimatePresence>
		</motion.div>
	);
}

export default AnimatedTooltip;

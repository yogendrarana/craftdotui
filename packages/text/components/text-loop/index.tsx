"use client";

import * as React from "react";
import {
	AnimatePresence,
	motion,
	useReducedMotion,
	type AnimatePresenceProps,
	type Transition,
	type Variants,
} from "motion/react";
import { cn } from "cn";

export type TextLoopPreset = "slide" | "fade" | "blur" | "flip" | "scale";
export type TextLoopDirection = "up" | "down";

export interface TextLoopProps
	extends Omit<React.HTMLAttributes<HTMLElement>, "children"> {
	/**
	 * Items to cycle through.
	 */
	children: React.ReactNode;
	/**
	 * The HTML element or React component to render as.
	 */
	as?: React.ElementType;
	/**
	 * Controlled active item index.
	 */
	index?: number;
	/**
	 * Initial active item index when uncontrolled.
	 */
	defaultIndex?: number;
	/**
	 * Callback fired when the active index changes.
	 */
	onIndexChange?: (index: number) => void;
	/**
	 * Time in milliseconds between transitions.
	 */
	interval?: number;
	/**
	 * Animation preset when custom `variants` are not provided.
	 */
	preset?: TextLoopPreset;
	/**
	 * Direction of vertical motion for directional presets.
	 */
	direction?: TextLoopDirection;
	/**
	 * Custom Motion transition configuration.
	 */
	transition?: Transition;
	/**
	 * Custom Motion variants (`initial`, `animate`, `exit`).
	 */
	variants?: Variants;
	/**
	 * AnimatePresence mode.
	 */
	mode?: AnimatePresenceProps["mode"];
	/**
	 * Whether the loop is actively cycling.
	 */
	trigger?: boolean;
	/**
	 * Pause cycling while hovering or focusing within the component.
	 */
	pauseOnHover?: boolean;
	/**
	 * Whether to wrap around to the first item after the last item.
	 */
	loop?: boolean;
	/**
	 * Smoothly animate container width when items have different lengths.
	 */
	animateWidth?: boolean;
}

const DEFAULT_TRANSITION: Transition = { duration: 0.3 };
const REDUCED_MOTION_TRANSITION: Transition = { duration: 0.15 };

const FADE_VARIANTS: Variants = {
	initial: { opacity: 0 },
	animate: { opacity: 1 },
	exit: { opacity: 0 },
};

function getPresetVariants(
	preset: TextLoopPreset,
	direction: TextLoopDirection,
): Variants {
	const dir = direction === "up" ? 1 : -1;

	switch (preset) {
		case "fade":
			return FADE_VARIANTS;
		case "blur":
			return {
				initial: { y: 12 * dir, opacity: 0, filter: "blur(4px)" },
				animate: { y: 0, opacity: 1, filter: "blur(0px)" },
				exit: { y: -12 * dir, opacity: 0, filter: "blur(4px)" },
			};
		case "flip":
			return {
				initial: {
					rotateX: -90 * dir,
					opacity: 0,
					transformPerspective: 600,
				},
				animate: { rotateX: 0, opacity: 1, transformPerspective: 600 },
				exit: {
					rotateX: 90 * dir,
					opacity: 0,
					transformPerspective: 600,
				},
			};
		case "scale":
			return {
				initial: { scale: 0.85, opacity: 0 },
				animate: { scale: 1, opacity: 1 },
				exit: { scale: 1.1, opacity: 0 },
			};
		default:
			return {
				initial: { y: 20 * dir, opacity: 0 },
				animate: { y: 0, opacity: 1 },
				exit: { y: -20 * dir, opacity: 0 },
			};
	}
}

export function TextLoop({
	children,
	as: Component = "div",
	index: controlledIndex,
	defaultIndex = 0,
	onIndexChange,
	interval = 2000,
	preset = "slide",
	direction = "up",
	transition,
	variants,
	mode = "popLayout",
	trigger = true,
	pauseOnHover = false,
	loop = true,
	animateWidth = true,
	className,
	onMouseEnter,
	onMouseLeave,
	onFocus,
	onBlur,
	...props
}: TextLoopProps) {
	const items = React.Children.toArray(children);
	const itemCount = items.length;

	const prefersReducedMotion = useReducedMotion();

	const [uncontrolledIndex, setUncontrolledIndex] =
		React.useState(defaultIndex);
	const [isPaused, setIsPaused] = React.useState(false);
	const [width, setWidth] = React.useState<number | undefined>(undefined);

	const isControlled = controlledIndex !== undefined;
	const rawIndex = isControlled ? controlledIndex : uncontrolledIndex;

	// Clamp so a shrinking children list or a bad index never renders `undefined`.
	const currentIndex =
		itemCount === 0 ? 0 : Math.min(Math.max(rawIndex, 0), itemCount - 1);

	const setActiveRef = React.useCallback(
		(node: HTMLDivElement | null) => {
			if (!animateWidth) {
				setWidth(undefined);
				return;
			}
			if (node) {
				// Use offsetWidth so transforms (like scale) don't skew the measured width.
				setWidth(node.offsetWidth);
			}
		},
		[animateWidth],
	);

	// Keep the latest callback in a ref so an inline `onIndexChange`
	// doesn't tear down and restart the timer on every parent render.
	const onIndexChangeRef = React.useRef(onIndexChange);
	React.useEffect(() => {
		onIndexChangeRef.current = onIndexChange;
	}, [onIndexChange]);

	React.useEffect(() => {
		if (!trigger || itemCount <= 1 || isPaused) return;
		if (!loop && currentIndex >= itemCount - 1) return;

		// A timeout keyed on `currentIndex` means manual/controlled index
		// changes restart the countdown, so an item always gets its full interval.
		const timer = setTimeout(() => {
			const next = (currentIndex + 1) % itemCount;

			if (!isControlled) {
				setUncontrolledIndex(next);
			}
			onIndexChangeRef.current?.(next);
		}, interval);

		return () => clearTimeout(timer);
	}, [
		trigger,
		itemCount,
		isPaused,
		loop,
		currentIndex,
		interval,
		isControlled,
	]);

	const resolvedVariants = React.useMemo(
		() =>
			variants ??
			(prefersReducedMotion
				? FADE_VARIANTS
				: getPresetVariants(preset, direction)),
		[variants, prefersReducedMotion, preset, direction],
	);

	const resolvedTransition =
		transition ??
		(prefersReducedMotion ? REDUCED_MOTION_TRANSITION : DEFAULT_TRANSITION);

	return (
		<Component
			// Rotating text shouldn't spam screen readers; consumers can override.
			aria-live="off"
			className={cn("relative inline-block whitespace-nowrap", className)}
			onMouseEnter={(e: React.MouseEvent<HTMLElement>) => {
				onMouseEnter?.(e);
				if (pauseOnHover) setIsPaused(true);
			}}
			onMouseLeave={(e: React.MouseEvent<HTMLElement>) => {
				onMouseLeave?.(e);
				if (pauseOnHover) setIsPaused(false);
			}}
			onFocus={(e: React.FocusEvent<HTMLElement>) => {
				onFocus?.(e);
				if (pauseOnHover) setIsPaused(true);
			}}
			onBlur={(e: React.FocusEvent<HTMLElement>) => {
				onBlur?.(e);
				if (pauseOnHover) setIsPaused(false);
			}}
			{...props}
		>
			<motion.div
				className="inline-block"
				animate={
					animateWidth && width !== undefined ? { width } : undefined
				}
				transition={resolvedTransition}
			>
				<AnimatePresence mode={mode} initial={false}>
					{itemCount > 0 && (
						<motion.div
							key={currentIndex}
							ref={setActiveRef}
							className="inline-block"
							initial="initial"
							animate="animate"
							exit="exit"
							transition={resolvedTransition}
							variants={resolvedVariants}
						>
							{items[currentIndex]}
						</motion.div>
					)}
				</AnimatePresence>
			</motion.div>
		</Component>
	);
}

export default TextLoop;

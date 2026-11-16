"use client";

import type React from "react";
import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { cn } from "cn";

export interface TextTypingProps
	extends Omit<React.HTMLAttributes<HTMLElement>, "children"> {
	children: string;
	typingSpeed?: number;
	trigger?: boolean;
	showCursor?: boolean;
	className?: string;
	as?: React.ElementType;
	onTypingEnd?: () => void;
}

export function TextTyping({
	children,
	typingSpeed = 100,
	trigger = true,
	showCursor = true,
	className,
	as: Component = "div",
	onTypingEnd,
	...props
}: TextTypingProps) {
	const [displayedText, setDisplayedText] = useState("");
	const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
	const onTypingEndRef = useRef(onTypingEnd);
	onTypingEndRef.current = onTypingEnd;

	useEffect(() => {
		const reducedMotion =
			typeof window !== "undefined" &&
			window.matchMedia("(prefers-reduced-motion: reduce)").matches;
		setPrefersReducedMotion(reducedMotion);

		if (!trigger || reducedMotion) {
			setDisplayedText(children);
			if (reducedMotion) {
				onTypingEndRef.current?.();
			}
			return;
		}

		setDisplayedText("");
		let currentIndex = 1;

		const intervalId = setInterval(() => {
			if (currentIndex <= children.length) {
				setDisplayedText(children.slice(0, currentIndex));
				currentIndex += 1;
			} else {
				clearInterval(intervalId);
				onTypingEndRef.current?.();
			}
		}, typingSpeed);

		return () => clearInterval(intervalId);
	}, [children, typingSpeed, trigger]);

	return (
		<Component
			aria-label={children}
			className={cn("tracking-wide", className)}
			{...props}
		>
			{displayedText}
			{showCursor && (
				<motion.span
					aria-hidden="true"
					className="ml-1 select-none"
					animate={
						prefersReducedMotion
							? { opacity: 1 }
							: { opacity: [0, 1] }
					}
					transition={
						prefersReducedMotion
							? undefined
							: {
									duration: 0.5,
									repeat: Infinity,
									repeatType: "reverse",
								}
					}
				>
					|
				</motion.span>
			)}
		</Component>
	);
}

export default TextTyping;

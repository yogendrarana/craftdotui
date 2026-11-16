"use client";

import type React from "react";
import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "cn";

export interface TextScrambleProps
	extends Omit<React.HTMLAttributes<HTMLElement>, "children"> {
	children: string;
	speed?: number;
	trigger?: boolean;
	className?: string;
	characterSet?: string;
	as?: React.ElementType;
	onScrambleEnd?: () => void;
}

const defaultCharacterSet =
	"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

export function TextScramble({
	children = "Hello, World!",
	speed = 50,
	trigger = true,
	className,
	characterSet = defaultCharacterSet,
	as: Component = "span",
	onScrambleEnd,
	...props
}: TextScrambleProps) {
	const [scrambledText, setScrambledText] = useState(children);
	const onScrambleEndRef = useRef(onScrambleEnd);
	onScrambleEndRef.current = onScrambleEnd;

	const scrambleText = useCallback(() => {
		const chars =
			characterSet.length > 0 ? characterSet : defaultCharacterSet;

		if (
			typeof window !== "undefined" &&
			window.matchMedia("(prefers-reduced-motion: reduce)").matches
		) {
			setScrambledText(children);
			onScrambleEndRef.current?.();
			return;
		}

		let revealedCount = 0;

		const scrambleInterval = setInterval(() => {
			if (revealedCount >= children.length) {
				clearInterval(scrambleInterval);
				setScrambledText(children);
				onScrambleEndRef.current?.();
				return;
			}

			const scrambled = children
				.split("")
				.map((char, index) => {
					if (char === " ") {
						return " ";
					}
					return index < revealedCount
						? char
						: chars[Math.floor(Math.random() * chars.length)];
				})
				.join("");

			setScrambledText(scrambled);
			revealedCount += 1;
		}, speed);

		return () => clearInterval(scrambleInterval);
	}, [children, speed, characterSet]);

	useEffect(() => {
		if (trigger) {
			return scrambleText();
		}
		setScrambledText(children);
	}, [trigger, scrambleText, children]);

	return (
		<Component
			aria-label={children}
			className={cn("font-mono", className)}
			{...props}
		>
			{scrambledText}
		</Component>
	);
}

export default TextScramble;

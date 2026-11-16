"use client";

import type React from "react";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { cn } from "cn";

export interface MagneticProps extends React.HTMLAttributes<HTMLDivElement> {
	children: React.ReactNode;
	strength?: number;
	duration?: number;
	disabled?: boolean;
}

export function Magnetic({
	children,
	strength = 0.35,
	duration = 1,
	disabled = false,
	className,
	...props
}: MagneticProps) {
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const el = ref.current;
		if (!el || disabled) return;

		if (
			typeof window !== "undefined" &&
			window.matchMedia("(prefers-reduced-motion: reduce)").matches
		) {
			return;
		}

		const xTo = gsap.quickTo(el, "x", {
			duration,
			ease: "elastic.out(1, 0.3)",
		});
		const yTo = gsap.quickTo(el, "y", {
			duration,
			ease: "elastic.out(1, 0.3)",
		});

		const handlePointerMove = (e: PointerEvent) => {
			if (e.pointerType === "touch") return;

			const rect = el.getBoundingClientRect();
			const x = (e.clientX - (rect.left + rect.width / 2)) * strength;
			const y = (e.clientY - (rect.top + rect.height / 2)) * strength;

			xTo(x);
			yTo(y);
		};

		const handlePointerLeave = () => {
			xTo(0);
			yTo(0);
		};

		el.addEventListener("pointermove", handlePointerMove);
		el.addEventListener("pointerleave", handlePointerLeave);

		return () => {
			el.removeEventListener("pointermove", handlePointerMove);
			el.removeEventListener("pointerleave", handlePointerLeave);
			gsap.killTweensOf(el);
			gsap.set(el, { x: 0, y: 0 });
		};
	}, [strength, duration, disabled]);

	return (
		<div ref={ref} className={cn("inline-block", className)} {...props}>
			{children}
		</div>
	);
}

export default Magnetic;

import type * as React from "react";
import { cn } from "@/lib/utils";

type CrosshairPosition =
	| "top-left"
	| "top-right"
	| "bottom-left"
	| "bottom-right";

const positionClasses: Record<CrosshairPosition, string> = {
	"top-left": "-top-[3.5px] -left-[3.5px]",
	"top-right": "-top-[3.5px] -right-[3.5px]",
	"bottom-left": "-bottom-[3.5px] -left-[3.5px]",
	"bottom-right": "-bottom-[3.5px] -right-[3.5px]",
};

export function Crosshair({
	position = "top-left",
	className,
}: {
	position?: CrosshairPosition;
	className?: string;
}) {
	return (
		<svg
			viewBox="0 0 7 7"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			aria-hidden="true"
			className={cn(
				"pointer-events-none absolute z-20 w-[7px] h-[7px] text-foreground/45 select-none",
				positionClasses[position],
				className,
			)}
		>
			<path d="M3.5 0V7M0 3.5H7" stroke="currentColor" strokeWidth="1" />
		</svg>
	);
}

export function CornerCrosshairs({
	top = true,
	bottom = true,
	className,
}: {
	top?: boolean;
	bottom?: boolean;
	className?: string;
}) {
	return (
		<>
			{top && (
				<>
					<Crosshair position="top-left" className={className} />
					<Crosshair position="top-right" className={className} />
				</>
			)}
			{bottom && (
				<>
					<Crosshair position="bottom-left" className={className} />
					<Crosshair position="bottom-right" className={className} />
				</>
			)}
		</>
	);
}

export function HatchSeparator({
	height = "md",
	className,
	showCrosshairs = true,
}: {
	height?: "sm" | "md";
	className?: string;
	showCrosshairs?: boolean;
}) {
	return (
		<div
			aria-hidden="true"
			className={cn("w-full border-b border-border bg-background", className)}
		>
			<div
				className={cn(
					"max-w-7xl mx-auto border-x border-border bg-hatch relative",
					height === "sm" ? "h-6" : "h-8",
				)}
			>
				{showCrosshairs && <CornerCrosshairs top={false} bottom />}
			</div>
		</div>
	);
}

export function InlineHatchBar({
	height = "sm",
	className,
	showCrosshairs = false,
}: {
	height?: "sm" | "md";
	className?: string;
	showCrosshairs?: boolean;
}) {
	return (
		<div
			aria-hidden="true"
			className={cn(
				"w-full border-b border-border bg-hatch relative",
				height === "sm" ? "h-6" : "h-8",
				className,
			)}
		>
			{showCrosshairs && <CornerCrosshairs />}
		</div>
	);
}

export function RailSection({
	as: Component = "section",
	children,
	className,
	railClassName,
	topCrosshairs = false,
	bottomCrosshairs = true,
}: {
	as?: React.ElementType;
	children: React.ReactNode;
	className?: string;
	railClassName?: string;
	topCrosshairs?: boolean;
	bottomCrosshairs?: boolean;
}) {
	return (
		<Component
			className={cn("w-full border-b border-border bg-background", className)}
		>
			<div
				className={cn(
					"max-w-7xl mx-auto border-x border-border relative",
					railClassName,
				)}
			>
				<CornerCrosshairs top={topCrosshairs} bottom={bottomCrosshairs} />
				{children}
			</div>
		</Component>
	);
}


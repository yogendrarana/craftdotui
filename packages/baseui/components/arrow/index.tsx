import type { SVGAttributes } from "react";
import { cn } from "@craftdotui/lib/utils";

/**
 * Shared styles for Base UI Arrow primitives.
 * Handles positioning and rotation based on the side the arrow is on.
 */
export const ARROW_STYLES = cn(
	"data-[side=bottom]:top-[-8px]",
	"data-[side=top]:bottom-[-8px] data-[side=top]:rotate-180",
	"data-[side=left]:right-[-13px] data-[side=left]:rotate-90",
	"data-[side=right]:left-[-13px] data-[side=right]:-rotate-90",
);

interface BaseArrowProps extends SVGAttributes<SVGSVGElement> {
	title?: string;
}

/**
 * Shared SVG component for arrows.
 * By default, it uses `fill-current` for the main shape, allowing the color to be controlled via text color or direct fill class.
 */
export function BaseArrow({
	className,
	title = "Arrow",
	...props
}: BaseArrowProps) {
	return (
		<svg
			width="12"
			height="6"
			viewBox="0 0 12 6"
			className={cn("fill-current", className)}
			{...props}
		>
			<title>{title}</title>
			<path d="M0 6L6 0L12 6Z" className="fill-inherit" />
			<path d="M0 6L6 0L12 6Z" className="fill-none stroke-border" />
		</svg>
	);
}

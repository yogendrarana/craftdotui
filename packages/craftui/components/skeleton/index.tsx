"use client";

import { cn } from "cn";
import { useRender } from "@base-ui/react/use-render";
import { mergeProps } from "@base-ui/react/merge-props";

/* -------------------------------------------------------------------------- */
/* Skeleton Root                                                              */
/* -------------------------------------------------------------------------- */
export interface SkeletonProps extends useRender.ComponentProps<"div"> {}

function SkeletonRoot({ className, render, ...props }: SkeletonProps) {
	const defaultProps = {
		"data-slot": "skeleton",
		className: cn("animate-pulse rounded-md bg-muted", className),
	};

	return useRender({
		defaultTagName: "div",
		props: mergeProps<"div">(defaultProps, props),
		render,
	});
}

/* -------------------------------------------------------------------------- */
/* Exports                                                                    */
/* -------------------------------------------------------------------------- */

export const Skeleton = Object.assign(SkeletonRoot, {
	Root: SkeletonRoot,
});

export { SkeletonRoot };

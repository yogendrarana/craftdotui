"use client";

import { cn } from "cn";
import { useRender } from "@base-ui/react/use-render";
import { mergeProps } from "@base-ui/react/merge-props";

/* -------------------------------------------------------------------------- */
/* Label Root                                                                 */
/* -------------------------------------------------------------------------- */

export interface LabelProps extends useRender.ComponentProps<"label"> {}

function LabelRoot({ className, render, ...props }: LabelProps) {
	const defaultProps = {
		"data-slot": "label",
		className: cn(
			"flex items-center gap-2 text-sm leading-none font-medium text-foreground select-none",
			"group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
			className,
		),
	};

	return useRender({
		defaultTagName: "label",
		props: mergeProps<"label">(defaultProps, props),
		render,
	});
}

/* -------------------------------------------------------------------------- */
/* Exports                                                                    */
/* -------------------------------------------------------------------------- */

export const Label = Object.assign(LabelRoot, {
	Root: LabelRoot,
});

export { LabelRoot };

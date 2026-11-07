"use client";

import { cn } from "cn";
import { useRender } from "@base-ui/react/use-render";
import { mergeProps } from "@base-ui/react/merge-props";
import { cva, type VariantProps } from "class-variance-authority";

/* -------------------------------------------------------------------------- */
/* Variants                                                                   */
/* -------------------------------------------------------------------------- */

const kbdVariants = cva(
	cn(
		"inline-flex items-center justify-center gap-1 shrink-0 w-fit",
		"rounded-sm border font-sans font-medium leading-none whitespace-nowrap select-none pointer-events-none",
		"[&_svg]:pointer-events-none [&_svg]:shrink-0",
		"in-data-[slot=tooltip-content]:bg-background/20 in-data-[slot=tooltip-content]:text-background in-data-[slot=tooltip-content]:border-background/25 in-data-[slot=tooltip-content]:shadow-none",
	),
	{
		variants: {
			variant: {
				default:
					"bg-muted text-muted-foreground border-border/80 shadow-[0_1px_0_0_var(--border)] dark:bg-muted/70",
				outline: "bg-background text-muted-foreground border-border",
				ghost: "bg-transparent text-muted-foreground border-transparent shadow-none",
			},
			size: {
				sm: "h-4.5 min-w-4.5 px-1 text-[10px] [&_svg:not([class*='size-'])]:size-2.5",
				md: "h-5 min-w-5 px-1.5 text-xs [&_svg:not([class*='size-'])]:size-3",
				lg: "h-6 min-w-6 px-2 text-xs [&_svg:not([class*='size-'])]:size-3.5",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "md",
		},
	},
);

/* -------------------------------------------------------------------------- */
/* Kbd Root                                                                   */
/* -------------------------------------------------------------------------- */

export interface KbdProps
	extends useRender.ComponentProps<"kbd">,
		VariantProps<typeof kbdVariants> {}

function KbdRoot({ className, variant, size, render, ...props }: KbdProps) {
	const defaultProps = {
		"data-slot": "kbd",
		className: cn(kbdVariants({ variant, size }), className),
	};

	return useRender({
		defaultTagName: "kbd",
		props: mergeProps<"kbd">(defaultProps, props),
		render,
	});
}

/* -------------------------------------------------------------------------- */
/* Kbd Group                                                                  */
/* -------------------------------------------------------------------------- */

export interface KbdGroupProps extends useRender.ComponentProps<"kbd"> {}

function KbdGroup({ className, render, ...props }: KbdGroupProps) {
	const defaultProps = {
		"data-slot": "kbd-group",
		className: cn("inline-flex items-center gap-1", className),
	};

	return useRender({
		defaultTagName: "kbd",
		props: mergeProps<"kbd">(defaultProps, props),
		render,
	});
}

/* -------------------------------------------------------------------------- */
/* Exports                                                                    */
/* -------------------------------------------------------------------------- */

export const Kbd = Object.assign(KbdRoot, {
	Root: KbdRoot,
	Group: KbdGroup,
});

export { KbdRoot, KbdGroup, kbdVariants };

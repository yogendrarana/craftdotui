"use client";

import { cn } from "cn";
import { useRender } from "@base-ui/react/use-render";
import { mergeProps } from "@base-ui/react/merge-props";
import { cva, type VariantProps } from "class-variance-authority";

/* -------------------------------------------------------------------------- */
/* Variants                                                                   */
/* -------------------------------------------------------------------------- */

const badgeVariants = cva(
	cn(
		"inline-flex items-center justify-center shrink-0 w-fit",
		"rounded-md border font-medium whitespace-nowrap transition-colors select-none",
		"focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
		"[&_svg]:pointer-events-none [&_svg]:shrink-0",
	),
	{
		variants: {
			variant: {
				default:
					"bg-primary text-primary-foreground border-primary [a&]:hover:bg-primary/90",
				secondary:
					"bg-secondary text-secondary-foreground border-transparent [a&]:hover:bg-secondary/80",
				outline:
					"bg-transparent text-foreground border-border [a&]:hover:bg-accent [a&]:hover:text-accent-foreground",
				ghost: "bg-transparent text-muted-foreground border-transparent [a&]:hover:bg-muted [a&]:hover:text-foreground",
				destructive:
					"bg-destructive/10 text-destructive border-destructive/25 dark:bg-destructive/15 [a&]:hover:bg-destructive/20",
				success:
					"bg-success/10 text-success border-success/25 dark:bg-success/15 [a&]:hover:bg-success/20",
				warning:
					"bg-warning/10 text-warning border-warning/25 dark:bg-warning/15 [a&]:hover:bg-warning/20",
				info: "bg-info/10 text-info border-info/25 dark:bg-info/15 [a&]:hover:bg-info/20",
			},
			size: {
				sm: "h-5 px-1.5 text-[11px] gap-1 [&_svg:not([class*='size-'])]:size-3",
				md: "h-5.5 px-2 text-xs gap-1 [&_svg:not([class*='size-'])]:size-3",
				lg: "h-6 px-2.5 text-xs gap-1.5 [&_svg:not([class*='size-'])]:size-3.5",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "md",
		},
	},
);

/* -------------------------------------------------------------------------- */
/* Badge Root                                                                 */
/* -------------------------------------------------------------------------- */
export interface BadgeProps
	extends useRender.ComponentProps<"span">,
		VariantProps<typeof badgeVariants> {}

function BadgeRoot({ className, variant, size, render, ...props }: BadgeProps) {
	const defaultProps = {
		"data-slot": "badge",
		className: cn(badgeVariants({ variant, size }), className),
	};

	return useRender({
		defaultTagName: "span",
		props: mergeProps<"span">(defaultProps, props),
		render,
	});
}

/* -------------------------------------------------------------------------- */
/* Exports                                                                    */
/* -------------------------------------------------------------------------- */

export const Badge = Object.assign(BadgeRoot, {
	Root: BadgeRoot,
});

export { BadgeRoot, badgeVariants };

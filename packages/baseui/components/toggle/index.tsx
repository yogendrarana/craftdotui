"use client";

import { Toggle as TogglePrimitive } from "@base-ui/react/toggle";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@craftdotui/lib/utils";

/* -------------------------------------------------------------------------- */
/* Toggle Variants                                                            */
/* -------------------------------------------------------------------------- */

const toggleVariants = cva(
	[
		"inline-flex items-center justify-center",
		"rounded-md border border-input bg-background text-sm font-medium transition-colors cursor-pointer",
		"focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/20 focus-visible:ring-offset-1",
		"hover:bg-muted",
		"disabled:pointer-events-none disabled:opacity-50",
		"data-pressed:bg-accent data-pressed:text-accent-foreground",
	],
	{
		variants: {
			variant: {
				default: "border-transparent",
				outline: "border border-border ",
			},
			size: {
				sm: "h-8 px-3 text-sm",
				md: "h-9 px-4",
				lg: "h-10 px-6",
				icon: "size-9 p-0",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "md",
		},
	},
);

/* -------------------------------------------------------------------------- */
/* Types                                                                      */
/* -------------------------------------------------------------------------- */

type ToggleVariants = VariantProps<typeof toggleVariants>;

interface ToggleProps extends TogglePrimitive.Props, ToggleVariants {
	className?: string;
}

/* -------------------------------------------------------------------------- */
/* Toggle                                                                     */
/* -------------------------------------------------------------------------- */

function Toggle({ className, size, variant, ...props }: ToggleProps) {
	return (
		<TogglePrimitive
			className={cn(toggleVariants({ className, size, variant }))}
			data-slot="toggle"
			{...props}
		/>
	);
}

/* -------------------------------------------------------------------------- */
/* Exports                                                                    */
/* -------------------------------------------------------------------------- */

export { Toggle };
export type { ToggleProps };

"use client";

import type * as React from "react";
import { useRender } from "@base-ui/react/use-render";
import { mergeProps } from "@base-ui/react/merge-props";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@craftdotui/lib/utils";

/* -------------------------------------------------------------------------- */
/* Variants                                                                   */
/* -------------------------------------------------------------------------- */

const buttonVariants = cva(
	[
		"relative inline-flex items-center justify-center shrink-0 gap-2",
		"border rounded-md text-sm whitespace-nowrap outline-none transition cursor-pointer",
		"focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
		"disabled:pointer-events-none disabled:opacity-60",
		"[&_svg]:pointer-events-none [&_svg]:shrink-0",
		"[&_svg:not([class*='size-'])]:size-4",
	].join(" "),
	{
		variants: {
			variant: {
				default:
					"bg-primary text-primary-foreground border-primary hover:bg-primary/90",
				secondary:
					"bg-secondary text-secondary-foreground border-transparent hover:bg-secondary/90",
				destructive:
					"bg-destructive text-destructive-foreground border-destructive hover:bg-destructive/90",
				outline:
					"bg-background text-foreground border-border hover:bg-accent",
				ghost: "border-transparent bg-transparent hover:bg-muted",
				link: "border-transparent bg-transparent underline-offset-4 hover:underline",
			},
			size: {
				xs: "h-7 px-2 text-xs",
				sm: "h-8 px-3 text-sm",
				default: "h-9 px-4",
				lg: "h-10 px-6",
				xl: "h-11 px-8",
				icon: "size-9 p-0",
				"icon-sm": "size-8 p-0",
				"icon-lg": "size-10 p-0",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
		},
	},
);

/* -------------------------------------------------------------------------- */
/* Props                                                                      */
/* -------------------------------------------------------------------------- */

interface ButtonProps
	extends useRender.ComponentProps<"button">,
		VariantProps<typeof buttonVariants> {
	loading?: boolean;
}

/* -------------------------------------------------------------------------- */
/* Component                                                                  */
/* -------------------------------------------------------------------------- */

function Button({
	className,
	variant,
	size,
	render,
	loading,
	children,
	...props
}: ButtonProps) {
	// Determine the type attribute based on whether we're rendering a native button
	const type: React.ButtonHTMLAttributes<HTMLButtonElement>["type"] = render
		? undefined
		: "button";

	// Create children with loading spinner
	const renderedChildren = (
		<>
			{loading && (
				<span
					aria-hidden
					className="inline-flex size-4 animate-spin rounded-full border-2 border-current border-t-transparent"
				/>
			)}
			{children}
		</>
	);

	// Prepare default props for the button
	const defaultProps = {
		className: cn(
			buttonVariants({ variant, size }),
			loading && "cursor-wait opacity-80",
			className,
		),
		type,
		"aria-busy": loading || undefined,
		"data-slot": "button",
		disabled: props.disabled || loading,
		children: renderedChildren, // Make sure children are included
	};

	// Merge default props with user props
	const mergedProps = mergeProps<"button">(defaultProps, props);

	// Use useRender hook which handles the rendering logic
	// According to Base UI docs, this returns a React element
	return useRender({
		defaultTagName: "button",
		props: mergedProps,
		render,
	});
}

/* -------------------------------------------------------------------------- */
/* Exports                                                                    */
/* -------------------------------------------------------------------------- */

export { Button, buttonVariants };

"use client";

import { cn } from "cn";
import { useRender } from "@base-ui/react/use-render";
import { mergeProps } from "@base-ui/react/merge-props";
import { cva, type VariantProps } from "class-variance-authority";

/* -------------------------------------------------------------------------- */
/* Variants                                                                   */
/* -------------------------------------------------------------------------- */

const alertVariants = cva(
	cn(
		"relative w-full rounded border p-3 text-sm",
		"grid grid-cols-[0_1fr] has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] has-[>svg]:gap-x-3 gap-y-0.5 items-start",
		"[&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current",
	),
	{
		variants: {
			variant: {
				default: "bg-card text-card-foreground border-border",
				destructive:
					"bg-destructive/4 border-destructive/30 text-destructive [&>svg]:text-destructive *:data-[slot=alert-description]:text-destructive/90 dark:bg-destructive/10",
				success:
					"bg-success/4 border-success/30 text-success [&>svg]:text-success *:data-[slot=alert-description]:text-success/90 dark:bg-success/10",
				warning:
					"bg-warning/4 border-warning/30 text-warning [&>svg]:text-warning *:data-[slot=alert-description]:text-warning/90 dark:bg-warning/10",
				info: "bg-info/4 border-info/30 text-info [&>svg]:text-info *:data-[slot=alert-description]:text-info/90 dark:bg-info/10",
			},
		},
		defaultVariants: {
			variant: "default",
		},
	},
);

/* -------------------------------------------------------------------------- */
/* Alert Root                                                                 */
/* -------------------------------------------------------------------------- */

export interface AlertRootProps
	extends useRender.ComponentProps<"div">,
		VariantProps<typeof alertVariants> {}

function AlertRoot({ className, variant, render, ...props }: AlertRootProps) {
	const defaultProps = {
		role: "alert",
		"data-slot": "alert",
		className: cn(alertVariants({ variant }), className),
	};

	return useRender({
		defaultTagName: "div",
		props: mergeProps<"div">(defaultProps, props),
		render,
	});
}

/* -------------------------------------------------------------------------- */
/* Alert Title                                                                */
/* -------------------------------------------------------------------------- */

export interface AlertTitleProps extends useRender.ComponentProps<"div"> {}

function AlertTitle({ className, render, ...props }: AlertTitleProps) {
	const defaultProps = {
		"data-slot": "alert-title",
		className: cn(
			"col-start-2 line-clamp-1 min-h-4 font-medium",
			className,
		),
	};

	return useRender({
		defaultTagName: "div",
		props: mergeProps<"div">(defaultProps, props),
		render,
	});
}

/* -------------------------------------------------------------------------- */
/* Alert Description                                                          */
/* -------------------------------------------------------------------------- */

export interface AlertDescriptionProps
	extends useRender.ComponentProps<"div"> {}

function AlertDescription({
	className,
	render,
	...props
}: AlertDescriptionProps) {
	const defaultProps = {
		"data-slot": "alert-description",
		className: cn(
			"col-start-2 grid justify-items-start gap-1 text-sm text-muted-foreground [&_p]:leading-relaxed",
			className,
		),
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

export const Alert = Object.assign(AlertRoot, {
	Root: AlertRoot,
	Title: AlertTitle,
	Description: AlertDescription,
});

export { AlertRoot, AlertTitle, AlertDescription, alertVariants };

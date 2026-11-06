"use client";

import { cn } from "cn";
import { useRender } from "@base-ui/react/use-render";
import { mergeProps } from "@base-ui/react/merge-props";
import { cva, type VariantProps } from "class-variance-authority";

/* -------------------------------------------------------------------------- */
/* Card Root                                                                  */
/* -------------------------------------------------------------------------- */

export interface CardRootProps extends useRender.ComponentProps<"div"> {}

function CardRoot({ className, render, ...props }: CardRootProps) {
	const defaultProps = {
		"data-slot": "card",
		className: cn(
			"bg-card text-card-foreground flex flex-col gap-6 rounded-xl border border-border py-6 shadow-xs",
			"has-[[data-slot=card-footer][data-variant=shaded]]:pb-0",
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
/* Card Header                                                                */
/* -------------------------------------------------------------------------- */

export interface CardHeaderProps extends useRender.ComponentProps<"div"> {}

function CardHeader({ className, render, ...props }: CardHeaderProps) {
	const defaultProps = {
		"data-slot": "card-header",
		className: cn(
			"@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
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
/* Card Title                                                                 */
/* -------------------------------------------------------------------------- */

export interface CardTitleProps extends useRender.ComponentProps<"div"> {}

function CardTitle({ className, render, ...props }: CardTitleProps) {
	const defaultProps = {
		"data-slot": "card-title",
		className: cn("leading-none font-semibold text-foreground", className),
	};

	return useRender({
		defaultTagName: "div",
		props: mergeProps<"div">(defaultProps, props),
		render,
	});
}

/* -------------------------------------------------------------------------- */
/* Card Description                                                           */
/* -------------------------------------------------------------------------- */

export interface CardDescriptionProps extends useRender.ComponentProps<"div"> {}

function CardDescription({
	className,
	render,
	...props
}: CardDescriptionProps) {
	const defaultProps = {
		"data-slot": "card-description",
		className: cn("text-sm text-muted-foreground", className),
	};

	return useRender({
		defaultTagName: "div",
		props: mergeProps<"div">(defaultProps, props),
		render,
	});
}

/* -------------------------------------------------------------------------- */
/* Card Action                                                                */
/* -------------------------------------------------------------------------- */

export interface CardActionProps extends useRender.ComponentProps<"div"> {}

function CardAction({ className, render, ...props }: CardActionProps) {
	const defaultProps = {
		"data-slot": "card-action",
		className: cn(
			"col-start-2 row-span-2 row-start-1 self-start justify-self-end",
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
/* Card Content                                                               */
/* -------------------------------------------------------------------------- */

export interface CardContentProps extends useRender.ComponentProps<"div"> {}

function CardContent({ className, render, ...props }: CardContentProps) {
	const defaultProps = {
		"data-slot": "card-content",
		className: cn("px-6", className),
	};

	return useRender({
		defaultTagName: "div",
		props: mergeProps<"div">(defaultProps, props),
		render,
	});
}

/* -------------------------------------------------------------------------- */
/* Card Footer Variants                                                       */
/* -------------------------------------------------------------------------- */

const cardFooterVariants = cva("flex items-center px-6 shrink-0", {
	variants: {
		variant: {
			default: "[.border-t]:pt-6",
			shaded: "border-t border-border bg-muted/50 py-3 rounded-b-[calc(var(--radius-xl)-1px)]",
		},
	},
	defaultVariants: {
		variant: "default",
	},
});

export type CardFooterVariants = VariantProps<typeof cardFooterVariants>;

export interface CardFooterProps
	extends useRender.ComponentProps<"div">,
		CardFooterVariants {}

function CardFooter({
	className,
	variant = "default",
	render,
	...props
}: CardFooterProps) {
	const defaultProps = {
		"data-slot": "card-footer",
		"data-variant": variant,
		className: cn(cardFooterVariants({ variant }), className),
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

export const Card = Object.assign(CardRoot, {
	Root: CardRoot,
	Header: CardHeader,
	Title: CardTitle,
	Description: CardDescription,
	Action: CardAction,
	Content: CardContent,
	Footer: CardFooter,
});

export {
	CardRoot,
	CardHeader,
	CardTitle,
	CardDescription,
	CardAction,
	CardContent,
	CardFooter,
	cardFooterVariants,
};

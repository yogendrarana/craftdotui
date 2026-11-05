"use client";

import { cn } from "cn";
import { useRender } from "@base-ui/react/use-render";
import { mergeProps } from "@base-ui/react/merge-props";
import { cva, type VariantProps } from "class-variance-authority";

/* -------------------------------------------------------------------------- */
/* Variants                                                                   */
/* -------------------------------------------------------------------------- */

const emptyMediaVariants = cva(
	"mb-2 flex shrink-0 items-center justify-center [&_svg]:pointer-events-none [&_svg]:shrink-0",
	{
		variants: {
			variant: {
				default: "bg-transparent",
				icon: "flex size-10 shrink-0 items-center justify-center rounded-lg border border-border/60 bg-muted text-foreground [&_svg:not([class*='size-'])]:size-5",
			},
		},
		defaultVariants: {
			variant: "default",
		},
	},
);

/* -------------------------------------------------------------------------- */
/* Empty Root                                                                 */
/* -------------------------------------------------------------------------- */

export interface EmptyRootProps extends useRender.ComponentProps<"div"> {}

function EmptyRoot({ className, render, ...props }: EmptyRootProps) {
	const defaultProps = {
		"data-slot": "empty",
		className: cn(
			"flex min-w-0 flex-1 flex-col items-center justify-center gap-6 rounded-lg border-dashed p-6 text-center text-balance md:p-12",
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
/* Empty Header                                                               */
/* -------------------------------------------------------------------------- */

export interface EmptyHeaderProps extends useRender.ComponentProps<"div"> {}

function EmptyHeader({ className, render, ...props }: EmptyHeaderProps) {
	const defaultProps = {
		"data-slot": "empty-header",
		className: cn(
			"flex max-w-sm flex-col items-center gap-2 text-center",
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
/* Empty Media                                                                */
/* -------------------------------------------------------------------------- */

export interface EmptyMediaProps
	extends useRender.ComponentProps<"div">,
		VariantProps<typeof emptyMediaVariants> {}

function EmptyMedia({
	className,
	variant = "default",
	render,
	...props
}: EmptyMediaProps) {
	const defaultProps = {
		"data-slot": "empty-media",
		"data-variant": variant,
		className: cn(emptyMediaVariants({ variant }), className),
	};

	return useRender({
		defaultTagName: "div",
		props: mergeProps<"div">(defaultProps, props),
		render,
	});
}

/* -------------------------------------------------------------------------- */
/* Empty Title                                                                */
/* -------------------------------------------------------------------------- */

export interface EmptyTitleProps extends useRender.ComponentProps<"div"> {}

function EmptyTitle({ className, render, ...props }: EmptyTitleProps) {
	const defaultProps = {
		"data-slot": "empty-title",
		className: cn(
			"text-base font-medium tracking-tight text-foreground",
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
/* Empty Description                                                          */
/* -------------------------------------------------------------------------- */

export interface EmptyDescriptionProps
	extends useRender.ComponentProps<"div"> {}

function EmptyDescription({
	className,
	render,
	...props
}: EmptyDescriptionProps) {
	const defaultProps = {
		"data-slot": "empty-description",
		className: cn(
			"text-sm/relaxed text-muted-foreground [&>a]:underline [&>a]:underline-offset-4 [&>a:hover]:text-primary",
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
/* Empty Content                                                              */
/* -------------------------------------------------------------------------- */

export interface EmptyContentProps extends useRender.ComponentProps<"div"> {}

function EmptyContent({ className, render, ...props }: EmptyContentProps) {
	const defaultProps = {
		"data-slot": "empty-content",
		className: cn(
			"flex w-full max-w-sm min-w-0 flex-col items-center gap-4 text-sm text-balance",
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

export const Empty = Object.assign(EmptyRoot, {
	Root: EmptyRoot,
	Header: EmptyHeader,
	Media: EmptyMedia,
	Title: EmptyTitle,
	Description: EmptyDescription,
	Content: EmptyContent,
});

export {
	EmptyRoot,
	EmptyHeader,
	EmptyMedia,
	EmptyTitle,
	EmptyDescription,
	EmptyContent,
	emptyMediaVariants,
};


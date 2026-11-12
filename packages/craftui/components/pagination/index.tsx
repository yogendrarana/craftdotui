"use client";

import {
	ChevronLeftIcon,
	ChevronRightIcon,
	ChevronsLeftIcon,
	ChevronsRightIcon,
	MoreHorizontalIcon,
} from "lucide-react";
import { cn } from "cn";
import { useRender } from "@base-ui/react/use-render";
import { mergeProps } from "@base-ui/react/merge-props";
import {
	type ButtonProps,
	buttonVariants,
} from "@craftdotui/baseui/components/button";

/* -------------------------------------------------------------------------- */
/* Pagination Root                                                            */
/* -------------------------------------------------------------------------- */

export interface PaginationRootProps extends useRender.ComponentProps<"nav"> {}

function PaginationRoot({ className, render, ...props }: PaginationRootProps) {
	const defaultProps = {
		"aria-label": "pagination",
		"data-slot": "pagination",
		className: cn("mx-auto flex w-full justify-center", className),
	};

	return useRender({
		defaultTagName: "nav",
		props: mergeProps<"nav">(defaultProps, props),
		render,
	});
}

/* -------------------------------------------------------------------------- */
/* Pagination Content                                                         */
/* -------------------------------------------------------------------------- */

export interface PaginationContentProps
	extends useRender.ComponentProps<"ul"> {}

function PaginationContent({
	className,
	render,
	...props
}: PaginationContentProps) {
	const defaultProps = {
		"data-slot": "pagination-content",
		className: cn("flex flex-row items-center gap-1", className),
	};

	return useRender({
		defaultTagName: "ul",
		props: mergeProps<"ul">(defaultProps, props),
		render,
	});
}

/* -------------------------------------------------------------------------- */
/* Pagination Item                                                            */
/* -------------------------------------------------------------------------- */

export interface PaginationItemProps extends useRender.ComponentProps<"li"> {}

function PaginationItem({ className, render, ...props }: PaginationItemProps) {
	const defaultProps = {
		"data-slot": "pagination-item",
		className: cn("", className),
	};

	return useRender({
		defaultTagName: "li",
		props: mergeProps<"li">(defaultProps, props),
		render,
	});
}

/* -------------------------------------------------------------------------- */
/* Pagination Link                                                            */
/* -------------------------------------------------------------------------- */

export interface PaginationLinkProps
	extends useRender.ComponentProps<"a">,
		Pick<ButtonProps, "size" | "variant"> {
	isActive?: boolean;
	disabled?: boolean;
}

function PaginationLink({
	className,
	isActive,
	disabled,
	size = "icon",
	variant,
	render,
	...props
}: PaginationLinkProps) {
	const resolvedVariant = variant ?? (isActive ? "outline" : "ghost");

	const defaultProps = {
		"aria-current": isActive ? ("page" as const) : undefined,
		"aria-disabled": disabled || undefined,
		"data-slot": "pagination-link",
		"data-active": isActive || undefined,
		"data-disabled": disabled || undefined,
		className: cn(
			buttonVariants({ variant: resolvedVariant, size }),
			disabled && "pointer-events-none opacity-50",
			className,
		),
	};

	return useRender({
		defaultTagName: "a",
		props: mergeProps<"a">(defaultProps, props),
		render,
	});
}

/* -------------------------------------------------------------------------- */
/* Pagination Previous                                                        */
/* -------------------------------------------------------------------------- */

export interface PaginationPreviousProps extends PaginationLinkProps {}

function PaginationPrevious({
	className,
	size = "md",
	children,
	...props
}: PaginationPreviousProps) {
	return (
		<PaginationLink
			aria-label="Go to previous page"
			data-slot="pagination-previous"
			size={size}
			className={cn("gap-1 px-2.5 sm:pl-2.5", className)}
			{...props}
		>
			{children ?? (
				<>
					<ChevronLeftIcon className="size-4" />
					<span className="hidden sm:block">Prev</span>
				</>
			)}
		</PaginationLink>
	);
}

/* -------------------------------------------------------------------------- */
/* Pagination Next                                                            */
/* -------------------------------------------------------------------------- */

export interface PaginationNextProps extends PaginationLinkProps {}

function PaginationNext({
	className,
	size = "md",
	children,
	...props
}: PaginationNextProps) {
	return (
		<PaginationLink
			aria-label="Go to next page"
			data-slot="pagination-next"
			size={size}
			className={cn("gap-1 px-2.5 sm:pr-2.5", className)}
			{...props}
		>
			{children ?? (
				<>
					<span className="hidden sm:block">Next</span>
					<ChevronRightIcon className="size-4" />
				</>
			)}
		</PaginationLink>
	);
}

/* -------------------------------------------------------------------------- */
/* Pagination First                                                           */
/* -------------------------------------------------------------------------- */

export interface PaginationFirstProps extends PaginationLinkProps {}

function PaginationFirst({
	className,
	size = "icon",
	children,
	...props
}: PaginationFirstProps) {
	return (
		<PaginationLink
			aria-label="Go to first page"
			data-slot="pagination-first"
			size={size}
			className={cn(className)}
			{...props}
		>
			{children ?? <ChevronsLeftIcon className="size-4" />}
		</PaginationLink>
	);
}

/* -------------------------------------------------------------------------- */
/* Pagination Last                                                            */
/* -------------------------------------------------------------------------- */

export interface PaginationLastProps extends PaginationLinkProps {}

function PaginationLast({
	className,
	size = "icon",
	children,
	...props
}: PaginationLastProps) {
	return (
		<PaginationLink
			aria-label="Go to last page"
			data-slot="pagination-last"
			size={size}
			className={cn(className)}
			{...props}
		>
			{children ?? <ChevronsRightIcon className="size-4" />}
		</PaginationLink>
	);
}

/* -------------------------------------------------------------------------- */
/* Pagination Ellipsis                                                        */
/* -------------------------------------------------------------------------- */

export interface PaginationEllipsisProps
	extends useRender.ComponentProps<"span"> {}

function PaginationEllipsis({
	className,
	children,
	render,
	...props
}: PaginationEllipsisProps) {
	const defaultProps = {
		"aria-hidden": true,
		"data-slot": "pagination-ellipsis",
		className: cn(
			"flex size-8 items-center justify-center text-muted-foreground",
			className,
		),
		children: children ?? (
			<>
				<MoreHorizontalIcon className="size-4" />
				<span className="sr-only">More pages</span>
			</>
		),
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

export const Pagination = Object.assign(PaginationRoot, {
	Root: PaginationRoot,
	Content: PaginationContent,
	Item: PaginationItem,
	Link: PaginationLink,
	Previous: PaginationPrevious,
	Next: PaginationNext,
	First: PaginationFirst,
	Last: PaginationLast,
	Ellipsis: PaginationEllipsis,
});

export {
	PaginationRoot,
	PaginationContent,
	PaginationItem,
	PaginationLink,
	PaginationPrevious,
	PaginationNext,
	PaginationFirst,
	PaginationLast,
	PaginationEllipsis,
};

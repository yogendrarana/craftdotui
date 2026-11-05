"use client";

import type * as React from "react";
import { ChevronRight, MoreHorizontal } from "lucide-react";
import { useRender } from "@base-ui/react/use-render";
import { mergeProps } from "@base-ui/react/merge-props";
import { cn } from "cn";

/* -------------------------------------------------------------------------- */
/* Breadcrumb Root                                                            */
/* -------------------------------------------------------------------------- */

export interface BreadcrumbRootProps extends useRender.ComponentProps<"nav"> {}

function BreadcrumbRoot({ className, render, ...props }: BreadcrumbRootProps) {
	const defaultProps = {
		"aria-label": "breadcrumb",
		"data-slot": "breadcrumb",
		className: cn(className),
	};

	return useRender({
		defaultTagName: "nav",
		props: mergeProps<"nav">(defaultProps, props),
		render,
	});
}

/* -------------------------------------------------------------------------- */
/* Breadcrumb List                                                            */
/* -------------------------------------------------------------------------- */

export interface BreadcrumbListProps extends useRender.ComponentProps<"ol"> {}

function BreadcrumbList({ className, render, ...props }: BreadcrumbListProps) {
	const defaultProps = {
		"data-slot": "breadcrumb-list",
		className: cn(
			"flex flex-wrap items-center gap-1.5 text-sm wrap-break-word text-muted-foreground sm:gap-2",
			className,
		),
	};

	return useRender({
		defaultTagName: "ol",
		props: mergeProps<"ol">(defaultProps, props),
		render,
	});
}

/* -------------------------------------------------------------------------- */
/* Breadcrumb Item                                                            */
/* -------------------------------------------------------------------------- */

export interface BreadcrumbItemProps extends useRender.ComponentProps<"li"> {}

function BreadcrumbItem({ className, render, ...props }: BreadcrumbItemProps) {
	const defaultProps = {
		"data-slot": "breadcrumb-item",
		className: cn("inline-flex items-center gap-1.5", className),
	};

	return useRender({
		defaultTagName: "li",
		props: mergeProps<"li">(defaultProps, props),
		render,
	});
}

/* -------------------------------------------------------------------------- */
/* Breadcrumb Link                                                            */
/* -------------------------------------------------------------------------- */

export interface BreadcrumbLinkProps extends useRender.ComponentProps<"a"> {}

function BreadcrumbLink({ className, render, ...props }: BreadcrumbLinkProps) {
	const defaultProps = {
		"data-slot": "breadcrumb-link",
		className: cn(
			"inline-flex items-center gap-1.5 transition-colors hover:text-foreground",
			"focus-visible:rounded-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
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
/* Breadcrumb Page                                                            */
/* -------------------------------------------------------------------------- */

export interface BreadcrumbPageProps extends useRender.ComponentProps<"span"> {}

function BreadcrumbPage({ className, render, ...props }: BreadcrumbPageProps) {
	const defaultProps = {
		role: "link",
		"aria-disabled": true,
		"aria-current": "page" as const,
		"data-slot": "breadcrumb-page",
		className: cn(
			"inline-flex items-center gap-1.5 font-medium text-foreground",
			className,
		),
	};

	return useRender({
		defaultTagName: "span",
		props: mergeProps<"span">(defaultProps, props),
		render,
	});
}

/* -------------------------------------------------------------------------- */
/* Breadcrumb Separator                                                       */
/* -------------------------------------------------------------------------- */

export interface BreadcrumbSeparatorProps
	extends React.ComponentPropsWithoutRef<"li"> {}

function BreadcrumbSeparator({
	children,
	className,
	...props
}: BreadcrumbSeparatorProps) {
	return (
		<li
			role="presentation"
			aria-hidden="true"
			data-slot="breadcrumb-separator"
			className={cn(
				"inline-flex items-center text-muted-foreground/70 [&>svg]:size-3.5",
				className,
			)}
			{...props}
		>
			{children ?? <ChevronRight />}
		</li>
	);
}

/* -------------------------------------------------------------------------- */
/* Breadcrumb Ellipsis                                                        */
/* -------------------------------------------------------------------------- */

export interface BreadcrumbEllipsisProps
	extends React.ComponentPropsWithoutRef<"span"> {}

function BreadcrumbEllipsis({
	className,
	children,
	...props
}: BreadcrumbEllipsisProps) {
	return (
		<span
			role="presentation"
			aria-hidden="true"
			data-slot="breadcrumb-ellipsis"
			className={cn(
				"flex size-7 items-center justify-center rounded-md text-muted-foreground transition-colors hover:text-foreground [&>svg]:size-4",
				className,
			)}
			{...props}
		>
			{children ?? <MoreHorizontal />}
			<span className="sr-only">More</span>
		</span>
	);
}

/* -------------------------------------------------------------------------- */
/* Exports                                                                    */
/* -------------------------------------------------------------------------- */

const Breadcrumb = Object.assign(BreadcrumbRoot, {
	Root: BreadcrumbRoot,
	List: BreadcrumbList,
	Item: BreadcrumbItem,
	Link: BreadcrumbLink,
	Page: BreadcrumbPage,
	Separator: BreadcrumbSeparator,
	Ellipsis: BreadcrumbEllipsis,
});

export {
	Breadcrumb,
	BreadcrumbRoot,
	BreadcrumbList,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbPage,
	BreadcrumbSeparator,
	BreadcrumbEllipsis,
};

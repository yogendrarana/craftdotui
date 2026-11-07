"use client";

import { cn } from "cn";
import { useRender } from "@base-ui/react/use-render";
import { mergeProps } from "@base-ui/react/merge-props";

/* -------------------------------------------------------------------------- */
/* Table Root                                                                 */
/* -------------------------------------------------------------------------- */

export interface TableRootProps extends useRender.ComponentProps<"table"> {
	containerClassName?: string;
}

function TableRoot({
	className,
	containerClassName,
	render,
	...props
}: TableRootProps) {
	const defaultProps = {
		"data-slot": "table",
		className: cn("w-full caption-bottom text-sm", className),
	};

	const tableElement = useRender({
		defaultTagName: "table",
		props: mergeProps<"table">(defaultProps, props),
		render,
	});

	return (
		<div
			data-slot="table-container"
			className={cn(
				"relative w-full overflow-x-auto",
				containerClassName,
			)}
		>
			{tableElement}
		</div>
	);
}

/* -------------------------------------------------------------------------- */
/* Table Header                                                               */
/* -------------------------------------------------------------------------- */

export interface TableHeaderProps extends useRender.ComponentProps<"thead"> {}

function TableHeader({ className, render, ...props }: TableHeaderProps) {
	const defaultProps = {
		"data-slot": "table-header",
		className: cn("[&_tr]:border-b [&_tr]:border-border", className),
	};

	return useRender({
		defaultTagName: "thead",
		props: mergeProps<"thead">(defaultProps, props),
		render,
	});
}

/* -------------------------------------------------------------------------- */
/* Table Body                                                                 */
/* -------------------------------------------------------------------------- */

export interface TableBodyProps extends useRender.ComponentProps<"tbody"> {}

function TableBody({ className, render, ...props }: TableBodyProps) {
	const defaultProps = {
		"data-slot": "table-body",
		className: cn("[&_tr:last-child]:border-0", className),
	};

	return useRender({
		defaultTagName: "tbody",
		props: mergeProps<"tbody">(defaultProps, props),
		render,
	});
}

/* -------------------------------------------------------------------------- */
/* Table Footer                                                               */
/* -------------------------------------------------------------------------- */

export interface TableFooterProps extends useRender.ComponentProps<"tfoot"> {}

function TableFooter({ className, render, ...props }: TableFooterProps) {
	const defaultProps = {
		"data-slot": "table-footer",
		className: cn(
			"border-t border-border bg-muted/50 font-medium [&>tr]:last:border-b-0",
			className,
		),
	};

	return useRender({
		defaultTagName: "tfoot",
		props: mergeProps<"tfoot">(defaultProps, props),
		render,
	});
}

/* -------------------------------------------------------------------------- */
/* Table Row                                                                  */
/* -------------------------------------------------------------------------- */

export interface TableRowProps extends useRender.ComponentProps<"tr"> {}

function TableRow({ className, render, ...props }: TableRowProps) {
	const defaultProps = {
		"data-slot": "table-row",
		className: cn(
			"border-b border-border transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
			className,
		),
	};

	return useRender({
		defaultTagName: "tr",
		props: mergeProps<"tr">(defaultProps, props),
		render,
	});
}

/* -------------------------------------------------------------------------- */
/* Table Head                                                                 */
/* -------------------------------------------------------------------------- */

export interface TableHeadProps extends useRender.ComponentProps<"th"> {}

function TableHead({ className, render, ...props }: TableHeadProps) {
	const defaultProps = {
		"data-slot": "table-head",
		className: cn(
			"h-10 px-3 text-left align-middle font-medium whitespace-nowrap text-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
			className,
		),
	};

	return useRender({
		defaultTagName: "th",
		props: mergeProps<"th">(defaultProps, props),
		render,
	});
}

/* -------------------------------------------------------------------------- */
/* Table Cell                                                                 */
/* -------------------------------------------------------------------------- */

export interface TableCellProps extends useRender.ComponentProps<"td"> {}

function TableCell({ className, render, ...props }: TableCellProps) {
	const defaultProps = {
		"data-slot": "table-cell",
		className: cn(
			"p-3 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
			className,
		),
	};

	return useRender({
		defaultTagName: "td",
		props: mergeProps<"td">(defaultProps, props),
		render,
	});
}

/* -------------------------------------------------------------------------- */
/* Table Caption                                                              */
/* -------------------------------------------------------------------------- */

export interface TableCaptionProps
	extends useRender.ComponentProps<"caption"> {}

function TableCaption({ className, render, ...props }: TableCaptionProps) {
	const defaultProps = {
		"data-slot": "table-caption",
		className: cn("mt-4 text-sm text-muted-foreground", className),
	};

	return useRender({
		defaultTagName: "caption",
		props: mergeProps<"caption">(defaultProps, props),
		render,
	});
}

/* -------------------------------------------------------------------------- */
/* Exports                                                                    */
/* -------------------------------------------------------------------------- */

export const Table = Object.assign(TableRoot, {
	Root: TableRoot,
	Header: TableHeader,
	Body: TableBody,
	Footer: TableFooter,
	Head: TableHead,
	Row: TableRow,
	Cell: TableCell,
	Caption: TableCaption,
});

export {
	TableRoot,
	TableHeader,
	TableBody,
	TableFooter,
	TableHead,
	TableRow,
	TableCell,
	TableCaption,
};

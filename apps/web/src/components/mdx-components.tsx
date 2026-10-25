/** biome-ignore-all lint/suspicious/noExplicitAny: <no_explanation> */

import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { CopyButton } from "./mdx/copy-button";
import { Installation } from "./mdx/installation";
import { CodeRenderer } from "./mdx/code-renderer";
import { ComponentPreview } from "./mdx/component-preview";
import { useMDXComponent } from "@content-collections/mdx/react";
import { ComponentSource } from "@/components/mdx/component-source";
import { ComponentCodePreview } from "@/components/mdx/component-code-preview";
import { PropsTable } from "@/components/mdx/props";

const CustomLink = (props: any) => {
	const href = props.href;

	if (href.startsWith("/")) {
		return (
			<Link {...props} href={href}>
				{props.children}
			</Link>
		);
	}

	if (href.startsWith("#")) {
		return <a {...props} />;
	}

	return <a target="_blank" rel="noopener noreferrer" {...props} />;
};

const components = {
	ComponentSource,
	CodeRenderer,
	ComponentPreview,
	ComponentCodePreview,
	Installation,
	PropsTable,
	Image,
	h1: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
		<h1
			className={cn(
				"mt-2 mb-4 scroll-m-20 text-3xl sm:text-4xl font-semibold tracking-tight text-foreground",
				className,
			)}
			{...props}
		/>
	),
	h2: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
		<h2
			className={cn(
				"mt-10 mb-4 scroll-m-20 border-b border-border pb-2.5 text-xl sm:text-2xl font-semibold tracking-tight text-foreground",
				className,
			)}
			{...props}
		/>
	),
	h3: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
		<h3
			className={cn(
				"mt-8 mb-3 scroll-m-20 text-lg font-semibold tracking-tight text-foreground",
				className,
			)}
			{...props}
		/>
	),
	h4: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
		<h4
			className={cn(
				"mt-6 mb-2 scroll-m-20 text-base font-semibold tracking-tight text-foreground",
				className,
			)}
			{...props}
		/>
	),
	h5: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
		<h5
			className={cn(
				"mt-6 mb-2 scroll-m-20 text-sm font-semibold tracking-tight text-foreground",
				className,
			)}
			{...props}
		/>
	),
	h6: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
		<h6
			className={cn(
				"mt-6 mb-2 scroll-m-20 text-xs font-mono uppercase tracking-wider text-muted-foreground",
				className,
			)}
			{...props}
		/>
	),

	a: ({ className, ...props }: React.HTMLAttributes<HTMLAnchorElement>) => (
		<CustomLink
			className={cn(
				"font-medium text-foreground underline underline-offset-4 hover:text-muted-foreground transition-colors",
				className,
			)}
			{...props}
		/>
	),
	p: ({
		className,
		...props
	}: React.HTMLAttributes<HTMLParagraphElement>) => (
		<p
			className={cn(
				"mb-1 leading-7 text-foreground/90 not-first:mt-4",
				className,
			)}
			{...props}
		/>
	),
	ul: ({ className, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
		<ul
			className={cn("ml-6 list-disc space-y-1.5 my-4", className)}
			{...props}
		/>
	),
	ol: ({ className, ...props }: React.HTMLAttributes<HTMLOListElement>) => (
		<ol
			className={cn("ml-6 list-decimal space-y-1.5 my-4", className)}
			{...props}
		/>
	),
	li: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
		<li className={cn("leading-7", className)} {...props} />
	),
	blockquote: ({
		className,
		...props
	}: React.HTMLAttributes<HTMLElement>) => (
		<blockquote
			className={cn(
				"mt-6 border-l-2 border-foreground bg-muted/40 px-4 py-3 text-sm text-muted-foreground",
				className,
			)}
			{...props}
		/>
	),
	table: ({
		className,
		...props
	}: React.HTMLAttributes<HTMLTableElement>) => (
		<div className="my-6 w-full overflow-x-auto border border-border rounded-md">
			<table
				className={cn("w-full border-collapse", className)}
				{...props}
			/>
		</div>
	),
	tr: ({
		className,
		...props
	}: React.HTMLAttributes<HTMLTableRowElement>) => (
		<tr
			className={cn(
				"m-0 border-b border-border last:border-b-0 p-0",
				className,
			)}
			{...props}
		/>
	),
	th: ({
		className,
		...props
	}: React.HTMLAttributes<HTMLTableCellElement>) => (
		<th
			className={cn(
				"border-r border-border last:border-r-0 bg-muted/40 px-4 py-2.5 text-left text-[11px] font-mono uppercase tracking-wider text-muted-foreground [&[align=center]]:text-center [&[align=right]]:text-right",
				className,
			)}
			{...props}
		/>
	),
	td: ({
		className,
		...props
	}: React.HTMLAttributes<HTMLTableCellElement>) => (
		<td
			className={cn(
				"border-r border-border last:border-r-0 px-4 py-2.5 text-left text-sm [&[align=center]]:text-center [&[align=right]]:text-right",
				className,
			)}
			{...props}
		/>
	),
	Spacer: ({ height = "1rem" }) => (
		<div style={{ height }} aria-hidden="true" />
	),
	pre: ({
		className,
		children,
		...props
	}: React.HTMLProps<HTMLPreElement>) => {
		const codeText = String(
			(children as any)?.props?.children ?? children ?? "",
		).trim();

		return (
			<div className="relative mx-auto my-4 border border-border rounded-md overflow-hidden bg-muted/40">
				<pre
					className={cn(
						"px-4 py-3 font-mono text-xs sm:text-sm overflow-x-auto rounded-md",
						className,
					)}
					{...props}
				>
					{children}
				</pre>

				<CopyButton
					value={codeText}
					className="absolute top-2 right-2 cursor-pointer"
				/>
			</div>
		);
	},

	code: ({
		className,
		children,
		...props
	}: React.HTMLAttributes<HTMLElement>) => {
		const isInline = !String(className).includes("language-");

		if (!isInline) {
			return (
				<code className={cn("font-mono", className)} {...props}>
					{children}
				</code>
			);
		}

		return (
			<code
				className={cn(
					"px-1.5 py-0.5 rounded-sm border border-border font-mono text-xs bg-muted/40 text-foreground",
					className,
				)}
				{...props}
			>
				{children}
			</code>
		);
	},

	strong: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
		<strong
			className={cn("font-semibold text-foreground", className)}
			{...props}
		/>
	),
	em: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
		<em className={cn("italic", className)} {...props} />
	),
	LinkedCard: ({
		className,
		...props
	}: React.ComponentProps<typeof Link>) => (
		<Link
			className={cn(
				"flex w-full flex-col items-center rounded-md border border-border bg-background p-6 text-foreground transition-colors hover:bg-muted/40 sm:p-10",
				className,
			)}
			{...props}
		/>
	),
};

// Mdx component
interface MDXProps {
	code: string;
	className?: string;
}

export function Mdx({ code, className }: MDXProps) {
	const Component = useMDXComponent(code);

	return (
		<article className={cn("w-full mx-auto", className)}>
			<Component components={components as any} />
		</article>
	);
}

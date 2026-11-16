import React from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { CopyButton } from "./mdx/copy-button";
import { Installation } from "./mdx/installation";
import { AnatomyTabs } from "./mdx/anatomy-tabs";
import { CodeRenderer } from "./mdx/code-renderer";
import { ComponentPreview } from "./mdx/component-preview";
import { useMDXComponent } from "@content-collections/mdx/react";
import { ComponentSource } from "@/components/mdx/component-source";
import { ComponentCodePreview } from "@/components/mdx/component-code-preview";
import { PropsTable } from "@/components/mdx/props";

function extractText(node: React.ReactNode): string {
	if (typeof node === "string" || typeof node === "number") {
		return String(node);
	}
	if (Array.isArray(node)) {
		return node.map(extractText).join("");
	}
	if (React.isValidElement<{ children?: React.ReactNode }>(node)) {
		return extractText(node.props.children);
	}
	return "";
}

const CustomLink = ({
	href,
	children,
	...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
	if (!href) {
		return <a {...props}>{children}</a>;
	}

	if (href.startsWith("/")) {
		return (
			<Link href={href} {...props}>
				{children}
			</Link>
		);
	}

	if (href.startsWith("#")) {
		return (
			<a href={href} {...props}>
				{children}
			</a>
		);
	}

	return (
		<a href={href} target="_blank" rel="noopener noreferrer" {...props}>
			{children}
		</a>
	);
};

const components = {
	AnatomyTabs,
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
	h2: ({
		className,
		children,
		id,
		...props
	}: React.HTMLAttributes<HTMLHeadingElement>) => (
		<h2
			id={id}
			className={cn(
				"group mt-10 mb-4 scroll-m-20 border-b border-border pb-2.5 text-xl sm:text-2xl font-semibold tracking-tight text-foreground",
				className,
			)}
			{...props}
		>
			{id ? (
				<a
					href={`#${id}`}
					className="inline-flex items-center gap-2 no-underline"
				>
					{children}
					<span
						aria-hidden="true"
						className="text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100"
					>
						#
					</span>
				</a>
			) : (
				children
			)}
		</h2>
	),
	h3: ({
		className,
		children,
		id,
		...props
	}: React.HTMLAttributes<HTMLHeadingElement>) => (
		<h3
			id={id}
			className={cn(
				"group mt-8 mb-3 scroll-m-20 text-lg font-semibold tracking-tight text-foreground",
				className,
			)}
			{...props}
		>
			{id ? (
				<a
					href={`#${id}`}
					className="inline-flex items-center gap-2 no-underline"
				>
					{children}
					<span
						aria-hidden="true"
						className="text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100"
					>
						#
					</span>
				</a>
			) : (
				children
			)}
		</h3>
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

	a: ({
		className,
		...props
	}: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
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
				"my-6 border-l-2 border-foreground bg-muted/40 px-4 py-3 text-sm text-muted-foreground",
				className,
			)}
			{...props}
		/>
	),
	hr: ({ className, ...props }: React.HTMLAttributes<HTMLHRElement>) => (
		<hr className={cn("my-8 border-border", className)} {...props} />
	),
	img: ({
		className,
		alt,
		...props
	}: React.ImgHTMLAttributes<HTMLImageElement>) => (
		// biome-ignore lint/performance/noImgElement: Markdown images have dynamic/unknown dimensions
		<img
			className={cn("my-4 rounded-md border border-border", className)}
			alt={alt ?? ""}
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
	}: React.HTMLAttributes<HTMLPreElement>) => {
		const codeText = extractText(children).trim();

		return (
			<div className="relative my-4 border border-border rounded-md overflow-hidden bg-muted/40">
				<pre
					className={cn(
						"px-4 py-3 pr-12 font-mono text-xs sm:text-sm overflow-x-auto rounded-md [&_code]:border-0 [&_code]:bg-transparent [&_code]:p-0 [&_code]:rounded-none [&_code]:text-inherit",
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

type MDXComponentsMap = React.ComponentProps<
	ReturnType<typeof useMDXComponent>
>["components"];

export function Mdx({ code, className }: MDXProps) {
	const Component = useMDXComponent(code);

	return (
		<article className={cn("w-full mx-auto", className)}>
			<Component components={components as MDXComponentsMap} />
		</article>
	);
}

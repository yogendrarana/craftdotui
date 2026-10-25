"use client";

import * as React from "react";
import { Button } from "@craftdotui/baseui/components/button";

import { cn } from "@/lib/utils";
import { Registry } from "@/__registry__";
import { CodeRenderer } from "@/components/mdx/code-renderer";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
	name?: string;
	category?: string;
	code?: string;
	expandButtonTitle?: string;
	useCollapsible?: boolean;
	defaultExpanded?: boolean;
}

export function ComponentSource({
	expandButtonTitle = "Expand",
	className,
	name,
	code: directCode,
	useCollapsible = true,
	defaultExpanded = false,
}: Props) {
	const [isExpanded, setExpand] = React.useState(defaultExpanded);

	const codeToRender = React.useMemo(() => {
		if (directCode) {
			return directCode;
		}

		if (name && Registry[name]) {
			return Registry[name].files[0].content;
		}

		console.error(
			directCode
				? "No code provided."
				: `Component with name "${name}" not found in registry.`,
		);

		return null;
	}, [directCode, name]);

	const renderContent = () => {
		if (!codeToRender) {
			return (
				<p className="py-10 text-sm text-muted-foreground">
					Code for component{" "}
					<code className="relative rounded-sm bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
						{name || "unknown"}
					</code>{" "}
					not found.
				</p>
			);
		}

		return (
			<CodeRenderer
				code={codeToRender}
				isExpanded={isExpanded}
				onClick={() => setExpand(!isExpanded)}
				allowExpand
			/>
		);
	};

	if (!useCollapsible) {
		return (
			<div
				className={cn(
					"relative overflow-hidden rounded-md border border-border bg-muted/20",
					className,
				)}
			>
				{renderContent()}
			</div>
		);
	}

	return (
		<div
			className={cn(
				"h-full w-full relative overflow-hidden rounded-md border border-border bg-muted/20",
				className,
			)}
		>
			<div
				className={cn(
					"overflow-hidden transition-[max-height] duration-200 ease-in-out",
					!isExpanded && "max-h-96",
				)}
			>
				{renderContent()}
			</div>

			<div
				className={cn(
					" border-t border-border bg-muted/40 flex items-center justify-center backdrop-blur-xs",
				)}
			>
				<Button
					variant="ghost"
					onClick={() => setExpand(!isExpanded)}
					className="w-full py-2.5 h-auto cursor-pointer rounded-none text-xs font-medium hover:bg-muted"
				>
					{isExpanded ? "Collapse" : expandButtonTitle}
				</Button>
			</div>
		</div>
	);
}

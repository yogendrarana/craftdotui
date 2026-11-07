"use client";

import { cn } from "@/lib/utils";
import { CopyButton } from "./copy-button";
import {
	ScrollAreaContent,
	ScrollAreaCorner,
	ScrollAreaRoot,
	ScrollAreaScrollbar,
	ScrollAreaThumb,
	ScrollAreaViewport,
} from "@craftdotui/baseui/components/scroll-area";
import { Button } from "@craftdotui/baseui/components/button";

type CodeRendererProps = {
	code: string;
	className?: string;
	isExpanded?: boolean;
	allowExpand?: boolean;
	onClick?: () => void;
};

export function CodeRenderer({
	code,
	className,
	isExpanded,
	allowExpand = false,
	onClick,
}: CodeRendererProps) {
	return (
		<ScrollAreaRoot
			className={cn(
				"h-full w-full min-h-0 min-w-0 overflow-hidden relative",
				className,
			)}
		>
			<ScrollAreaViewport className="h-full w-full">
				<ScrollAreaContent className="min-w-full w-max">
					<pre className="p-4 font-mono text-xs leading-relaxed text-foreground">
						{code}
					</pre>
				</ScrollAreaContent>
			</ScrollAreaViewport>

			<ScrollAreaScrollbar orientation="vertical">
				<ScrollAreaThumb />
			</ScrollAreaScrollbar>
			<ScrollAreaScrollbar orientation="horizontal">
				<ScrollAreaThumb />
			</ScrollAreaScrollbar>

			<ScrollAreaCorner />

			<div
				className={cn(
					"absolute top-4 right-4 flex items-center gap-2 cursor-pointer",
				)}
			>
				{allowExpand && (
					<Button
						type="button"
						variant={"outline"}
						size={"xs"}
						className="rounded-md"
						onClick={() => onClick?.()}
					>
						{isExpanded ? "Collapse" : "Expand"}
					</Button>
				)}
				<CopyButton value={code} />
			</div>
		</ScrollAreaRoot>
	);
}

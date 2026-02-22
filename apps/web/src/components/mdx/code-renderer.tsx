"use client";

import { cn } from "@/lib/utils";
import { CopyButton } from "./copy-button";
import { Button } from "@craftdotui/baseui/components/button";
import {
	ScrollAreaContent,
	ScrollAreaCorner,
	ScrollAreaRoot,
	ScrollAreaScrollbar,
	ScrollAreaThumb,
	ScrollAreaViewport,
} from "@craftdotui/baseui/components/scroll-area";

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
				"h-full w-full overflow-hidden relative border-none",
				className,
			)}
		>
			<ScrollAreaViewport>
				<ScrollAreaContent>
					<pre className="p-6 text-xs">{code}</pre>
				</ScrollAreaContent>
			</ScrollAreaViewport>

			<ScrollAreaScrollbar>
				<ScrollAreaThumb />
			</ScrollAreaScrollbar>

			<ScrollAreaCorner />

			<div
				className={cn(
					"absolute top-4 right-4 flex items-center gap-2 cursor-pointer z-50",
				)}
			>
				{allowExpand && (
					<Button
						type="button"
						variant={"outline"}
						size={"xs"}
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

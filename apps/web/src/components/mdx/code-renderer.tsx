"use client";

import { cn } from "@/lib/utils";
import { CopyButton } from "./copy-button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
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
		<ScrollArea
			className={cn("h-full w-full overflow-hidden relative", className)}
		>
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
			<pre className="p-6 text-xs overflow-x-auto">{code}</pre>

			<ScrollBar orientation="horizontal" />
			<ScrollBar orientation="vertical" />
		</ScrollArea>
	);
}

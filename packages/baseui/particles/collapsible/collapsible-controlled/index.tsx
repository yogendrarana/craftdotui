"use client";

import { useState } from "react";
import { FolderGit2, Sparkles } from "lucide-react";
import {
	CollapsibleRoot,
	CollapsiblePanel,
	CollapsibleTrigger,
	CollapsibleIcon,
} from "@craftdotui/baseui/components/collapsible";
import { Button } from "@craftdotui/baseui/components/button";

export default function Particle() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="flex w-full items-center justify-center gap-3 p-4">
			<CollapsibleRoot
				open={isOpen}
				onOpenChange={setIsOpen}
				className="w-full max-w-sm"
			>
				<CollapsibleTrigger className="border rounded-md px-2 py-0.5">
					<span className="flex items-center gap-2">
						<FolderGit2 className="size-4 text-muted-foreground" />
						<span>Repository Branches</span>
					</span>
					<CollapsibleIcon />
				</CollapsibleTrigger>
				<CollapsiblePanel>
					<div className="pt-2">
						<div className="flex flex-col gap-1 rounded-md border border-border/60 bg-muted/30 p-2.5 text-xs">
							<div className="flex items-center justify-between rounded px-2 py-1.5 hover:bg-muted/60">
								<span className="font-medium text-foreground">
									main
								</span>
								<span className="text-[11px] text-muted-foreground">
									Default
								</span>
							</div>
							<div className="flex items-center justify-between rounded px-2 py-1.5 hover:bg-muted/60">
								<span className="font-medium text-foreground">
									feature/collapsible-baseui
								</span>
								<span className="flex items-center gap-1 text-[11px] text-primary">
									<Sparkles className="size-3" /> Active
								</span>
							</div>
							<div className="flex items-center justify-between rounded px-2 py-1.5 hover:bg-muted/60">
								<span className="font-medium text-foreground">
									v0.1-release
								</span>
								<span className="text-[11px] text-muted-foreground">
									Updated 2d ago
								</span>
							</div>
						</div>
					</div>
				</CollapsiblePanel>
			</CollapsibleRoot>

			<Button
				onClick={() => setIsOpen((prev) => !prev)}
				variant="secondary"
				className="border"
			>
				Click
			</Button>
		</div>
	);
}

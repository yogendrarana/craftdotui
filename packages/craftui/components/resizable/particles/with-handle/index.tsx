"use client";

import {
	ResizableHandle,
	ResizablePanel,
	ResizablePanelGroup,
} from "@craftdotui/craftui/components/resizable";

export default function Particle() {
	return (
		<div className="h-[240px] w-full max-w-lg">
			<ResizablePanelGroup
				orientation="horizontal"
				className="overflow-hidden rounded-lg border border-border bg-card shadow-xs"
			>
				<ResizablePanel defaultSize="32%" minSize="20%">
					<div className="flex h-full items-center justify-center bg-muted/30 p-6">
						<span className="text-sm font-medium text-foreground">
							Sidebar
						</span>
					</div>
				</ResizablePanel>
				<ResizableHandle withHandle />
				<ResizablePanel defaultSize="68%" minSize="25%">
					<div className="flex h-full items-center justify-center p-6">
						<span className="text-sm font-medium text-foreground">
							Content
						</span>
					</div>
				</ResizablePanel>
			</ResizablePanelGroup>
		</div>
	);
}

"use client";

import * as React from "react";
import { PanelLeftCloseIcon, PanelLeftOpenIcon } from "lucide-react";
import {
	ResizableHandle,
	ResizablePanel,
	ResizablePanelGroup,
	usePanelRef,
} from "@craftdotui/craftui/components/resizable";
import { Button } from "@craftdotui/baseui/components/button";

export default function Particle() {
	const sidebarRef = usePanelRef();
	const [isCollapsed, setIsCollapsed] = React.useState(false);

	const toggleSidebar = () => {
		const panel = sidebarRef.current;
		if (!panel) return;
		if (panel.isCollapsed()) {
			panel.expand();
		} else {
			panel.collapse();
		}
	};

	return (
		<div className="flex h-[260px] w-full max-w-lg flex-col overflow-hidden rounded-lg border border-border bg-card shadow-xs">
			<div className="flex items-center justify-between border-b border-border bg-muted/30 px-3 py-2">
				<Button variant="outline" size="xs" onClick={toggleSidebar}>
					{isCollapsed ? (
						<>
							<PanelLeftOpenIcon className="size-3.5" />
							<span>Expand</span>
						</>
					) : (
						<>
							<PanelLeftCloseIcon className="size-3.5" />
							<span>Collapse</span>
						</>
					)}
				</Button>
			</div>
			<ResizablePanelGroup
				orientation="horizontal"
				className="min-h-0 flex-1"
			>
				<ResizablePanel
					panelRef={sidebarRef}
					collapsible
					collapsedSize="0%"
					minSize="22%"
					defaultSize="32%"
					onResize={(size) => setIsCollapsed(size.asPercentage === 0)}
				>
					<div className="flex h-full items-center justify-center overflow-hidden bg-muted/30 p-4">
						<span className="whitespace-nowrap text-sm font-medium text-foreground">
							Sidebar
						</span>
					</div>
				</ResizablePanel>
				<ResizableHandle withHandle />
				<ResizablePanel defaultSize="68%" minSize="30%">
					<div className="flex h-full items-center justify-center p-4">
						<span className="text-sm font-medium text-foreground">
							Content
						</span>
					</div>
				</ResizablePanel>
			</ResizablePanelGroup>
		</div>
	);
}

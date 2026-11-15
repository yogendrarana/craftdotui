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
				<ResizablePanel defaultSize="45%">
					<div className="flex h-full items-center justify-center overflow-hidden bg-muted/30 p-6">
						<span className="whitespace-nowrap text-sm font-medium text-foreground">
							One
						</span>
					</div>
				</ResizablePanel>
				<ResizableHandle withHandle />
				<ResizablePanel defaultSize="55%">
					<ResizablePanelGroup orientation="vertical">
						<ResizablePanel defaultSize="35%">
							<div className="flex h-full items-center justify-center overflow-hidden bg-muted/15 p-6">
								<span className="whitespace-nowrap text-sm font-medium text-foreground">
									Two
								</span>
							</div>
						</ResizablePanel>
						<ResizableHandle withHandle />
						<ResizablePanel defaultSize="65%">
							<div className="flex h-full items-center justify-center overflow-hidden p-6">
								<span className="whitespace-nowrap text-sm font-medium text-foreground">
									Three
								</span>
							</div>
						</ResizablePanel>
					</ResizablePanelGroup>
				</ResizablePanel>
			</ResizablePanelGroup>
		</div>
	);
}

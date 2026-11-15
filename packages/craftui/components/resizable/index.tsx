"use client";

import type * as React from "react";
import {
	Group,
	type GroupImperativeHandle,
	type GroupProps,
	type Layout,
	Panel,
	type PanelImperativeHandle,
	type PanelProps,
	type PanelSize,
	Separator,
	type SeparatorProps,
	useDefaultLayout,
	useGroupRef,
	usePanelRef,
	useParentGroup,
	useParentPanel,
} from "react-resizable-panels";
import { GripVerticalIcon } from "lucide-react";
import { cn } from "cn";

/* -------------------------------------------------------------------------- */
/* Resizable Panel Group                                                      */
/* -------------------------------------------------------------------------- */

export interface ResizablePanelGroupProps extends GroupProps {
	/**
	 * Alias for `orientation` ("horizontal" | "vertical").
	 */
	direction?: "horizontal" | "vertical";
}

function ResizablePanelGroup({
	className,
	orientation,
	direction,
	...props
}: ResizablePanelGroupProps): React.ReactElement {
	const resolvedOrientation = orientation ?? direction ?? "horizontal";

	return (
		<Group
			data-slot="resizable-panel-group"
			data-orientation={resolvedOrientation}
			orientation={resolvedOrientation}
			className={cn(
				"group/panel-group flex h-full w-full data-[orientation=vertical]:flex-col",
				className,
			)}
			{...props}
		/>
	);
}

/* -------------------------------------------------------------------------- */
/* Resizable Panel                                                            */
/* -------------------------------------------------------------------------- */

export interface ResizablePanelProps extends PanelProps {}

function ResizablePanel({
	className,
	...props
}: ResizablePanelProps): React.ReactElement {
	return (
		<Panel
			data-slot="resizable-panel"
			className={cn(
				"min-h-0 min-w-0 transition-[flex-grow] duration-150 ease-out group-has-[[data-separator=active]]/panel-group:transition-none",
				className,
			)}
			{...props}
		/>
	);
}

/* -------------------------------------------------------------------------- */
/* Resizable Handle                                                           */
/* -------------------------------------------------------------------------- */

export interface ResizableHandleProps extends SeparatorProps {
	withHandle?: boolean;
}

function ResizableHandle({
	withHandle = false,
	className,
	children,
	...props
}: ResizableHandleProps): React.ReactElement {
	return (
		<Separator
			aria-label="Resize"
			data-slot="resizable-handle"
			className={cn(
				"group/handle relative flex w-px shrink-0 cursor-col-resize items-center justify-center bg-border ring-offset-background transition-colors select-none",
				"after:absolute after:inset-y-0 after:left-1/2 after:w-2 after:-translate-x-1/2",
				"data-[separator=active]:bg-ring",
				"focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1",
				"aria-[orientation=horizontal]:h-px aria-[orientation=horizontal]:w-full aria-[orientation=horizontal]:cursor-row-resize",
				"aria-[orientation=horizontal]:after:inset-y-auto aria-[orientation=horizontal]:after:top-1/2 aria-[orientation=horizontal]:after:left-0 aria-[orientation=horizontal]:after:h-2 aria-[orientation=horizontal]:after:w-full aria-[orientation=horizontal]:after:translate-x-0 aria-[orientation=horizontal]:after:-translate-y-1/2",
				"aria-disabled:pointer-events-none aria-disabled:cursor-default aria-disabled:opacity-50",
				"[&[aria-orientation=horizontal]>div]:rotate-90",
				className,
			)}
			{...props}
		>
			{children ??
				(withHandle && (
					<div
						data-slot="resizable-handle-grip"
						className={cn(
							"z-10 flex h-5 w-3.5 items-center justify-center rounded-sm border border-border bg-background text-muted-foreground shadow-xs transition-colors",
							"group-hover/handle:text-foreground",
							"group-data-[separator=active]/handle:border-ring group-data-[separator=active]/handle:text-foreground",
						)}
					>
						<GripVerticalIcon
							aria-hidden="true"
							className="size-2.5"
						/>
					</div>
				))}
		</Separator>
	);
}

/* -------------------------------------------------------------------------- */
/* Exports                                                                    */
/* -------------------------------------------------------------------------- */

export const Resizable = Object.assign(ResizablePanelGroup, {
	Root: ResizablePanelGroup,
	PanelGroup: ResizablePanelGroup,
	Panel: ResizablePanel,
	Handle: ResizableHandle,
});

export {
	ResizablePanelGroup,
	ResizablePanel,
	ResizableHandle,
	usePanelRef,
	useGroupRef,
	useDefaultLayout,
	useParentGroup,
	useParentPanel,
	type GroupImperativeHandle,
	type PanelImperativeHandle,
	type PanelSize,
	type Layout,
};

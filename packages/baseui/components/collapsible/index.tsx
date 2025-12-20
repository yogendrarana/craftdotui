"use client";

import { ChevronRight } from "lucide-react";
import { Collapsible as CollapsiblePrimitive } from "@base-ui/react/collapsible";
import { cn } from "@craftdotui/lib/utils";

/* -------------------------------------------------------------------------- */
/* Collapsible Root                                                           */
/* -------------------------------------------------------------------------- */

function Collapsible({
	className,
	children,
	...props
}: CollapsiblePrimitive.Root.Props) {
	return (
		<CollapsiblePrimitive.Root
			className={cn("w-48 flex flex-col gap-2", className)}
			data-slot="collapsible-root"
			{...props}
		>
			{children}
		</CollapsiblePrimitive.Root>
	);
}

/* -------------------------------------------------------------------------- */
/* Collapsible Trigger                                                        */
/* -------------------------------------------------------------------------- */

function CollapsibleTrigger({
	className,
	children,
	...props
}: CollapsiblePrimitive.Trigger.Props) {
	return (
		<CollapsiblePrimitive.Trigger
			className={cn(
				"group px-3 py-2 flex items-center justify-between cursor-pointer rounded-md font-medium text-sm bg-muted",
				"hover:bg-muted/80 transition-colors",
				className,
			)}
			data-slot="collapsible-trigger"
			{...props}
		>
			{children}
			<ChevronRight className="size-4 transition-transform duration-200 group-data-panel-open:rotate-90" />
		</CollapsiblePrimitive.Trigger>
	);
}

/* -------------------------------------------------------------------------- */
/* Collapsible Panel                                                          */
/* -------------------------------------------------------------------------- */

function CollapsiblePanel({
	className,
	children,
	hiddenUntilFound = false,
	keepMounted = false,
	...props
}: CollapsiblePrimitive.Panel.Props) {
	return (
		<CollapsiblePrimitive.Panel
			hiddenUntilFound={hiddenUntilFound}
			keepMounted={keepMounted}
			className={cn(
				"w-full overflow-hidden text-sm transition-[height] duration-200 ease-in-out",
				"data-starting-style:h-0 data-ending-style:h-0 data-closed:h-0 data-open:h-auto",
				className,
			)}
			data-slot="collapsible-panel"
			{...props}
		>
			{children}
		</CollapsiblePrimitive.Panel>
	);
}

/* -------------------------------------------------------------------------- */
/* Export                                                                     */
/* -------------------------------------------------------------------------- */

export { Collapsible, CollapsibleTrigger, CollapsiblePanel };

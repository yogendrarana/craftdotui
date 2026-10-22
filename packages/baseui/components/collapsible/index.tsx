"use client";

import type React from "react";
import { ChevronRight } from "lucide-react";
import { Collapsible as CollapsiblePrimitive } from "@base-ui/react/collapsible";
import { cn } from "cn";

/* -------------------------------------------------------------------------- */
/* Collapsible Root                                                           */
/* -------------------------------------------------------------------------- */

type CollapsibleRootProps = CollapsiblePrimitive.Root.Props;

function CollapsibleRoot({ className, ...props }: CollapsibleRootProps) {
	return (
		<CollapsiblePrimitive.Root
			data-slot="collapsible-root"
			className={cn("flex w-full flex-col", className)}
			{...props}
		/>
	);
}

/* -------------------------------------------------------------------------- */
/* Collapsible Icon                                                           */
/* -------------------------------------------------------------------------- */

interface CollapsibleIconProps extends React.ComponentProps<"span"> {
	children?: React.ReactNode;
}

function CollapsibleIcon({
	className,
	children,
	...props
}: CollapsibleIconProps) {
	return (
		<span
			data-slot="collapsible-icon"
			className={cn(
				"size-4 shrink-0 inline-flex items-center justify-center pointer-events-none transition-transform duration-200 ease-out [&>svg]:size-full",
				"[[data-panel-open]_&]:rotate-90 group-data-panel-open:rotate-90 group-data-[panel-open]:rotate-90",
				className,
			)}
			{...props}
		>
			{children ?? <ChevronRight className="size-full" />}
		</span>
	);
}

/* -------------------------------------------------------------------------- */
/* Collapsible Trigger                                                        */
/* -------------------------------------------------------------------------- */

type CollapsibleTriggerProps = CollapsiblePrimitive.Trigger.Props;

function CollapsibleTrigger({
	className,
	children,
	...props
}: CollapsibleTriggerProps) {
	return (
		<CollapsiblePrimitive.Trigger
			data-slot="collapsible-trigger"
			className={cn(
				"group flex items-center justify-between gap-2 cursor-pointer",
				className,
			)}
			{...props}
		>
			{children}
		</CollapsiblePrimitive.Trigger>
	);
}

/* -------------------------------------------------------------------------- */
/* Collapsible Panel                                                          */
/* -------------------------------------------------------------------------- */

interface CollapsiblePanelProps extends CollapsiblePrimitive.Panel.Props {
	/**
	 * The orientation of the collapsible transition.
	 * @default "vertical"
	 */
	orientation?: "vertical" | "horizontal";
}

function CollapsiblePanel({
	className,
	children,
	orientation = "vertical",
	...props
}: CollapsiblePanelProps) {
	return (
		<CollapsiblePrimitive.Panel
			data-slot="collapsible-panel"
			className={cn(
				"overflow-hidden [&[hidden]:not([hidden='until-found'])]:hidden",
				orientation === "vertical" && [
					"h-[var(--collapsible-panel-height)] flex flex-col justify-end text-sm transition-[height] duration-150 ease-[ease-out]",
					"data-starting-style:h-0 data-ending-style:h-0",
				],
				orientation === "horizontal" && [
					"w-[var(--collapsible-panel-width)] flex justify-end text-sm transition-[width] duration-150 ease-[ease-out]",
					"data-starting-style:w-0 data-ending-style:w-0",
				],
				className,
			)}
			{...props}
		>
			{children}
		</CollapsiblePrimitive.Panel>
	);
}

/* -------------------------------------------------------------------------- */
/* Exports                                                                    */
/* -------------------------------------------------------------------------- */

export const Collapsible = {
	Root: CollapsibleRoot,
	Trigger: CollapsibleTrigger,
	Panel: CollapsiblePanel,
	Icon: CollapsibleIcon,
};

export {
	CollapsibleRoot,
	CollapsibleTrigger,
	CollapsiblePanel,
	CollapsibleIcon,
	type CollapsibleRootProps,
	type CollapsibleTriggerProps,
	type CollapsiblePanelProps,
	type CollapsibleIconProps,
};

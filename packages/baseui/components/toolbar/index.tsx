"use client";

import { Toolbar as ToolbarPrimitive } from "@base-ui/react/toolbar";

import { cn } from "@craftdotui/lib/utils";
import {
	buttonVariants,
	type ButtonProps,
} from "@craftdotui/baseui/components/button";

/* -------------------------------------------------------------------------- */
/* Toolbar Root                                                               */
/* -------------------------------------------------------------------------- */

function ToolbarRoot({ className, ...props }: ToolbarPrimitive.Root.Props) {
	return (
		<ToolbarPrimitive.Root
			data-slot="toolbar-root"
			className={cn(
				"p-1 bg-popover border border-border flex items-center gap-2 rounded-md",
				className,
			)}
			{...props}
		/>
	);
}

/* -------------------------------------------------------------------------- */
/* Toolbar Button                                                             */
/* -------------------------------------------------------------------------- */

function ToolbarButton({
	className,
	variant = "ghost",
	size = "sm",
	...props
}: ToolbarPrimitive.Button.Props & ButtonProps) {
	return (
		<ToolbarPrimitive.Button
			data-slot="toolbar-button"
			className={cn(
				buttonVariants({ variant, size }),
				"shrink-0",
				className,
			)}
			{...props}
		/>
	);
}

/* -------------------------------------------------------------------------- */
/* Toolbar Link                                                               */
/* -------------------------------------------------------------------------- */

function ToolbarLink({ className, ...props }: ToolbarPrimitive.Link.Props) {
	return (
		<ToolbarPrimitive.Link
			data-slot="toolbar-link"
			className={cn(
				"inline-flex items-center justify-center",
				"text-muted-foreground no-underline",
				"hover:text-foreground",
				"focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-primary",
				className,
			)}
			{...props}
		/>
	);
}

/* -------------------------------------------------------------------------- */
/* Toolbar Separator                                                          */
/* -------------------------------------------------------------------------- */

function ToolbarSeparator({
	className,
	...props
}: ToolbarPrimitive.Separator.Props) {
	return (
		<ToolbarPrimitive.Separator
			data-slot="toolbar-separator"
			className={cn("h-5 w-px mx-1 bg-border shrink-0", className)}
			{...props}
		/>
	);
}

/* -------------------------------------------------------------------------- */
/* Toolbar Group                                                              */
/* -------------------------------------------------------------------------- */

function ToolbarGroup({ className, ...props }: ToolbarPrimitive.Group.Props) {
	return (
		<ToolbarPrimitive.Group
			data-slot="toolbar-group"
			className={cn("flex items-center gap-1", className)}
			{...props}
		/>
	);
}

/* -------------------------------------------------------------------------- */
/* Toolbar Input                                                              */
/* -------------------------------------------------------------------------- */

function ToolbarInput(props: ToolbarPrimitive.Input.Props) {
	return <ToolbarPrimitive.Input data-slot="toolbar-input" {...props} />;
}

/* -------------------------------------------------------------------------- */
/* Exports                                                                    */
/* -------------------------------------------------------------------------- */

export {
	ToolbarRoot,
	ToolbarButton,
	ToolbarLink,
	ToolbarSeparator,
	ToolbarGroup,
	ToolbarInput,
	ToolbarPrimitive,
};

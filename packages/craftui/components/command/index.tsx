"use client";

import type * as React from "react";
import { Command as CommandPrimitive } from "cmdk";
import { SearchIcon } from "lucide-react";
import { cn } from "cn";
import { useRender } from "@base-ui/react/use-render";
import { mergeProps } from "@base-ui/react/merge-props";
import {
	DialogBackdrop,
	DialogDescription,
	DialogPopup,
	DialogPortal,
	DialogRoot,
	DialogTitle,
	DialogViewport,
} from "@craftdotui/baseui/components/dialog";
import {
	inputVariants,
	type InputVariants,
} from "@craftdotui/baseui/components/input";

/* -------------------------------------------------------------------------- */
/* Command Root                                                               */
/* -------------------------------------------------------------------------- */

export interface CommandRootProps
	extends React.ComponentProps<typeof CommandPrimitive> {}

function CommandRoot({
	className,
	...props
}: CommandRootProps): React.ReactElement {
	return (
		<CommandPrimitive
			data-slot="command"
			className={cn(
				"bg-popover text-popover-foreground flex h-full w-full flex-col overflow-hidden rounded-lg",
				className,
			)}
			{...props}
		/>
	);
}

/* -------------------------------------------------------------------------- */
/* Command Dialog                                                             */
/* -------------------------------------------------------------------------- */

export interface CommandDialogProps
	extends Omit<React.ComponentProps<typeof DialogRoot>, "children"> {
	title?: string;
	description?: string;
	className?: string;
	children?: React.ReactNode;
	commandProps?: CommandRootProps;
}

function CommandDialog({
	title = "Command Palette",
	description = "Search for a command to run...",
	children,
	className,
	commandProps,
	...props
}: CommandDialogProps): React.ReactElement {
	return (
		<DialogRoot {...props}>
			<DialogPortal>
				<DialogBackdrop />
				<DialogViewport>
					<DialogPopup
						data-slot="command-dialog-popup"
						className={cn(
							"overflow-hidden p-0 shadow-xl sm:max-w-lg",
							className,
						)}
					>
						<DialogTitle className="sr-only">{title}</DialogTitle>
						<DialogDescription className="sr-only">
							{description}
						</DialogDescription>
						<CommandRoot
							className={cn(
								"**:[[cmdk-group-heading]]:text-muted-foreground",
								"**:[[cmdk-group-heading]]:px-2 **:[[cmdk-group-heading]]:font-medium",
								"**:[[cmdk-group]]:px-2 [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0",
								"[&_[cmdk-input-wrapper]_svg]:size-4",
								"**:[[cmdk-item]]:px-2 **:[[cmdk-item]]:py-2",
								commandProps?.className,
							)}
							{...commandProps}
						>
							{children}
						</CommandRoot>
					</DialogPopup>
				</DialogViewport>
			</DialogPortal>
		</DialogRoot>
	);
}

/* -------------------------------------------------------------------------- */
/* Command Input                                                              */
/* -------------------------------------------------------------------------- */

export interface CommandInputProps
	extends Omit<React.ComponentProps<typeof CommandPrimitive.Input>, "size">,
		InputVariants {
	inputClassName?: string;
}

function CommandInput({
	className,
	inputClassName,
	variant = "ghost",
	size = "md",
	...props
}: CommandInputProps): React.ReactElement {
	return (
		<div
			data-slot="command-input-wrapper"
			className={cn(
				"relative flex items-center border-b border-border",
				className,
			)}
		>
			<SearchIcon className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground opacity-60" />
			<CommandPrimitive.Input
				data-slot="command-input"
				className={cn(
					inputVariants({ variant, size }),
					"rounded-none border-0 shadow-none pl-9 focus:outline-none focus-visible:ring-0",
					inputClassName,
				)}
				{...props}
			/>
		</div>
	);
}

/* -------------------------------------------------------------------------- */
/* Command List                                                               */
/* -------------------------------------------------------------------------- */

export interface CommandListProps
	extends React.ComponentProps<typeof CommandPrimitive.List> {}

function CommandList({
	className,
	...props
}: CommandListProps): React.ReactElement {
	return (
		<CommandPrimitive.List
			data-slot="command-list"
			className={cn(
				"max-h-75 scroll-py-1 overflow-x-hidden overflow-y-auto",
				className,
			)}
			{...props}
		/>
	);
}

/* -------------------------------------------------------------------------- */
/* Command Empty                                                              */
/* -------------------------------------------------------------------------- */

export interface CommandEmptyProps
	extends React.ComponentProps<typeof CommandPrimitive.Empty> {}

function CommandEmpty({
	className,
	...props
}: CommandEmptyProps): React.ReactElement {
	return (
		<CommandPrimitive.Empty
			data-slot="command-empty"
			className={cn(
				"py-6 text-center text-sm text-muted-foreground",
				className,
			)}
			{...props}
		/>
	);
}

/* -------------------------------------------------------------------------- */
/* Command Group                                                              */
/* -------------------------------------------------------------------------- */

export interface CommandGroupProps
	extends React.ComponentProps<typeof CommandPrimitive.Group> {}

function CommandGroup({
	className,
	...props
}: CommandGroupProps): React.ReactElement {
	return (
		<CommandPrimitive.Group
			data-slot="command-group"
			className={cn(
				"text-foreground **:[[cmdk-group-heading]]:text-muted-foreground overflow-hidden p-1",
				"**:[[cmdk-group-heading]]:px-2 **:[[cmdk-group-heading]]:py-1.5 **:[[cmdk-group-heading]]:text-xs **:[[cmdk-group-heading]]:font-medium",
				className,
			)}
			{...props}
		/>
	);
}

/* -------------------------------------------------------------------------- */
/* Command Separator                                                          */
/* -------------------------------------------------------------------------- */

export interface CommandSeparatorProps
	extends React.ComponentProps<typeof CommandPrimitive.Separator> {}

function CommandSeparator({
	className,
	...props
}: CommandSeparatorProps): React.ReactElement {
	return (
		<CommandPrimitive.Separator
			data-slot="command-separator"
			className={cn("bg-border -mx-1 h-px", className)}
			{...props}
		/>
	);
}

/* -------------------------------------------------------------------------- */
/* Command Item                                                               */
/* -------------------------------------------------------------------------- */

export interface CommandItemProps
	extends React.ComponentProps<typeof CommandPrimitive.Item> {}

function CommandItem({
	className,
	...props
}: CommandItemProps): React.ReactElement {
	return (
		<CommandPrimitive.Item
			data-slot="command-item"
			className={cn(
				"relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none",
				"data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground",
				"data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50",
				"[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
				"[&_svg:not([class*='text-'])]:text-muted-foreground",
				className,
			)}
			{...props}
		/>
	);
}

/* -------------------------------------------------------------------------- */
/* Command Shortcut                                                           */
/* -------------------------------------------------------------------------- */

export interface CommandShortcutProps
	extends useRender.ComponentProps<"span"> {}

function CommandShortcut({
	className,
	render,
	...props
}: CommandShortcutProps): React.ReactElement {
	const defaultProps = {
		"data-slot": "command-shortcut",
		className: cn(
			"text-muted-foreground ml-auto flex items-center gap-1 text-xs tracking-widest",
			className,
		),
	};

	return useRender({
		defaultTagName: "span",
		props: mergeProps<"span">(defaultProps, props),
		render,
	});
}

/* -------------------------------------------------------------------------- */
/* Command Footer                                                             */
/* -------------------------------------------------------------------------- */

export interface CommandFooterProps extends useRender.ComponentProps<"div"> {}

function CommandFooter({
	className,
	render,
	...props
}: CommandFooterProps): React.ReactElement {
	const defaultProps = {
		"data-slot": "command-footer",
		className: cn(
			"flex items-center justify-between gap-4 border-t border-border bg-muted/50 px-3 py-2 text-xs text-muted-foreground",
			className,
		),
	};

	return useRender({
		defaultTagName: "div",
		props: mergeProps<"div">(defaultProps, props),
		render,
	});
}

/* -------------------------------------------------------------------------- */
/* Exports                                                                    */
/* -------------------------------------------------------------------------- */

export const Command = Object.assign(CommandRoot, {
	Root: CommandRoot,
	Dialog: CommandDialog,
	Input: CommandInput,
	List: CommandList,
	Empty: CommandEmpty,
	Group: CommandGroup,
	Item: CommandItem,
	Shortcut: CommandShortcut,
	Separator: CommandSeparator,
	Footer: CommandFooter,
});

export {
	CommandRoot,
	CommandDialog,
	CommandInput,
	CommandList,
	CommandEmpty,
	CommandGroup,
	CommandItem,
	CommandShortcut,
	CommandSeparator,
	CommandFooter,
};

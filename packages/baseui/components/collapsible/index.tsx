"use client";

import * as React from "react";
import { ChevronRight } from "lucide-react";
import { Collapsible as CollapsiblePrimitive } from "@base-ui/react/collapsible";
import { cva, type VariantProps } from "class-variance-authority";
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

interface CollapsibleIconProps extends React.ComponentProps<"svg"> {
	children?: React.ReactNode;
}

function CollapsibleIcon({
	className,
	children,
	...props
}: CollapsibleIconProps) {
	const iconClassName = cn(
		"size-4 shrink-0 pointer-events-none transition-transform duration-200 ease-out",
		"group-data-[panel-open]:rotate-90 group-data-panel-open:rotate-90 data-[panel-open]:rotate-90",
		className,
	);

	if (children) {
		if (React.isValidElement(children)) {
			return React.cloneElement(
				children as React.ReactElement<
					React.ComponentProps<"svg"> & { "data-slot"?: string }
				>,
				{
					"data-slot": "collapsible-icon",
					className: cn(
						iconClassName,
						(children.props as { className?: string })?.className,
					),
				},
			);
		}

		return (
			<span
				data-slot="collapsible-icon"
				className={iconClassName}
				{...(props as React.ComponentProps<"span">)}
			>
				{children}
			</span>
		);
	}

	return (
		<ChevronRight
			data-slot="collapsible-icon"
			className={iconClassName}
			{...props}
		/>
	);
}

/* -------------------------------------------------------------------------- */
/* Collapsible Trigger                                                        */
/* -------------------------------------------------------------------------- */

const collapsibleTriggerVariants = cva(
	[
		"group relative flex w-full items-center justify-between gap-2 rounded-md font-medium text-sm outline-none transition-colors select-none cursor-pointer",
		"focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
		"disabled:pointer-events-none disabled:opacity-50 data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
		"[&[data-panel-open]_[data-slot=collapsible-icon]]:rotate-90",
	],
	{
		variants: {
			variant: {
				default: "bg-muted text-foreground hover:bg-muted/80",
				secondary:
					"bg-secondary text-secondary-foreground hover:bg-secondary/90",
				outline:
					"border border-border bg-background text-foreground hover:bg-accent hover:text-accent-foreground",
				ghost: "bg-transparent text-foreground hover:bg-muted",
			},
			size: {
				sm: "h-8 px-2.5 text-xs",
				default: "h-9 px-3 text-sm",
				lg: "h-10 px-4 text-sm",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
		},
	},
);

interface CollapsibleTriggerProps
	extends CollapsiblePrimitive.Trigger.Props,
		VariantProps<typeof collapsibleTriggerVariants> {
	/**
	 * Whether to automatically display the collapsible icon.
	 * Set to `false` if providing your own icon or omitting it.
	 * @default true
	 */
	showCollapsibleIcon?: boolean;
}

function CollapsibleTrigger({
	className,
	children,
	variant,
	size,
	showCollapsibleIcon = true,
	...props
}: CollapsibleTriggerProps) {
	const hasCustomIcon = React.Children.toArray(children).some(
		(child) =>
			React.isValidElement(child) &&
			(child.type === CollapsibleIcon ||
				(child.props as { "data-slot"?: string })?.["data-slot"] ===
					"collapsible-icon"),
	);

	return (
		<CollapsiblePrimitive.Trigger
			data-slot="collapsible-trigger"
			className={cn(
				collapsibleTriggerVariants({ variant, size }),
				className,
			)}
			{...props}
		>
			{children}
			{showCollapsibleIcon && !hasCustomIcon && <CollapsibleIcon />}
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
	collapsibleTriggerVariants,
	type CollapsibleRootProps,
	type CollapsibleTriggerProps,
	type CollapsiblePanelProps,
	type CollapsibleIconProps,
};

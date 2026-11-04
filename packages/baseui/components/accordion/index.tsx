"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import { Accordion as AccordionPrimitive } from "@base-ui/react/accordion";

import { cn } from "cn";

/* -------------------------------------------------------------------------- */
/* Accordion Root                                                             */
/* -------------------------------------------------------------------------- */

type AccordionRootProps = AccordionPrimitive.Root.Props;

function AccordionRoot({ className, ...props }: AccordionRootProps) {
	return (
		<AccordionPrimitive.Root
			data-slot="accordion"
			className={cn("flex w-full flex-col", className)}
			{...props}
		/>
	);
}

/* -------------------------------------------------------------------------- */
/* Accordion Item                                                             */
/* -------------------------------------------------------------------------- */

type AccordionItemProps = AccordionPrimitive.Item.Props;

function AccordionItem({ className, ...props }: AccordionItemProps) {
	return (
		<AccordionPrimitive.Item
			data-slot="accordion-item"
			className={cn("not-last:border-b", className)}
			{...props}
		/>
	);
}

/* -------------------------------------------------------------------------- */
/* Accordion Icon                                                             */
/* -------------------------------------------------------------------------- */

interface AccordionIconProps extends React.ComponentProps<"svg"> {
	children?: React.ReactNode;
}

function AccordionIcon({ className, children, ...props }: AccordionIconProps) {
	const iconClassName = cn(
		"ml-auto size-4 shrink-0 pointer-events-none text-muted-foreground transition-transform duration-200 ease-out",
		"group-data-[panel-open]:rotate-180 group-data-panel-open:rotate-180 data-[panel-open]:rotate-180",
		className,
	);

	if (children) {
		if (React.isValidElement(children)) {
			return React.cloneElement(
				children as React.ReactElement<
					React.ComponentProps<"svg"> & { "data-slot"?: string }
				>,
				{
					"data-slot": "accordion-trigger-icon",
					className: cn(
						iconClassName,
						(children.props as { className?: string })?.className,
					),
				},
			);
		}

		return (
			<span
				data-slot="accordion-trigger-icon"
				className={iconClassName}
				{...(props as React.ComponentProps<"span">)}
			>
				{children}
			</span>
		);
	}

	return (
		<ChevronDown
			data-slot="accordion-trigger-icon"
			className={iconClassName}
			{...props}
		/>
	);
}

/* -------------------------------------------------------------------------- */
/* Accordion Header                                                          */
/* -------------------------------------------------------------------------- */
function AccordionHeader(props: AccordionPrimitive.Header.Props) {
	const { className, ...rest } = props;

	return (
		<AccordionPrimitive.Header
			className={cn("w-full", className)}
			data-slot="accordion-header"
			{...rest}
		/>
	);
}
/* -------------------------------------------------------------------------- */
/* Accordion Trigger                                                          */
/* -------------------------------------------------------------------------- */

interface AccordionTriggerProps extends AccordionPrimitive.Trigger.Props {
	/**
	 * Whether to automatically display the accordion trigger icon.
	 * Set to `false` if providing your own icon or omitting it.
	 * @default true
	 */
	showAccordionIcon?: boolean;
}

function AccordionTrigger({
	className,
	children,
	showAccordionIcon = true,
	...props
}: AccordionTriggerProps) {
	const hasCustomIcon = React.Children.toArray(children).some(
		(child) =>
			React.isValidElement(child) &&
			(child.type === AccordionIcon ||
				(child.props as { "data-slot"?: string })?.["data-slot"] ===
					"accordion-trigger-icon"),
	);

	return (
		<AccordionPrimitive.Trigger
			data-slot="accordion-trigger"
			className={cn(
				"group relative w-full flex flex-1 items-center justify-between gap-2 py-3 rounded-md border border-transparent text-left text-sm font-medium transition-all outline-none select-none cursor-pointer",
				"hover:underline hover:cursor-pointer disabled:pointer-events-none disabled:opacity-50 data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
				"focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:border-ring focus-visible:after:border-ring",
				"[&[data-panel-open]_[data-slot=accordion-trigger-icon]]:rotate-180",
				className,
			)}
			{...props}
		>
			{children}
			{showAccordionIcon && !hasCustomIcon && <AccordionIcon />}
		</AccordionPrimitive.Trigger>
	);
}

/* -------------------------------------------------------------------------- */
/* Accordion Panel                                                            */
/* -------------------------------------------------------------------------- */

interface AccordionPanelProps extends AccordionPrimitive.Panel.Props {
	/**
	 * Additional class name for the inner content wrapper.
	 */
	innerClassName?: string;
}

function AccordionPanel({
	className,
	innerClassName,
	children,
	...props
}: AccordionPanelProps) {
	return (
		<AccordionPrimitive.Panel
			data-slot="accordion-panel"
			className={cn(
				"h-(--accordion-panel-height) overflow-hidden text-sm text-muted-foreground transition-[height] duration-200 ease-in-out",
				"data-starting-style:h-0 data-ending-style:h-0",
				"[&[hidden]:not([hidden='until-found'])]:hidden",
				className,
			)}
			{...props}
		>
			<div className={cn("pt-0 pb-3", innerClassName)}>{children}</div>
		</AccordionPrimitive.Panel>
	);
}

/* -------------------------------------------------------------------------- */
/* Exports                                                                    */
/* -------------------------------------------------------------------------- */

export const Accordion = {
	Root: AccordionRoot,
	Item: AccordionItem,
	Header: AccordionHeader,
	Trigger: AccordionTrigger,
	Panel: AccordionPanel,
	Icon: AccordionIcon,
};

export {
	AccordionRoot,
	AccordionItem,
	AccordionHeader,
	AccordionTrigger,
	AccordionPanel,
	AccordionIcon,
	type AccordionRootProps,
	type AccordionItemProps,
	type AccordionTriggerProps,
	type AccordionPanelProps,
	type AccordionIconProps,
};

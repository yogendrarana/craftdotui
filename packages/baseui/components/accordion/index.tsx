"use client";

import { ChevronDownIcon } from "lucide-react";
import { Accordion as AccordionPrimitive } from "@base-ui/react/accordion";

import { cn } from "@craftdotui/lib/utils";

/* -------------------------------------------------------------------------- */
/* Accordion                                                                  */
/* -------------------------------------------------------------------------- */

function Accordion({ className, ...props }: AccordionPrimitive.Root.Props) {
	return (
		<AccordionPrimitive.Root
			data-slot="accordion"
			className={cn("flex w-full flex-col", className)}
			{...props}
		/>
	);
}

/* -------------------------------------------------------------------------- */
/* AccordionItem                                                              */
/* -------------------------------------------------------------------------- */

function AccordionItem({ className, ...props }: AccordionPrimitive.Item.Props) {
	return (
		<AccordionPrimitive.Item
			data-slot="accordion-item"
			className={cn("not-last:border-b", className)}
			{...props}
		/>
	);
}

/* -------------------------------------------------------------------------- */
/* AccordionTrigger                                                           */
/* -------------------------------------------------------------------------- */

function AccordionTrigger({
	className,
	children,
	...props
}: AccordionPrimitive.Trigger.Props) {
	return (
		<AccordionPrimitive.Header className="flex">
			<AccordionPrimitive.Trigger
				data-slot="accordion-trigger"
				className={cn(
					"py-4 relative flex flex-1 items-start justify-between rounded-md border border-transparent text-left text-sm font-medium transition-all outline-none",
					"hover:cursor-pointer hover:underline disabled:pointer-events-none disabled:opacity-50",
					"focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:border-ring focus-visible:after:border-ring",
					"**:data-[slot=accordion-trigger-icon]:ml-auto **:data-[slot=accordion-trigger-icon]:size-4 **:data-[slot=accordion-trigger-icon]:text-muted-foreground",
					"[&[data-panel-open]>[data-slot=accordion-trigger-icon]]:rotate-180",
					className,
				)}
				{...props}
			>
				{children}

				<ChevronDownIcon
					data-slot="accordion-trigger-icon"
					className="pointer-events-none shrink-0 transition-transform duration-200"
				/>
			</AccordionPrimitive.Trigger>
		</AccordionPrimitive.Header>
	);
}

/* -------------------------------------------------------------------------- */
/* AccordionPanel                                                             */
/* -------------------------------------------------------------------------- */

function AccordionPanel({
	className,
	children,
	...props
}: AccordionPrimitive.Panel.Props) {
	return (
		<AccordionPrimitive.Panel
			data-slot="accordion-content"
			className={cn(
				"h-(--accordion-panel-height) overflow-hidden text-sm transition-[height] duration-300 ease-in-out",
				"data-starting-style:h-0 data-ending-style:h-0",
				className,
			)}
			{...props}
		>
			<div className="pt-0 pb-4 text-muted-foreground">{children}</div>
		</AccordionPrimitive.Panel>
	);
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionPanel };

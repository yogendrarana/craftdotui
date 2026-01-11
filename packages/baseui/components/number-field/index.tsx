"use client";

import * as React from "react";
import { MinusIcon, MoveHorizontal, PlusIcon } from "lucide-react";
import { NumberField as NumberFieldPrimitive } from "@base-ui/react/number-field";

import { cn } from "@craftdotui/lib/utils";
import { buttonVariants } from "../button";
import { inputVariants } from "../input";

/* -------------------------------------------------------------------------- */
/* Root                                                                       */
/* -------------------------------------------------------------------------- */

function NumberFieldRoot({
	id: idProp,
	className,
	...props
}: NumberFieldPrimitive.Root.Props) {
	const generatedId = React.useId();
	const id = idProp ?? generatedId;

	return (
		<NumberFieldPrimitive.Root
			data-slot="number-field-root"
			id={id}
			className={cn("", className)}
			{...props}
		/>
	);
}

/* -------------------------------------------------------------------------- */
/* Scrub Area                                                                 */
/* -------------------------------------------------------------------------- */

function NumberFieldScrubArea({
	className,
	...props
}: NumberFieldPrimitive.ScrubArea.Props) {
	return (
		<NumberFieldPrimitive.ScrubArea
			data-slot="number-field-scrub-area"
			className={cn("cursor-ew-resize", className)}
			{...props}
		/>
	);
}

/* -------------------------------------------------------------------------- */
/* Scrub Area Cursor                                                          */
/* -------------------------------------------------------------------------- */

function NumberFieldScrubAreaCursor({
	className,
	...props
}: NumberFieldPrimitive.ScrubAreaCursor.Props) {
	return (
		<NumberFieldPrimitive.ScrubAreaCursor
			data-slot="number-field-scrub-area-cursor"
			className={cn("", className)}
			{...props}
		>
			<MoveHorizontal className="size-4" />
		</NumberFieldPrimitive.ScrubAreaCursor>
	);
}

/* -------------------------------------------------------------------------- */
/* Group                                                                      */
/* -------------------------------------------------------------------------- */

function NumberFieldGroup({
	className,
	...props
}: NumberFieldPrimitive.Group.Props) {
	return (
		<NumberFieldPrimitive.Group
			data-slot="number-field-group"
			className={cn("flex items-center gap-2", className)}
			{...props}
		/>
	);
}

/* -------------------------------------------------------------------------- */
/* Input                                                                      */
/* -------------------------------------------------------------------------- */

function NumberFieldInput({
	className,
	...props
}: NumberFieldPrimitive.Input.Props) {
	return (
		<NumberFieldPrimitive.Input
			data-slot="number-field-input"
			className={cn(inputVariants(), className)}
			{...props}
		/>
	);
}

/* -------------------------------------------------------------------------- */
/* Increment                                                                  */
/* -------------------------------------------------------------------------- */

function NumberFieldIncrement({
	className,
	...props
}: NumberFieldPrimitive.Increment.Props) {
	return (
		<NumberFieldPrimitive.Increment
			data-slot="number-field-increment"
			className={cn(
				buttonVariants({
					variant: "outline",
					size: "icon",
					className,
				}),
			)}
			{...props}
		>
			<PlusIcon />
		</NumberFieldPrimitive.Increment>
	);
}

/* -------------------------------------------------------------------------- */
/* Decrement                                                                  */
/* -------------------------------------------------------------------------- */

function NumberFieldDecrement({
	className,
	...props
}: NumberFieldPrimitive.Decrement.Props) {
	return (
		<NumberFieldPrimitive.Decrement
			data-slot="number-field-decrement"
			className={cn(
				buttonVariants({
					variant: "outline",
					size: "icon",
					className,
				}),
			)}
			{...props}
		>
			<MinusIcon />
		</NumberFieldPrimitive.Decrement>
	);
}

/* -------------------------------------------------------------------------- */
/* Exports                                                                    */
/* -------------------------------------------------------------------------- */

export {
	NumberFieldRoot,
	NumberFieldScrubArea,
	NumberFieldScrubAreaCursor,
	NumberFieldGroup,
	NumberFieldInput,
	NumberFieldIncrement,
	NumberFieldDecrement,
	NumberFieldPrimitive,
};

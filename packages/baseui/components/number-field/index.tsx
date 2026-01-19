"use client";

import * as React from "react";
import type { VariantProps } from "class-variance-authority";
import { MinusIcon, MoveHorizontal, PlusIcon } from "lucide-react";
import { NumberField as NumberFieldPrimitive } from "@base-ui/react/number-field";

import { cn } from "@craftdotui/lib/utils";
import { inputVariants } from "@craftdotui/baseui/components/input";
import { buttonVariants } from "@craftdotui/baseui/components/button";

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

type NumberFieldInputProps = Omit<NumberFieldPrimitive.Input.Props, "size"> & {
	size?: VariantProps<typeof inputVariants>["size"];
	variant?: VariantProps<typeof inputVariants>["variant"];
};

function NumberFieldInput({
	className,
	size = "md",
	variant = "default",
	...props
}: NumberFieldInputProps) {
	return (
		<NumberFieldPrimitive.Input
			data-slot="number-field-input"
			className={cn(
				inputVariants({ size, variant }),
				"text-center",
				className,
			)}
			{...props}
		/>
	);
}

/* -------------------------------------------------------------------------- */
/* Increment                                                                  */
/* -------------------------------------------------------------------------- */

type NumberFieldIncrementProps = Omit<
	NumberFieldPrimitive.Increment.Props,
	"size"
> & {
	size?: VariantProps<typeof buttonVariants>["size"];
	variant?: VariantProps<typeof buttonVariants>["variant"];
};

function NumberFieldIncrement({
	className,
	size = "icon",
	variant = "outline",
	...props
}: NumberFieldIncrementProps) {
	return (
		<NumberFieldPrimitive.Increment
			data-slot="number-field-increment"
			className={cn(
				buttonVariants({
					variant,
					size,
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

type NumberFieldDecrementProps = Omit<
	NumberFieldPrimitive.Decrement.Props,
	"size"
> & {
	size?: VariantProps<typeof buttonVariants>["size"];
	variant?: VariantProps<typeof buttonVariants>["variant"];
};

function NumberFieldDecrement({
	className,
	size = "icon",
	variant = "outline",
	...props
}: NumberFieldDecrementProps) {
	return (
		<NumberFieldPrimitive.Decrement
			data-slot="number-field-decrement"
			className={cn(
				buttonVariants({
					variant,
					size,
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

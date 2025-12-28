"use client";

import { Field as FieldPrimitive } from "@base-ui/react/field";
import {
	type InputVariants,
	inputVariants,
} from "@craftdotui/baseui/components/input";

import { cn } from "@craftdotui/lib/utils";

/* -------------------------------------------------------------------------- */
/* Field Root                                                                 */
/* -------------------------------------------------------------------------- */

function Field({ className, ...props }: FieldPrimitive.Root.Props) {
	return (
		<FieldPrimitive.Root
			className={cn("flex flex-col gap-1.5", className)}
			data-slot="field-root"
			{...props}
		/>
	);
}

/* -------------------------------------------------------------------------- */
/* Field Label                                                                */
/* -------------------------------------------------------------------------- */

function FieldLabel({ className, ...props }: FieldPrimitive.Label.Props) {
	return (
		<FieldPrimitive.Label
			className={cn("text-sm font-medium text-foreground", className)}
			data-slot="field-label"
			{...props}
		/>
	);
}

/* -------------------------------------------------------------------------- */
/* Field Control                                                              */
/* -------------------------------------------------------------------------- */
interface FieldControlProps
	extends Omit<FieldPrimitive.Control.Props, "size">,
		InputVariants {
	className?: string;
}

function FieldControl({
	className,
	size,
	variant,
	...props
}: FieldControlProps) {
	return (
		<FieldPrimitive.Control
			className={cn(inputVariants({ size, variant }), className)}
			data-slot="field-control"
			{...props}
		/>
	);
}

/* -------------------------------------------------------------------------- */
/* Field Description                                                          */
/* -------------------------------------------------------------------------- */

function FieldDescription({
	className,
	...props
}: FieldPrimitive.Description.Props) {
	return (
		<FieldPrimitive.Description
			className={cn("text-xs text-muted-foreground", className)}
			data-slot="field-description"
			{...props}
		/>
	);
}

/* -------------------------------------------------------------------------- */
/* Field Item                                                                 */
/* -------------------------------------------------------------------------- */

function FieldItem({ className, ...props }: FieldPrimitive.Item.Props) {
	return (
		<FieldPrimitive.Item
			className={cn("relative", className)}
			data-slot="field-item"
			{...props}
		/>
	);
}

/* -------------------------------------------------------------------------- */
/* Field Error                                                                */
/* -------------------------------------------------------------------------- */

function FieldError({ className, ...props }: FieldPrimitive.Error.Props) {
	return (
		<FieldPrimitive.Error
			className={cn("text-xs font-medium text-destructive", className)}
			data-slot="field-error"
			{...props}
		/>
	);
}

/* -------------------------------------------------------------------------- */
/* Field Validity                                                             */
/* -------------------------------------------------------------------------- */

function FieldValidity({ ...props }: FieldPrimitive.Validity.Props) {
	return <FieldPrimitive.Validity data-slot="field-validity" {...props} />;
}

/* -------------------------------------------------------------------------- */
/* Exports                                                                    */
/* -------------------------------------------------------------------------- */

export {
	Field,
	FieldLabel,
	FieldControl,
	FieldDescription,
	FieldItem,
	FieldError,
	FieldValidity,
};

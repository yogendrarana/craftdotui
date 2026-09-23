"use client";

import { OTPField as OTPFieldPrimitive } from "@base-ui/react/otp-field";

import { cn } from "@craftdotui/lib/utils";
import { SeparatorRoot } from "@craftdotui/baseui/components/separator";
import {
	inputVariants,
	type InputVariants,
} from "@craftdotui/baseui/components/input";

/* -------------------------------------------------------------------------- */
/* Types                                                                      */
/* -------------------------------------------------------------------------- */

const otpFieldInputVariants = inputVariants;
type OTPFieldInputVariants = InputVariants;

interface OTPFieldInputProps
	extends Omit<OTPFieldPrimitive.Input.Props, "size">,
		InputVariants {
	className?: string;
}

/* -------------------------------------------------------------------------- */
/* OTP Field Root                                                             */
/* -------------------------------------------------------------------------- */

function OTPFieldRoot({ className, ...props }: OTPFieldPrimitive.Root.Props) {
	return (
		<OTPFieldPrimitive.Root
			data-slot="otp-field-root"
			className={cn("flex items-center gap-2", className)}
			{...props}
		/>
	);
}

/* -------------------------------------------------------------------------- */
/* OTP Field Input                                                            */
/* -------------------------------------------------------------------------- */

const sizeMap: Record<string, NonNullable<InputVariants["size"]>> = {
	xs: "icon-xs",
	sm: "icon-sm",
	md: "icon",
	lg: "icon-lg",
	xl: "icon-xl",
};

function OTPFieldInput({
	className,
	size = "icon",
	variant,
	...props
}: OTPFieldInputProps) {
	const resolvedSize =
		(size && size in sizeMap ? sizeMap[size] : size) ?? "icon";

	return (
		<OTPFieldPrimitive.Input
			data-slot="otp-field-input"
			className={cn(
				inputVariants({ size: resolvedSize, variant }),
				"data-[complete]:border-primary/50",
				className,
			)}
			{...props}
		/>
	);
}

/* -------------------------------------------------------------------------- */
/* OTP Field Separator                                                        */
/* -------------------------------------------------------------------------- */

function OTPFieldSeparator({
	className,
	...props
}: OTPFieldPrimitive.Separator.Props) {
	return (
		<OTPFieldPrimitive.Separator
			data-slot="otp-field-separator"
			render={
				<SeparatorRoot
					className={cn(
						"rounded-full bg-input data-[orientation=horizontal]:h-0.5 data-[orientation=horizontal]:w-3",
						className,
					)}
				/>
			}
			{...props}
		/>
	);
}

/* -------------------------------------------------------------------------- */
/* Exports                                                                    */
/* -------------------------------------------------------------------------- */

export const OTPField = {
	Root: OTPFieldRoot,
	Input: OTPFieldInput,
	Separator: OTPFieldSeparator,
};

export {
	OTPFieldRoot,
	OTPFieldInput,
	OTPFieldSeparator,
	inputVariants,
	otpFieldInputVariants,
};

export type { OTPFieldInputProps, OTPFieldInputVariants };

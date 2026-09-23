"use client";

import { Form as FormPrimitive } from "@base-ui/react/form";

import { cn } from "@craftdotui/lib/utils";

function FormRoot({ className, ...props }: FormPrimitive.Props) {
	return (
		<FormPrimitive
			className={cn("flex w-full flex-col gap-4", className)}
			data-slot="form"
			{...props}
		/>
	);
}

export const Form = {
	Root: FormRoot,
};

export { FormRoot };

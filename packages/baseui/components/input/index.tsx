"use client";

import { Input as InputPrimitive } from "@base-ui/react/input";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@craftdotui/lib/utils";

/* -------------------------------------------------------------------------- */
/* Input Variants                                                             */
/* -------------------------------------------------------------------------- */

const inputVariants = cva(
	[
		"w-full min-w-0 p-2 bg-background border border-border rounded-md outline-none inline-flex",
		"transition-all duration-200 ease-in-out",
		"placeholder:text-muted-foreground/80 disabled:cursor-not-allowed",
	],
	{
		variants: {
			variant: {
				default: [
					"focus-visible:ring-2 focus-visible:ring-ring/20 focus-visible:ring-offset-1",
					"focus-within:ring-2 focus-within:ring-ring/20 focus-within:ring-offset-1",
				],
				ghost: "border-0 bg-transparent rounded-none focus:ring-0",
			},
			size: {
				xs: "h-7 text-xs",
				sm: "h-8 text-xs",
				md: "h-8.5 text-sm",
				lg: "h-9 text-sm",
				xl: "h-9.5 text-base",
			},
		},
		defaultVariants: {
			size: "md",
			variant: "default",
		},
	},
);

/* -------------------------------------------------------------------------- */
/* Types                                                                      */
/* -------------------------------------------------------------------------- */

type InputVariants = VariantProps<typeof inputVariants>;

interface InputProps extends Omit<InputPrimitive.Props, "size">, InputVariants {
	className?: string;
}

/* -------------------------------------------------------------------------- */
/* Input Component                                                            */
/* -------------------------------------------------------------------------- */

function Input({ className, size, variant, type, ...props }: InputProps) {
	const isFile = type === "file";
	const isSearch = type === "search";

	return (
		<InputPrimitive
			type={type}
			className={cn(
				inputVariants({ size, variant }),
				isSearch && [
					"[&::-webkit-search-cancel-button]:appearance-none",
					"[&::-webkit-search-decoration]:appearance-none",
					"[&::-webkit-search-results-button]:appearance-none",
					"[&::-webkit-search-results-decoration]:appearance-none",
				],
				isFile && [
					"text-muted-foreground cursor-pointer",
					"file:me-3 file:bg-transparent file:font-medium file:text-foreground file:text-sm file:border-0",
					"flex items-center",
				],
				className,
			)}
			data-slot="input"
			{...props}
		/>
	);
}

/* -------------------------------------------------------------------------- */
/* Exports                                                                    */
/* -------------------------------------------------------------------------- */

export { Input, inputVariants };
export type { InputProps, InputVariants };

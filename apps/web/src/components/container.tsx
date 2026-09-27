import type * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const containerVariants = cva("mx-auto w-full", {
	variants: {
		size: {
			none: "max-w-none",
			xs: "max-w-xl",
			sm: "max-w-3xl",
			md: "max-w-5xl",
			lg: "max-w-6xl",
			xl: "max-w-7xl",
			"2xl": "max-w-screen-2xl",
			full: "max-w-full",
		},

		padding: {
			none: "px-0",
			xs: "px-2 sm:px-4",
			sm: "px-4 sm:px-6",
			md: "px-4 sm:px-6 lg:px-8",
			lg: "px-4 sm:px-6 lg:px-12",
		},
	},

	defaultVariants: {
		size: "xl",
		padding: "md",
	},
});

type ContainerProps<T extends React.ElementType = "div"> = {
	as?: T;
	ref?: React.ComponentPropsWithRef<T>["ref"];
	children?: React.ReactNode;
	className?: string;
} & VariantProps<typeof containerVariants> &
	Omit<React.ComponentPropsWithoutRef<T>, "as" | "size" | "className">;

function Container<T extends React.ElementType = "div">({
	as,
	size,
	padding,
	className,
	children,
	...props
}: ContainerProps<T>) {
	const Component = as ?? "div";

	return (
		<Component
			className={cn(
				containerVariants({
					size,
					padding,
				}),
				className,
			)}
			{...props}
		>
			{children}
		</Component>
	);
}

export { Container, containerVariants, type ContainerProps };

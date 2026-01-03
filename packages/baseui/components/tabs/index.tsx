"use client";

import { Tabs as TabsPrimitive } from "@base-ui/react/tabs";
import { cva, type VariantProps } from "class-variance-authority";
import { createContext, useContext } from "react";
import { cn } from "@craftdotui/lib/utils";

/* -------------------------------------------------------------------------- */
/* Tabs Root                                                                  */
/* -------------------------------------------------------------------------- */

function Tabs({ className, ...props }: TabsPrimitive.Root.Props) {
	return (
		<TabsPrimitive.Root
			className={cn(
				"flex flex-col gap-2 data-[orientation=vertical]:flex-row",
				className,
			)}
			data-slot="tabs"
			{...props}
		/>
	);
}

/* -------------------------------------------------------------------------- */
/* Tabs List                                                                  */
/* -------------------------------------------------------------------------- */

interface TabsListProps extends TabsPrimitive.List.Props {
	tabsListFullWidth?: boolean;
	hideIndicator?: boolean;
	variant?: VariantProps<typeof tabsListVariants>["variant"];
	tabShape?: VariantProps<typeof tabsTabVariants>["shape"];
	tabSize?: VariantProps<typeof tabsTabVariants>["size"];
	tabVariant?: VariantProps<typeof tabsTabVariants>["variant"];
}

const TabsListContext = createContext<TabsListProps>({});

const tabsListVariants = cva(
	[
		"w-fit p-1 z-0",
		"relative flex gap-1 items-center text-muted-foreground rounded-lg",
		"data-[orientation=vertical]:flex-col data-[orientation=vertical]:justify-start",
	],
	{
		variants: {
			variant: {
				default: "bg-muted border border-border/50 border-dashed",
				outlined: "border border-border",
				ghost: "data-[orientation=vertical]:px-1 data-[orientation=horizontal]:py-1 *:data-[slot=tabs-trigger]:hover:bg-accent",
			},
			tabsListFullWidth: {
				true: "w-full",
				false: "",
			},
		},
		compoundVariants: [
			{
				variant: ["ghost"],
				className: "*:data-[slot=tabs-tab]:hover:bg-accent",
			},
		],
		defaultVariants: {
			variant: "default",
			tabsListFullWidth: false,
		},
	},
);

function TabsList({
	variant = "default",
	tabsListFullWidth = false,
	hideIndicator = false,
	tabShape = "default",
	tabSize = "md",
	tabVariant = "default",
	className,
	children,
	...props
}: TabsListProps) {
	return (
		<TabsListContext.Provider
			value={{
				variant,
				tabsListFullWidth,
				tabShape,
				tabSize,
				tabVariant,
			}}
		>
			<TabsPrimitive.List
				className={cn(
					tabsListVariants({
						variant,
						tabsListFullWidth,
					}),
					tabShape === "pill" &&
						"data-[orientation=horizontal]:rounded-full",
					variant === "ghost" &&
						"data-[orientation=horizontal]:border-b rounded-none w-full",
					className,
				)}
				data-slot="tabs-list"
				{...props}
			>
				{children}
				{!hideIndicator && <TabsIndicator />}
			</TabsPrimitive.List>
		</TabsListContext.Provider>
	);
}

/* -------------------------------------------------------------------------- */
/* Tabs Indicator                                                             */
/* -------------------------------------------------------------------------- */

function TabsIndicator() {
	const { variant, tabShape } = useContext(TabsListContext);
	// data-active:bg-background data-active:border-border data-active:shadow-sm data-active:text-foreground
	return (
		<TabsPrimitive.Indicator
			data-slot="tab-indicator"
			className={cn(
				"absolute bottom-0 left-0",
				"bg-background text-foreground",
				"h-(--active-tab-height) w-(--active-tab-width) translate-x-(--active-tab-left) -translate-y-(--active-tab-bottom)",
				"transition-[width,translate] duration-200 ease-in-out",
				// conditional styling
				variant === "ghost" &&
					"data-[orientation=vertical]:-translate-x-px z-10 bg-primary data-[orientation=horizontal]:h-0.5 data-[orientation=vertical]:w-0.5 data-[orientation=horizontal]:translate-y-px",
				variant !== "ghost" &&
					"-z-1 rounded-md bg-background shadow-sm text-foreground border border-border",
				tabShape === "pill" && "rounded-full",
			)}
		/>
	);
}

/* -------------------------------------------------------------------------- */
/* Tabs Tab                                                                   */
/* -------------------------------------------------------------------------- */

const tabsTabVariants = cva(
	[
		"relative inline-flex items-center justify-center gap-2 z-10 rounded-md",
		"cursor-pointer font-medium text-muted-foreground border border-transparent transition-[color,background-color,box-shadow]",
		"focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
		"disabled:pointer-events-none disabled:opacity-40",
		"hover:text-foreground",
		"data-[orientation=vertical]:w-full data-[orientation=vertical]:justify-start",
	],
	{
		variants: {
			variant: {
				default: "",
			},
			size: {
				sm: "text-xs px-3 py-1.5",
				md: "text-xs px-3 py-1.5",
				lg: "text-sm px-4 py-2",
			},
			shape: {
				default: "rounded-md",
				pill: "rounded-full",
			},
		},

		defaultVariants: {
			variant: "default",
			size: "md",
			shape: "default",
		},
	},
);

function TabsTab({ className, ...props }: TabsPrimitive.Tab.Props) {
	const { variant, tabShape, tabSize, tabVariant, tabsListFullWidth } =
		useContext(TabsListContext);

	return (
		<TabsPrimitive.Tab
			className={cn(
				tabsTabVariants({
					variant: tabVariant,
					size: tabSize,
					shape: tabShape,
				}),
				tabsListFullWidth && "flex-1",
				variant === "ghost" &&
					"data-active:bg-transparent data-active:border-transparent data-active:shadow-none",
				className,
			)}
			data-slot="tabs-tab"
			{...props}
		/>
	);
}

/* -------------------------------------------------------------------------- */
/* Tabs Panel                                                                 */
/* -------------------------------------------------------------------------- */

function TabsPanel({ className, ...props }: TabsPrimitive.Panel.Props) {
	return (
		<TabsPrimitive.Panel
			className={cn(
				"flex-1 text-sm text-foreground",
				"data-[orientation=vertical]:ml-1",
				"data-[orientation=horizontal]:mt-1",
				"data-hidden:hidden",
				className,
			)}
			data-slot="tabs-panel"
			{...props}
		/>
	);
}

/* -------------------------------------------------------------------------- */
/* Exports                                                                    */
/* -------------------------------------------------------------------------- */

export { Tabs, TabsList, TabsTab, TabsPanel, TabsPrimitive };
export type { TabsListProps };

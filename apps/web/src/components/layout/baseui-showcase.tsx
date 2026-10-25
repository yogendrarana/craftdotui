"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { CornerCrosshairs, SectionHeader } from "@/components/grid-system";
import { ComponentPreview } from "@/components/mdx/component-preview";

interface BaseUIComponentItem {
	title: string;
	description: string;
	href: string;
	previewName: string;
}

const BASEUI_COMPONENTS: BaseUIComponentItem[] = [
	{
		title: "Accordion",
		description: "A set of collapsible panels with headings and content.",
		href: "/docs/baseui/components/accordion",
		previewName: "baseui-particles-accordion",
	},
	{
		title: "Alert Dialog",
		description: "A dialog that requires user response to proceed.",
		href: "/docs/baseui/components/alert-dialog",
		previewName: "baseui-particles-alert-dialog",
	},
	{
		title: "Autocomplete",
		description: "An input that suggests options as you type.",
		href: "/docs/baseui/components/autocomplete",
		previewName: "baseui-particles-autocomplete",
	},
	{
		title: "Avatar",
		description:
			"An image element with a fallback for representing the user.",
		href: "/docs/baseui/components/avatar",
		previewName: "baseui-particles-avatar",
	},
	{
		title: "Button",
		description: "A button or a component that looks like a button.",
		href: "/docs/baseui/components/button",
		previewName: "baseui-particles-button",
	},
	{
		title: "Checkbox",
		description:
			"A control that allows the user to toggle between checked and not checked.",
		href: "/docs/baseui/components/checkbox",
		previewName: "baseui-particles-checkbox",
	},
	{
		title: "Checkbox Group",
		description: "A shared state wrapper for a series of checkboxes.",
		href: "/docs/baseui/components/checkbox-group",
		previewName: "baseui-particles-checkbox-group",
	},
	{
		title: "Collapsible",
		description:
			"An interactive component which expands/collapses a panel.",
		href: "/docs/baseui/components/collapsible",
		previewName: "baseui-particles-collapsible",
	},
	{
		title: "Combobox",
		description:
			"Autocomplete input and command palette with a list of suggestions.",
		href: "/docs/baseui/components/combobox",
		previewName: "baseui-particles-combobox",
	},
	{
		title: "Context Menu",
		description: "Displays a menu to the user triggered by a right-click.",
		href: "/docs/baseui/components/context-menu",
		previewName: "baseui-particles-context-menu",
	},
	{
		title: "Dialog",
		description:
			"A window overlaid on either the primary window or another dialog.",
		href: "/docs/baseui/components/dialog",
		previewName: "baseui-particles-dialog",
	},
	{
		title: "Drawer",
		description: "A panel that slides out from the edge of the screen.",
		href: "/docs/baseui/components/drawer",
		previewName: "baseui-particles-drawer",
	},
	{
		title: "Field",
		description:
			"Provides labeling, description, and validation for form controls.",
		href: "/docs/baseui/components/field",
		previewName: "baseui-particles-field",
	},
	{
		title: "Fieldset",
		description:
			"A grouped container with a shared legend for related controls.",
		href: "/docs/baseui/components/fieldset",
		previewName: "baseui-particles-fieldset",
	},
	{
		title: "Form",
		description:
			"A form wrapper for handling validation and submission states.",
		href: "/docs/baseui/components/form",
		previewName: "baseui-particles-form",
	},
	{
		title: "Input",
		description:
			"Displays a form input field or a component that looks like an input.",
		href: "/docs/baseui/components/input",
		previewName: "baseui-particles-input",
	},
	{
		title: "Menu",
		description:
			"Displays a dropdown menu with actions, groups, and selections.",
		href: "/docs/baseui/components/menu",
		previewName: "baseui-particles-menu",
	},
	{
		title: "Menubar",
		description:
			"A visually persistent menu common in desktop applications.",
		href: "/docs/baseui/components/menubar",
		previewName: "baseui-particles-menubar",
	},
	{
		title: "Meter",
		description: "Displays a scalar measurement within a known range.",
		href: "/docs/baseui/components/meter",
		previewName: "baseui-particles-meter",
	},
	{
		title: "Navigation Menu",
		description: "A collection of links for navigating websites.",
		href: "/docs/baseui/components/navigation-menu",
		previewName: "baseui-particles-navigation-menu",
	},
	{
		title: "Number Field",
		description: "A numeric input with increment and decrement buttons.",
		href: "/docs/baseui/components/number-field",
		previewName: "baseui-particles-number-field",
	},
	{
		title: "OTP Field",
		description: "An accessible one-time password input component.",
		href: "/docs/baseui/components/otp-field",
		previewName: "baseui-particles-otp-field",
	},
	{
		title: "Popover",
		description:
			"Displays rich content in a portal, triggered by a button.",
		href: "/docs/baseui/components/popover",
		previewName: "baseui-particles-popover",
	},
	{
		title: "Preview Card",
		description:
			"For sighted users to preview content available behind a link.",
		href: "/docs/baseui/components/preview-card",
		previewName: "baseui-particles-preview-card",
	},
	{
		title: "Progress",
		description:
			"Displays an indicator showing the completion progress of a task.",
		href: "/docs/baseui/components/progress",
		previewName: "baseui-particles-progress",
	},
	{
		title: "Radio Group",
		description:
			"A set of checkable buttons where only one can be checked at a time.",
		href: "/docs/baseui/components/radio-group",
		previewName: "baseui-particles-radio-group",
	},
	{
		title: "Scroll Area",
		description:
			"Augments native scroll functionality for custom, cross-browser styling.",
		href: "/docs/baseui/components/scroll-area",
		previewName: "baseui-particles-scroll-area",
	},
	{
		title: "Select",
		description:
			"Displays a list of options for the user to pick from—triggered by a button.",
		href: "/docs/baseui/components/select",
		previewName: "baseui-particles-select",
	},
	{
		title: "Separator",
		description: "Visually or semantically separates content.",
		href: "/docs/baseui/components/separator",
		previewName: "baseui-particles-separator",
	},
	{
		title: "Slider",
		description:
			"An input where the user selects a value from within a given range.",
		href: "/docs/baseui/components/slider",
		previewName: "baseui-particles-slider",
	},
	{
		title: "Switch",
		description:
			"A control that allows the user to toggle between checked and not checked.",
		href: "/docs/baseui/components/switch",
		previewName: "baseui-particles-switch",
	},
	{
		title: "Tabs",
		description:
			"A set of layered sections of content—known as tab panels.",
		href: "/docs/baseui/components/tabs",
		previewName: "baseui-particles-tabs",
	},
	{
		title: "Toast",
		description: "A succinct message that is displayed temporarily.",
		href: "/docs/baseui/components/toast",
		previewName: "baseui-particles-toast",
	},
	{
		title: "Toggle",
		description: "A two-state button that can be either on or off.",
		href: "/docs/baseui/components/toggle",
		previewName: "baseui-particles-toggle",
	},
	{
		title: "Toggle Group",
		description:
			"A set of two-state buttons that can be toggled on or off.",
		href: "/docs/baseui/components/toggle-group",
		previewName: "baseui-particles-toggle-group",
	},
	{
		title: "Toolbar",
		description:
			"A container for grouping a set of controls, such as buttons or toggles.",
		href: "/docs/baseui/components/toolbar",
		previewName: "baseui-particles-toolbar",
	},
	{
		title: "Tooltip",
		description:
			"A popup that displays information related to an element on hover or focus.",
		href: "/docs/baseui/components/tooltip",
		previewName: "baseui-particles-tooltip",
	},
];

export function BaseUIShowcase() {
	return (
		<section className="w-full border-b border-border bg-background">
			<div className="max-w-7xl mx-auto border-x border-border relative">
				<CornerCrosshairs top={false} bottom />

				<SectionHeader
					title="Base UI"
					badge={`${BASEUI_COMPONENTS.length} Components`}
				/>

				<div className="p-6 sm:p-8">
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
						{BASEUI_COMPONENTS.map((item) => (
							<div
								key={item.href}
								className="group min-w-0 flex flex-col rounded-2xl border border-border bg-muted/40 p-1.5 transition-colors hover:border-foreground/25"
							>
								<Link
									href={item.href}
									className="px-3.5 pt-3 pb-3 block group/link"
								>
									<div className="flex items-center justify-between gap-2">
										<h3 className="text-sm font-semibold tracking-tight text-foreground group-hover/link:underline underline-offset-4">
											{item.title}
										</h3>
										<ArrowUpRight className="size-3.5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
									</div>
									<p className="mt-1 text-xs text-muted-foreground leading-relaxed line-clamp-2 min-h-9">
										{item.description}
									</p>
								</Link>

								<div className="flex-1 min-h-56 rounded-xl border border-border/80 bg-background flex items-center overflow-x-auto p-5">
									<ComponentPreview
										name={item.previewName}
										className="w-max min-w-full"
									/>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}

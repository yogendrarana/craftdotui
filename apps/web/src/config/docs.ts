import type { NavItem } from "@/types/registry";

export type DocsNavItem = {
	title: string;
	items: Array<NavItem>;
};

export const docsNavItems: Array<DocsNavItem> = [
	{
		title: "Getting Started",
		items: [
			{
				title: "Introduction",
				href: "/docs/getting-started/introduction",
			},
			{
				title: "Installation",
				href: "/docs/getting-started/installation",
			},
		],
	},
	{
		title: "Craft UI",
		items: [
			{
				title: "Animate Tooltip",
				href: "/docs/craftui/components/animated-tooltip",
			},
			{
				title: "Confetti",
				href: "/docs/craftui/components/confetti",
			},
			{
				title: "Cursor",
				href: "/docs/craftui/components/cursor",
			},
			{
				title: "Dock",
				href: "/docs/craftui/components/dock",
			},
			{
				title: "Magnetic",
				href: "/docs/craftui/components/magnetic",
			},
			{
				title: "Marquee",
				href: "/docs/craftui/components/marquee",
			},
			{
				title: "Stepper",
				href: "/docs/craftui/components/stepper",
			},
			{
				title: "Text Scramble",
				href: "/docs/craftui/components/text-scramble",
			},
			{
				title: "Text Typing",
				href: "/docs/craftui/components/text-typing",
			},
			{
				title: "Timeline",
				href: "/docs/craftui/components/timeline",
			},
		],
	},

	{
		title: "Base UI",
		items: [
			{
				title: "Accordion",
				href: "/docs/baseui/components/accordion",
			},
			{
				title: "Alert Dialog",
				href: "/docs/baseui/components/alert-dialog",
			},
			{
				title: "Autocomplete",
				href: "/docs/baseui/components/autocomplete",
			},
			{
				title: "Avatar",
				href: "/docs/baseui/components/avatar",
			},
			{
				title: "Button",
				href: "/docs/baseui/components/button",
			},
			{
				title: "Checkbox",
				href: "/docs/baseui/components/checkbox",
			},
			{
				title: "Checkbox Group",
				href: "/docs/baseui/components/checkbox-group",
			},
			{
				title: "Collapsible",
				href: "/docs/baseui/components/collapsible",
			},
			{
				title: "Combobox",
				href: "/docs/baseui/components/combobox",
			},
			{
				title: "Context Menu",
				href: "/docs/baseui/components/context-menu",
			},
			{
				title: "Dialog",
				href: "/docs/baseui/components/dialog",
			},
			{
				title: "Field",
				href: "/docs/baseui/components/field",
			},
			{
				title: "Fieldset",
				href: "/docs/baseui/components/fieldset",
			},
			{
				title: "Form",
				href: "/docs/baseui/components/form",
			},
			{
				title: "Input",
				href: "/docs/baseui/components/input",
			},
			{
				title: "Menu",
				href: "/docs/baseui/components/menu",
			},
			{
				title: "Menubar",
				href: "/docs/baseui/components/menubar",
			},
			{
				title: "Meter",
				href: "/docs/baseui/components/meter",
			},
			{
				title: "Navigation Menu",
				href: "/docs/baseui/components/navigation-menu",
			},
			{
				title: "Number Field",
				href: "/docs/baseui/components/number-field",
			},
			{
				title: "Popover",
				href: "/docs/baseui/components/popover",
			},
			{
				title: "Preview Card",
				href: "/docs/baseui/components/preview-card",
			},
			{
				title: "Progress",
				href: "/docs/baseui/components/progress",
			},
			{
				title: "Radio",
				href: "/docs/baseui/components/radio",
			},
			{
				title: "Scroll Area",
				href: "/docs/baseui/components/scroll-area",
			},
			{
				title: "Select",
				href: "/docs/baseui/components/select",
			},
			{
				title: "Separator",
				href: "/docs/baseui/components/separator",
			},
			{
				title: "Slider",
				href: "/docs/baseui/components/slider",
			},
			{
				title: "Switch",
				href: "/docs/baseui/components/switch",
			},
			{
				title: "Tabs",
				href: "/docs/baseui/components/tabs",
			},
			{
				title: "Toast",
				href: "/docs/baseui/components/toast",
			},
			{
				title: "Toggle",
				href: "/docs/baseui/components/toggle",
			},
			{
				title: "Toggle Group",
				href: "/docs/baseui/components/toggle-group",
			},
			{
				title: "Toolbar",
				href: "/docs/baseui/components/toolbar",
			},
			{
				title: "Tooltip",
				href: "/docs/baseui/components/tooltip",
			},
		],
	},

	{
		title: "Loaders",
		items: [
			{
				title: "Classic",
				href: "/docs/loaders/classic",
			},
			{
				title: "Jumping Dots",
				href: "/docs/loaders/jumping-dots",
			},
			{
				title: "Leapfrog",
				href: "/docs/loaders/leapfrog",
			},
			{
				title: "Line Spinner",
				href: "/docs/loaders/line-spinner",
			},
			{
				title: "Line Wobble",
				href: "/docs/loaders/line-wobble",
			},
			{
				title: "Newton's Cradle",
				href: "/docs/loaders/newtons-cradle",
			},
			{
				title: "Orbit",
				href: "/docs/loaders/orbit",
			},
			{
				title: "Pulsating Dots",
				href: "/docs/loaders/pulsating-dots",
			},
			{
				title: "Spinner",
				href: "/docs/loaders/spinner",
			},
			{
				title: "Spiral",
				href: "/docs/loaders/spiral",
			},
			{
				title: "Zoomies",
				href: "/docs/loaders/zoomies",
			},
		],
	},

	{
		title: "Hooks",
		items: [
			{
				title: "use-callback",
				href: "/docs/hooks/use-callback",
			},
			{
				title: "use-click-outside",
				href: "/docs/hooks/use-click-outside",
			},
			{
				title: "use-confetti",
				href: "/docs/hooks/use-confetti",
			},
			{
				title: "use-debounce",
				href: "/docs/hooks/use-debounce",
			},
			{
				title: "use-hydrated",
				href: "/docs/hooks/use-hydrated",
			},
			{
				title: "use-is-mobile",
				href: "/docs/hooks/use-is-mobile",
			},
			{
				title: "use-media-query",
				href: "/docs/hooks/use-media-query",
			},
			{
				title: "use-mounted",
				href: "/docs/hooks/use-mounted",
			},
			{
				title: "use-optimistic",
				href: "/docs/hooks/use-optimistic",
			},
			{
				title: "use-query-string",
				href: "/docs/hooks/use-query-string",
			},
		],
	},
];

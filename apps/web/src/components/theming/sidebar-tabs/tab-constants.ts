export interface ColorSectionGroup {
	id: string;
	title: string;
	keys: string[];
	canSyncFromBase?: boolean;
}

export const COLOR_SECTION_GROUPS: ColorSectionGroup[] = [
	{
		id: "base",
		title: "Base",
		keys: ["--background", "--foreground"],
	},
	{
		id: "card",
		title: "Card",
		keys: ["--card", "--card-foreground"],
	},
	{
		id: "popover",
		title: "Popover",
		keys: ["--popover", "--popover-foreground"],
	},
	{
		id: "primary",
		title: "Primary",
		keys: ["--primary", "--primary-foreground"],
	},
	{
		id: "secondary",
		title: "Secondary",
		keys: ["--secondary", "--secondary-foreground"],
	},
	{
		id: "muted",
		title: "Muted",
		keys: ["--muted", "--muted-foreground"],
	},
	{
		id: "accent",
		title: "Accent",
		keys: ["--accent", "--accent-foreground"],
	},
	{
		id: "destructive",
		title: "Destructive",
		keys: ["--destructive", "--destructive-foreground"],
	},
	{
		id: "border-input",
		title: "Border & Input",
		keys: ["--border", "--input", "--ring"],
	},
	{
		id: "chart",
		title: "Chart",
		keys: ["--chart-1", "--chart-2", "--chart-3", "--chart-4", "--chart-5"],
	},
	{
		id: "sidebar",
		title: "Sidebar",
		canSyncFromBase: true,
		keys: [
			"--sidebar",
			"--sidebar-foreground",
			"--sidebar-primary",
			"--sidebar-primary-foreground",
			"--sidebar-accent",
			"--sidebar-accent-foreground",
			"--sidebar-border",
			"--sidebar-ring",
		],
	},
];

export const SEMANTIC_EXTENSION_GROUPS: ColorSectionGroup[] = [
	{
		id: "success",
		title: "Success",
		keys: ["--success", "--success-foreground"],
	},
	{
		id: "warning",
		title: "Warning",
		keys: ["--warning", "--warning-foreground"],
	},
	{
		id: "info",
		title: "Info",
		keys: ["--info", "--info-foreground"],
	},
	{
		id: "invert",
		title: "Invert",
		keys: ["--invert", "--invert-foreground"],
	},
];

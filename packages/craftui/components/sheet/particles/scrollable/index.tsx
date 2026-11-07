import { Button } from "@craftdotui/baseui/components/button";
import {
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetPanel,
	SheetRoot,
	SheetTitle,
	SheetTrigger,
} from "@craftdotui/craftui/components/sheet";

const CHANGELOG_ITEMS = [
	{
		version: "v2.5.0",
		date: "Nov 7, 2026",
		notes: "Introduced modular Sheet and Pagination primitives under Craft UI with Base UI useRender support.",
	},
	{
		version: "v2.4.0",
		date: "Nov 7, 2026",
		notes: "Added Table, Label, and Card primitives with container queries and shaded footer variants.",
	},
	{
		version: "v2.3.0",
		date: "Nov 6, 2026",
		notes: "Overhauled Stepper and Timeline components with colocated particle architecture and accordion integration.",
	},
	{
		version: "v2.2.0",
		date: "Oct 28, 2026",
		notes: "Added Empty state, Skeleton placeholders, and status Badge variants with accessible contrast.",
	},
	{
		version: "v2.1.0",
		date: "Oct 15, 2026",
		notes: "Enhanced Dialog and AlertDialog with nested scaling, keyboard trap, and ScrollArea viewport integration.",
	},
	{
		version: "v2.0.0",
		date: "Oct 1, 2026",
		notes: "Migrated core primitives to Base UI and Tailwind CSS v4 with modern CSS variables and color palettes.",
	},
	{
		version: "v1.9.0",
		date: "Sep 18, 2026",
		notes: "Added Combobox, Autocomplete, and NumberField components with custom filtering and keyboard navigation.",
	},
	{
		version: "v1.8.0",
		date: "Sep 5, 2026",
		notes: "Introduced DatePicker, Calendar, and Popover primitives with localized date formatting.",
	},
	{
		version: "v1.7.0",
		date: "Aug 22, 2026",
		notes: "Added Toast notification system with swipe-to-dismiss, promise handlers, and custom action buttons.",
	},
	{
		version: "v1.6.0",
		date: "Aug 10, 2026",
		notes: "Introduced Tooltip, HoverCard, and ContextMenu primitives with collision-aware floating placement.",
	},
	{
		version: "v1.5.0",
		date: "Jul 29, 2026",
		notes: "Added Select, RadioGroup, and Switch components with accessible ARIA form control bindings.",
	},
	{
		version: "v1.4.0",
		date: "Jul 14, 2026",
		notes: "Introduced Tabs, Accordion, and Collapsible primitives with fluid CSS grid height animations.",
	},
	{
		version: "v1.3.0",
		date: "Jun 30, 2026",
		notes: "Added Avatar, Breadcrumb, and Separator layout primitives with flexible icon slots.",
	},
	{
		version: "v1.2.0",
		date: "Jun 16, 2026",
		notes: "Added Button and Input variants with destructive, secondary, outline, and ghost presets.",
	},
];

export default function Particle() {
	return (
		<SheetRoot>
			<SheetTrigger render={<Button variant="outline" />}>
				Release Notes
			</SheetTrigger>
			<SheetContent>
				<SheetHeader className="border-b border-border pb-4">
					<SheetTitle>Release Notes</SheetTitle>
					<SheetDescription>
						Recent updates and improvements to Craft UI.
					</SheetDescription>
				</SheetHeader>
				<SheetPanel className="gap-4">
					{CHANGELOG_ITEMS.map((item) => (
						<div
							key={item.version}
							className="rounded-lg border border-border bg-muted/30 p-3.5"
						>
							<div className="flex items-center justify-between">
								<span className="font-mono text-xs font-semibold text-foreground">
									{item.version}
								</span>
								<span className="text-xs text-muted-foreground">
									{item.date}
								</span>
							</div>
							<p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">
								{item.notes}
							</p>
						</div>
					))}
				</SheetPanel>
				<SheetFooter>
					<SheetClose render={<Button className="w-full" />}>
						Got it
					</SheetClose>
				</SheetFooter>
			</SheetContent>
		</SheetRoot>
	);
}

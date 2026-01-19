"use client";

import {
	ToolbarRoot,
	ToolbarButton,
	ToolbarSeparator,
	ToolbarLink,
} from "@craftdotui/baseui/components/toolbar";

import {
	ToggleGroup,
	ToggleGroupItem,
} from "@craftdotui/baseui/components/toggle-group";

import {
	Select,
	SelectTrigger,
	SelectValue,
	SelectPortal,
	SelectPositioner,
	SelectPopup,
	SelectItem,
} from "@craftdotui/baseui/components/select";

import {
	NumberFieldRoot,
	NumberFieldGroup,
	NumberFieldInput,
	NumberFieldIncrement,
	NumberFieldDecrement,
} from "@craftdotui/baseui/components/number-field";

import {
	Bold,
	Italic,
	Underline,
	AlignLeft,
	AlignCenter,
	AlignRight,
	Undo,
	Redo,
} from "lucide-react";

export function Particle() {
	return (
		<div>
			<ToolbarRoot>
				{/* Text formatting */}
				<ToggleGroup multiple className="flex gap-0.5">
					<ToolbarButton
						render={
							<ToggleGroupItem value="bold">
								<Bold className="size-4" />
							</ToggleGroupItem>
						}
						aria-label="Bold"
						size="icon"
					/>

					<ToolbarButton
						render={
							<ToggleGroupItem value="italic">
								<Italic className="size-4" />
							</ToggleGroupItem>
						}
						aria-label="Italic"
						size="icon"
					/>

					<ToolbarButton
						render={
							<ToggleGroupItem value="underline">
								<Underline className="size-4" />
							</ToggleGroupItem>
						}
						aria-label="Underline"
						size="icon"
					/>
				</ToggleGroup>

				<ToolbarSeparator />

				{/* Text alignment */}
				<ToggleGroup defaultValue={["left"]} className="flex gap-0.5">
					<ToolbarButton
						render={
							<ToggleGroupItem value="left">
								<AlignLeft className="size-4" />
							</ToggleGroupItem>
						}
						aria-label="Align left"
						size="icon"
					/>

					<ToolbarButton
						render={
							<ToggleGroupItem value="center">
								<AlignCenter className="size-4" />
							</ToggleGroupItem>
						}
						aria-label="Align center"
						size="icon"
					/>

					<ToolbarButton
						render={
							<ToggleGroupItem value="right">
								<AlignRight className="size-4" />
							</ToggleGroupItem>
						}
						aria-label="Align right"
						size="icon"
					/>
				</ToggleGroup>

				<ToolbarSeparator />

				{/* Font family */}
				<Select defaultValue="inter">
					<ToolbarButton render={<SelectTrigger className="w-30" />}>
						<SelectValue />
					</ToolbarButton>

					<SelectPortal>
						<SelectPositioner sideOffset={6}>
							<SelectPopup>
								<SelectItem value="inter">Inter</SelectItem>
								<SelectItem value="system">
									System UI
								</SelectItem>
								<SelectItem value="mono">Monospace</SelectItem>
							</SelectPopup>
						</SelectPositioner>
					</SelectPortal>
				</Select>

				<ToolbarSeparator />

				{/* Font size */}
				<NumberFieldRoot defaultValue={12} min={0} max={100}>
					<NumberFieldGroup className="gap-1">
						<NumberFieldDecrement variant="ghost" />
						<NumberFieldInput
							className="w-14 border rounded-md"
							variant="ghost"
						/>
						<NumberFieldIncrement variant="ghost" />
					</NumberFieldGroup>
				</NumberFieldRoot>

				<ToolbarSeparator />

				{/* Undo/Redo */}
				<ToolbarButton size="icon" aria-label="Undo">
					<Undo className="h-4 w-4" />
				</ToolbarButton>
				<ToolbarButton size="icon" aria-label="Redo">
					<Redo className="h-4 w-4" />
				</ToolbarButton>

				<ToolbarSeparator />

				{/* Right-aligned metadata */}
				<ToolbarLink
					href="#"
					className="ml-auto px-2 text-xs text-muted-foreground hover:text-foreground"
				>
					Edited just now
				</ToolbarLink>
			</ToolbarRoot>
		</div>
	);
}

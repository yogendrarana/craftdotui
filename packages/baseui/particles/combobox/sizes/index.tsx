"use client";

import {
	ComboboxRoot,
	ComboboxInput,
	ComboboxPositioner,
	ComboboxPopup,
	ComboboxList,
	ComboboxItem,
	ComboboxPortal,
	ComboboxEmpty,
} from "@craftdotui/baseui/components/combobox";

interface Option {
	value: string;
	label: string;
}

const statuses: Option[] = [
	{ value: "backlog", label: "Backlog" },
	{ value: "todo", label: "Todo" },
	{ value: "in-progress", label: "In Progress" },
	{ value: "done", label: "Done" },
];

const fruits: Option[] = [
	{ value: "apple", label: "Apple" },
	{ value: "banana", label: "Banana" },
	{ value: "blueberry", label: "Blueberry" },
	{ value: "strawberry", label: "Strawberry" },
];

const languages: Option[] = [
	{ value: "javascript", label: "JavaScript" },
	{ value: "typescript", label: "TypeScript" },
	{ value: "python", label: "Python" },
	{ value: "rust", label: "Rust" },
];

export default function Particle() {
	return (
		<div className="flex flex-col gap-4">
			<div className="space-y-2">
				<span className="text-xs text-muted-foreground uppercase tracking-wider">
					Small (Statuses)
				</span>
				<ComboboxRoot items={statuses} id="small">
					<div className="w-64">
						<ComboboxInput
							size="sm"
							placeholder="Select status..."
							showTrigger
						/>
					</div>
					<ComboboxPortal>
						<ComboboxPositioner>
							<ComboboxPopup>
								<ComboboxEmpty>No results found</ComboboxEmpty>
								<ComboboxList>
									{(item: Option) => (
										<ComboboxItem
											value={item}
											key={item.value}
										>
											{item.label}
										</ComboboxItem>
									)}
								</ComboboxList>
							</ComboboxPopup>
						</ComboboxPositioner>
					</ComboboxPortal>
				</ComboboxRoot>
			</div>

			<div className="space-y-2">
				<span className="text-xs text-muted-foreground uppercase tracking-wider">
					Medium (Fruits)
				</span>
				<ComboboxRoot items={fruits} id="medium">
					<div className="w-64">
						<ComboboxInput
							size="md"
							placeholder="Select fruit..."
							showTrigger
						/>
					</div>
					<ComboboxPortal>
						<ComboboxPositioner>
							<ComboboxPopup>
								<ComboboxEmpty>No results found</ComboboxEmpty>
								<ComboboxList>
									{(item: Option) => (
										<ComboboxItem
											value={item}
											key={item.value}
										>
											{item.label}
										</ComboboxItem>
									)}
								</ComboboxList>
							</ComboboxPopup>
						</ComboboxPositioner>
					</ComboboxPortal>
				</ComboboxRoot>
			</div>

			<div className="space-y-2">
				<span className="text-xs text-muted-foreground uppercase tracking-wider">
					Large (Languages)
				</span>
				<ComboboxRoot items={languages} id="large">
					<div className="w-64">
						<ComboboxInput
							size="lg"
							placeholder="Select language..."
							showTrigger
						/>
					</div>
					<ComboboxPortal>
						<ComboboxPositioner>
							<ComboboxPopup>
								<ComboboxEmpty>No results found</ComboboxEmpty>
								<ComboboxList>
									{(item: Option) => (
										<ComboboxItem
											value={item}
											key={item.value}
										>
											{item.label}
										</ComboboxItem>
									)}
								</ComboboxList>
							</ComboboxPopup>
						</ComboboxPositioner>
					</ComboboxPortal>
				</ComboboxRoot>
			</div>
		</div>
	);
}

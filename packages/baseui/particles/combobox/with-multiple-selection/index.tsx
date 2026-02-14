"use client";

import * as React from "react";
import { X } from "lucide-react";
import {
	ComboboxRoot,
	ComboboxPositioner,
	ComboboxPopup,
	ComboboxList,
	ComboboxItem,
	ComboboxPortal,
	ComboboxChips,
	ComboboxValue,
	ComboboxChip,
	ComboboxChipRemove,
	ComboboxChipsInput,
	ComboboxEmpty,
} from "@craftdotui/baseui/components/combobox";

interface Framework {
	value: string;
	label: string;
}

const frameworks: Framework[] = [
	{ value: "react", label: "React" },
	{ value: "vue", label: "Vue" },
	{ value: "svelte", label: "Svelte" },
	{ value: "solid", label: "Solid" },
	{ value: "nextjs", label: "Next.js" },
];

export default function Particle() {
	const [value, setValue] = React.useState<Framework[]>([]);
	const containerRef = React.useRef<HTMLDivElement | null>(null);

	return (
		<div className="w-64 space-y-4">
			<ComboboxRoot
				multiple
				value={value}
				onValueChange={setValue}
				items={frameworks}
			>
				<ComboboxChips ref={containerRef}>
					<ComboboxValue>
						{(selectedValues: Framework[]) => (
							<>
								{selectedValues?.map((item) => (
									<ComboboxChip
										aria-label={item.label}
										key={item.value}
									>
										{item.label}
										<ComboboxChipRemove>
											<X className="size-3" />
										</ComboboxChipRemove>
									</ComboboxChip>
								))}
								<ComboboxChipsInput
									aria-label="Select a item"
									placeholder={
										value.length > 0
											? undefined
											: "Select a item..."
									}
								/>
							</>
						)}
					</ComboboxValue>
				</ComboboxChips>

				<ComboboxPortal>
					<ComboboxPositioner anchor={containerRef}>
						<ComboboxPopup>
							<ComboboxEmpty>No items found.</ComboboxEmpty>

							<ComboboxList>
								{(item: Framework) => (
									<ComboboxItem key={item.value} value={item}>
										{item.label}
									</ComboboxItem>
								)}
							</ComboboxList>
						</ComboboxPopup>
					</ComboboxPositioner>
				</ComboboxPortal>
			</ComboboxRoot>
		</div>
	);
}

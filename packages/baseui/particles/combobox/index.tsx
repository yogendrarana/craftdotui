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

interface Framework {
	value: string;
	label: string;
}

const frameworks: Framework[] = [
	{ value: "react", label: "React" },
	{ value: "vue", label: "Vue" },
	{ value: "svelte", label: "Svelte" },
	{ value: "solid", label: "Solid" },
];

export function Particle() {
	return (
		<div className="max-w-64">
			<ComboboxRoot items={frameworks}>
				<ComboboxInput
					placeholder="Select framework…"
					showClear
					showTrigger
				/>

				<ComboboxPortal>
					<ComboboxPositioner>
						<ComboboxPopup>
							<ComboboxEmpty>
								<p>No results found.</p>
							</ComboboxEmpty>

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

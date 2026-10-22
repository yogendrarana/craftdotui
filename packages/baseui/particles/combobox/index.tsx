"use client";

import {
	ComboboxRoot,
	ComboboxInputGroup,
	ComboboxContent,
	ComboboxList,
	ComboboxItem,
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
				<ComboboxInputGroup
					inputProps={{ placeholder: "Select framework…" }}
				/>

				<ComboboxContent>
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
				</ComboboxContent>
			</ComboboxRoot>
		</div>
	);
}

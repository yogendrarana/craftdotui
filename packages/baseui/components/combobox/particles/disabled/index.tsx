"use client";

import {
	ComboboxRoot,
	ComboboxInputGroup,
	ComboboxContent,
	ComboboxList,
	ComboboxItem,
} from "@craftdotui/baseui/components/combobox";

const options = [
	{ value: "1", label: "Option 1" },
	{ value: "2", label: "Option 2" },
];

export default function Particle() {
	return (
		<ComboboxRoot disabled items={options}>
			<div className="w-64">
				<ComboboxInputGroup
					inputProps={{ placeholder: "Disabled combobox" }}
					triggerProps={{}}
				/>
			</div>

			<ComboboxContent>
				<ComboboxList>
					{(item) => (
						<ComboboxItem key={item.value} value={item}>
							{item.label}
						</ComboboxItem>
					)}
				</ComboboxList>
			</ComboboxContent>
		</ComboboxRoot>
	);
}

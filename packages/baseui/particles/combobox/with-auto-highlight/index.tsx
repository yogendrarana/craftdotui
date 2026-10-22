"use client";

import {
	ComboboxRoot,
	ComboboxInputGroup,
	ComboboxContent,
	ComboboxList,
	ComboboxItem,
	ComboboxEmpty,
} from "@craftdotui/baseui/components/combobox";

const items = [
	{ label: "Apple", value: "apple" },
	{ label: "Banana", value: "banana" },
	{ label: "Orange", value: "orange" },
	{ label: "Grape", value: "grape" },
	{ label: "Strawberry", value: "strawberry" },
	{ label: "Mango", value: "mango" },
	{ label: "Pineapple", value: "pineapple" },
	{ label: "Kiwi", value: "kiwi" },
	{ label: "Peach", value: "peach" },
	{ label: "Pear", value: "pear" },
];

export default function Particle() {
	return (
		<div className="max-w-64">
			<ComboboxRoot autoHighlight items={items}>
				<ComboboxInputGroup
					inputProps={{ placeholder: "Auto highlight enabled..." }}
					triggerProps={{}}
				/>

				<ComboboxContent>
					<ComboboxEmpty>No results found.</ComboboxEmpty>

					<ComboboxList>
						{(item) => (
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

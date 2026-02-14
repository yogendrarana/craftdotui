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

export default function ComboboxWithAutoHighlight() {
	return (
		<div className="max-w-64">
			<ComboboxRoot autoHighlight items={items}>
				<ComboboxInput
					placeholder="Auto highlight enabled..."
					showTrigger
				/>

				<ComboboxPortal>
					<ComboboxPositioner>
						<ComboboxPopup>
							<ComboboxEmpty>No results found.</ComboboxEmpty>

							<ComboboxList>
								{(item) => (
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

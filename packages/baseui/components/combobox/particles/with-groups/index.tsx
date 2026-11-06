"use client";

import {
	ComboboxRoot,
	ComboboxInputGroup,
	ComboboxContent,
	ComboboxList,
	ComboboxItem,
	ComboboxGroup,
	ComboboxGroupLabel,
	ComboboxSeparator,
	ComboboxCollection,
	ComboboxEmpty,
} from "@craftdotui/baseui/components/combobox";

interface Food {
	value: string;
	label: string;
}

interface FoodGroup {
	label: string;
	items: Food[];
}

const foodGroups: FoodGroup[] = [
	{
		label: "Fruits",
		items: [
			{ value: "apple", label: "Apple" },
			{ value: "banana", label: "Banana" },
			{ value: "blueberry", label: "Blueberry" },
		],
	},
	{
		label: "Vegetables",
		items: [
			{ value: "broccoli", label: "Broccoli" },
			{ value: "carrot", label: "Carrot" },
			{ value: "lettuce", label: "Lettuce" },
		],
	},
];

export default function Particle() {
	return (
		<div className="max-w-64">
			<ComboboxRoot items={foodGroups}>
				<ComboboxInputGroup
					inputProps={{ placeholder: "Select food..." }}
					triggerProps={{}}
				/>

				<ComboboxContent>
					<ComboboxEmpty>
						<p>Fruit not found.</p>
					</ComboboxEmpty>
					<ComboboxList>
						{(group: FoodGroup) => (
							<div key={group.label}>
								<ComboboxGroup items={group.items}>
									<ComboboxGroupLabel>
										{group.label}
									</ComboboxGroupLabel>
									<ComboboxCollection>
										{(item: Food) => (
											<ComboboxItem
												key={item.value}
												value={item}
											>
												{item.label}
											</ComboboxItem>
										)}
									</ComboboxCollection>
								</ComboboxGroup>
								{group.label === "Fruits" && (
									<ComboboxSeparator />
								)}
							</div>
						)}
					</ComboboxList>
				</ComboboxContent>
			</ComboboxRoot>
		</div>
	);
}

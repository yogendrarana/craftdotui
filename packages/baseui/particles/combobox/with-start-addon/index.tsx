"use client";

import { Search } from "lucide-react";
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

interface Fruit {
	value: string;
	label: string;
}

const fruits: Fruit[] = [
	{ value: "apple", label: "Apple" },
	{ value: "banana", label: "Banana" },
	{ value: "blueberry", label: "Blueberry" },
	{ value: "grapes", label: "Grapes" },
	{ value: "pineapple", label: "Pineapple" },
];

export default function Particle() {
	return (
		<div className="max-w-64">
			<ComboboxRoot items={fruits}>
				<ComboboxInput
					placeholder="Search fruits..."
					startAddon={<Search className="size-4" />}
					showTrigger
				/>

				<ComboboxPortal>
					<ComboboxPositioner>
						<ComboboxPopup>
							<ComboboxEmpty>
								<p>Fruit not found.</p>
							</ComboboxEmpty>
							<ComboboxList>
								{(fruit: Fruit) => (
									<ComboboxItem
										key={fruit.value}
										value={fruit}
									>
										{fruit.label}
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

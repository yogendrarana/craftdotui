import {
	AutocompleteRoot,
	AutocompleteInputGroup,
	AutocompleteContent,
	AutocompleteList,
	AutocompleteItem,
	AutocompleteEmpty,
} from "@craftdotui/baseui/components/autocomplete";
import { Search } from "lucide-react";

interface Fruit {
	id: string;
	value: string;
}

const fruits: Fruit[] = [
	{ id: "apple", value: "Apple" },
	{ id: "banana", value: "Banana" },
	{ id: "blueberry", value: "Blueberry" },
	{ id: "grapes", value: "Grapes" },
	{ id: "mango", value: "Mango" },
	{ id: "orange", value: "Orange" },
	{ id: "strawberry", value: "Strawberry" },
];

export default function Particle() {
	return (
		<div className="w-64">
			<AutocompleteRoot items={fruits}>
				<AutocompleteInputGroup
					inputProps={{ placeholder: "Search fruits..." }}
					startAddon={<Search className="size-4" />}
				/>
				<AutocompleteContent>
					<AutocompleteEmpty>No fruits found.</AutocompleteEmpty>
					<AutocompleteList>
						{(fruit: Fruit) => (
							<AutocompleteItem key={fruit.id} value={fruit}>
								{fruit.value}
							</AutocompleteItem>
						)}
					</AutocompleteList>
				</AutocompleteContent>
			</AutocompleteRoot>
		</div>
	);
}

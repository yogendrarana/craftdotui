import {
	AutocompleteRoot,
	AutocompleteInputGroup,
	AutocompleteContent,
	AutocompleteList,
	AutocompleteItem,
	AutocompleteEmpty,
} from "@craftdotui/baseui/components/autocomplete";

interface Fruit {
	id: string;
	value: string;
}

const fruits: Fruit[] = [
	{ id: "apple", value: "Apple" },
	{ id: "banana", value: "Banana" },
	{ id: "blueberry", value: "Blueberry" },
	{ id: "cherry", value: "Cherry" },
	{ id: "grape", value: "Grape" },
	{ id: "mango", value: "Mango" },
	{ id: "orange", value: "Orange" },
	{ id: "peach", value: "Peach" },
	{ id: "pineapple", value: "Pineapple" },
	{ id: "strawberry", value: "Strawberry" },
	{ id: "watermelon", value: "Watermelon" },
];

export default function Example() {
	return (
		<div className="w-64">
			<AutocompleteRoot items={fruits}>
				<AutocompleteInputGroup
					inputProps={{
						placeholder: "Search fruits (e.g. Apple)...",
					}}
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

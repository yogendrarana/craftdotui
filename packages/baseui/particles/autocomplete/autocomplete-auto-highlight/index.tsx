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
	{ id: "grapes", value: "Grapes" },
	{ id: "mango", value: "Mango" },
	{ id: "pineapple", value: "Pineapple" },
	{ id: "watermelon", value: "Watermelon" },
];

export default function Particle() {
	return (
		<div className="w-64">
			<AutocompleteRoot items={fruits} autoHighlight>
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

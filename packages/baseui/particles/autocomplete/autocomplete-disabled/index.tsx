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
	{ id: "mango", value: "Mango" },
];

export default function Particle() {
	return (
		<div className="w-64">
			<AutocompleteRoot items={fruits}>
				<AutocompleteInputGroup
					inputProps={{
						placeholder: "Disabled autocomplete",
						disabled: true,
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

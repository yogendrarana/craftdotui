import {
	Autocomplete,
	AutocompleteInput,
	AutocompletePopup,
	AutocompleteList,
	AutocompleteItem,
	AutocompleteEmpty,
} from "@craftdotui/baseui/components/autocomplete";

interface Tag {
	id: string;
	value: string;
}

const tags: Tag[] = [
	{ id: "1", value: "apple" },
	{ id: "2", value: "mango" },
	{ id: "3", value: "banana" },
	{ id: "4", value: "pineapple" },
	{ id: "5", value: "coconut" },
];

export default function Particle() {
	return (
		<Autocomplete items={tags} autoHighlight>
			<AutocompleteInput placeholder="e.g. feature" />
			<AutocompletePopup>
				<AutocompleteEmpty>Fruit not found.</AutocompleteEmpty>
				<AutocompleteList>
					{(tag: Tag) => (
						<AutocompleteItem key={tag.id} value={tag}>
							{tag.value}
						</AutocompleteItem>
					)}
				</AutocompleteList>
			</AutocompletePopup>
		</Autocomplete>
	);
}

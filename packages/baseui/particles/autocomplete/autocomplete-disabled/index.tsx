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
	{ id: "t1", value: "feature" },
	{ id: "t2", value: "fix" },
	{ id: "t3", value: "bug" },
	{ id: "t4", value: "docs" },
	{ id: "t5", value: "refactor" },
];

export default function Particle() {
	return (
		<Autocomplete items={tags}>
			<AutocompleteInput placeholder="e.g. feature" disabled />
			<AutocompletePopup>
				<AutocompleteEmpty>No tags found.</AutocompleteEmpty>
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

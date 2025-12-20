import {
	Autocomplete,
	AutocompleteInput,
	AutocompletePopup,
	AutocompleteList,
	AutocompleteItem,
	AutocompleteEmpty,
} from "@craftdotui/baseui/components/autocomplete";
import { Search } from "lucide-react";

interface Tag {
	id: string;
	value: string;
}

const tags: Tag[] = [
	{ id: "apple", value: "Apple" },
	{ id: "ball", value: "Ball" },
	{ id: "cat", value: "Cat" },
	{ id: "dog", value: "Dog" },
	{ id: "eagle", value: "Eagle" },
];

export default function Particle() {
	return (
		<Autocomplete items={tags}>
			<AutocompleteInput
				placeholder="Search tags..."
				startAddon={<Search className="size-4" />}
			/>
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

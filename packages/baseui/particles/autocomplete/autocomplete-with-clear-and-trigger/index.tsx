import {
	AutocompleteRoot,
	AutocompleteInput,
	AutocompleteContent,
	AutocompleteList,
	AutocompleteItem,
	AutocompleteEmpty,
} from "@craftdotui/baseui/components/autocomplete";

interface Tag {
	id: string;
	value: string;
}

const tags: Tag[] = [
	{ id: "bug", value: "Bug" },
	{ id: "documentation", value: "Documentation" },
	{ id: "enhancement", value: "Enhancement" },
	{ id: "feature", value: "Feature" },
	{ id: "refactor", value: "Refactor" },
];

export default function Particle() {
	return (
		<div className="w-64">
			<AutocompleteRoot items={tags}>
				<AutocompleteInput
					placeholder="Select or search tags..."
					showClear
					showTrigger
				/>
				<AutocompleteContent>
					<AutocompleteEmpty>No tags found.</AutocompleteEmpty>
					<AutocompleteList>
						{(tag: Tag) => (
							<AutocompleteItem key={tag.id} value={tag}>
								{tag.value}
							</AutocompleteItem>
						)}
					</AutocompleteList>
				</AutocompleteContent>
			</AutocompleteRoot>
		</div>
	);
}

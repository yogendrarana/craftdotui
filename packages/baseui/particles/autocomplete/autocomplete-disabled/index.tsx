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
	{ id: "feature", value: "Feature" },
	{ id: "bug", value: "Bug" },
	{ id: "enhancement", value: "Enhancement" },
	{ id: "documentation", value: "Documentation" },
	{ id: "design", value: "Design" },
];

export default function Particle() {
	return (
		<div className="w-64">
			<AutocompleteRoot items={tags}>
				<AutocompleteInput
					placeholder="Disabled autocomplete"
					disabled
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

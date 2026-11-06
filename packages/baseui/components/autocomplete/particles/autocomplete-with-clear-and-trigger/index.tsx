import {
	AutocompleteRoot,
	AutocompleteInputGroup,
	AutocompleteContent,
	AutocompleteList,
	AutocompleteItem,
	AutocompleteEmpty,
} from "@craftdotui/baseui/components/autocomplete";

interface Book {
	id: string;
	value: string;
}

const books: Book[] = [
	{ id: "1984", value: "1984" },
	{ id: "brave-new-world", value: "Brave New World" },
	{ id: "dune", value: "Dune" },
	{ id: "great-gatsby", value: "The Great Gatsby" },
	{ id: "hobbit", value: "The Hobbit" },
	{ id: "to-kill-a-mockingbird", value: "To Kill a Mockingbird" },
];

export default function Particle() {
	return (
		<div className="w-64">
			<AutocompleteRoot items={books}>
				<AutocompleteInputGroup
					inputProps={{ placeholder: "Select or search books..." }}
					clearProps={{}}
					triggerProps={{}}
				/>
				<AutocompleteContent>
					<AutocompleteEmpty>No books found.</AutocompleteEmpty>
					<AutocompleteList>
						{(book: Book) => (
							<AutocompleteItem key={book.id} value={book}>
								{book.value}
							</AutocompleteItem>
						)}
					</AutocompleteList>
				</AutocompleteContent>
			</AutocompleteRoot>
		</div>
	);
}

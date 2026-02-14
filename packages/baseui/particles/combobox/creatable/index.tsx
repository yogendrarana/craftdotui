"use client";

import * as React from "react";
import { Plus } from "lucide-react";
import {
	ComboboxRoot,
	ComboboxInput,
	ComboboxPositioner,
	ComboboxPopup,
	ComboboxList,
	ComboboxItem,
	ComboboxPortal,
} from "@craftdotui/baseui/components/combobox";

const initialFrameworks = [
	{ value: "react", label: "React" },
	{ value: "vue", label: "Vue" },
	{ value: "svelte", label: "Svelte" },
];

export default function Particle() {
	const [frameworks, setFrameworks] = React.useState(initialFrameworks);
	const [searchValue, setSearchValue] = React.useState("");

	const showCreatable =
		searchValue.length > 0 &&
		!frameworks.some(
			(f) => f.label.toLowerCase() === searchValue.toLowerCase(),
		);

	const handleCreate = () => {
		const newValue = searchValue.toLowerCase().replace(/\s+/g, "-");
		const newFramework = { value: newValue, label: searchValue };
		setFrameworks([...frameworks, newFramework]);
		setSearchValue("");
	};

	return (
		<div className="max-w-64">
			<ComboboxRoot
				items={frameworks}
				inputValue={searchValue}
				onInputValueChange={setSearchValue}
			>
				<ComboboxInput placeholder="Select or create..." showTrigger />

				<ComboboxPortal>
					<ComboboxPositioner>
						<ComboboxPopup>
							<ComboboxList>
								{(item) => (
									<ComboboxItem key={item.value} value={item}>
										{item.label}
									</ComboboxItem>
								)}
							</ComboboxList>
							{showCreatable && (
								<div className="p-1 border-t border-border">
									<button
										type="button"
										onClick={handleCreate}
										className="relative flex w-full cursor-pointer select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-accent hover:text-accent-foreground text-primary font-medium"
									>
										<Plus className="size-4" />
										Create "{searchValue}"
									</button>
								</div>
							)}
						</ComboboxPopup>
					</ComboboxPositioner>
				</ComboboxPortal>
			</ComboboxRoot>
		</div>
	);
}

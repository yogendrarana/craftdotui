"use client";

import { Button } from "@craftdotui/baseui/components/button";
import {
	ComboboxRoot,
	ComboboxInput,
	ComboboxPositioner,
	ComboboxPopup,
	ComboboxList,
	ComboboxItem,
	ComboboxPortal,
	ComboboxTrigger,
	ComboboxValue,
	ComboboxEmpty,
	ComboboxIcon,
} from "@craftdotui/baseui/components/combobox";

interface Framework {
	value: string;
	label: string;
}

const frameworks: Framework[] = [
	{ value: "react", label: "React" },
	{ value: "vue", label: "Vue" },
	{ value: "svelte", label: "Svelte" },
	{ value: "solid", label: "Solid" },
];

export default function Particle() {
	return (
		<ComboboxRoot items={frameworks}>
			<ComboboxTrigger
				render={
					<Button
						variant="outline"
						className="w-48 flex justify-between"
					/>
				}
			>
				<ComboboxValue>
					{(value: Framework) =>
						value ? (
							value.label
						) : (
							<span className="text-muted-foreground">
								Select Framework
							</span>
						)
					}
				</ComboboxValue>
				<ComboboxIcon />
			</ComboboxTrigger>

			<ComboboxPortal>
				<ComboboxPositioner align="start">
					<ComboboxPopup>
						<div className="border-b p-2">
							<ComboboxInput placeholder="Search..." />
						</div>

						<ComboboxEmpty>No frameworks found.</ComboboxEmpty>

						<ComboboxList>
							{(item: Framework) => (
								<ComboboxItem key={item.value} value={item}>
									{item.label}
								</ComboboxItem>
							)}
						</ComboboxList>
					</ComboboxPopup>
				</ComboboxPositioner>
			</ComboboxPortal>
		</ComboboxRoot>
	);
}

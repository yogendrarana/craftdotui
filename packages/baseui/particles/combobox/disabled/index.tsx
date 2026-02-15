"use client";

import {
	ComboboxRoot,
	ComboboxInput,
	ComboboxPositioner,
	ComboboxPopup,
	ComboboxList,
	ComboboxItem,
	ComboboxPortal,
} from "@craftdotui/baseui/components/combobox";

const options = [
	{ value: "1", label: "Option 1" },
	{ value: "2", label: "Option 2" },
];

export default function Particle() {
	return (
		<ComboboxRoot disabled items={options}>
			<div className="w-64">
				<ComboboxInput placeholder="Disabled combobox" showTrigger />
			</div>

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
					</ComboboxPopup>
				</ComboboxPositioner>
			</ComboboxPortal>
		</ComboboxRoot>
	);
}

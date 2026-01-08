import {
	Select,
	SelectTrigger,
	SelectValue,
	SelectPortal,
	SelectPositioner,
	SelectPopup,
	SelectItem,
	SelectItemList,
} from "@craftdotui/baseui/components/select";

const fonts = [
	{ label: "Select font", value: null },
	{ label: "Sans-serif", value: "sans" },
	{ label: "Serif", value: "serif" },
	{ label: "Monospace", value: "mono" },
	{ label: "Cursive", value: "cursive" },
];

export default function Particle() {
	return (
		<div className="w-full max-w-50">
			<Select items={fonts}>
				<SelectTrigger>
					<SelectValue />
				</SelectTrigger>

				<SelectPortal>
					<SelectPositioner>
						<SelectPopup>
							<SelectItemList>
								{fonts.map((font) => (
									<SelectItem
										key={font.value}
										value={font.value}
									>
										{font.label}
									</SelectItem>
								))}
							</SelectItemList>
						</SelectPopup>
					</SelectPositioner>
				</SelectPortal>
			</Select>
		</div>
	);
}

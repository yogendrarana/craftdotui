import {
	SelectContent,
	SelectItem,
	SelectRoot,
	SelectTrigger,
	SelectValue,
} from "@craftdotui/baseui/components/select";

const fonts = [
	{ label: "Select font", value: null },
	{ label: "Sans-serif", value: "sans" },
	{ label: "Serif", value: "serif" },
	{ label: "Monospace", value: "mono" },
	{ label: "Cursive", value: "cursive" },
];

export function Particle() {
	return (
		<div className="w-full max-w-50">
			<SelectRoot items={fonts}>
				<SelectTrigger>
					<SelectValue />
				</SelectTrigger>

				<SelectContent>
					{fonts.map((font) => (
						<SelectItem key={font.value} value={font.value}>
							{font.label}
						</SelectItem>
					))}
				</SelectContent>
			</SelectRoot>
		</div>
	);
}

export default Particle;

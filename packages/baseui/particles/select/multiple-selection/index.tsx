import {
	SelectContent,
	SelectItem,
	SelectRoot,
	SelectTrigger,
	SelectValue,
} from "@craftdotui/baseui/components/select";

const languages = {
	javascript: "JavaScript",
	typescript: "TypeScript",
	python: "Python",
	java: "Java",
	csharp: "C#",
	php: "PHP",
	cpp: "C++",
	rust: "Rust",
	go: "Go",
	swift: "Swift",
};

type Language = keyof typeof languages;

const values = Object.keys(languages) as Language[];

function renderValue(value: Language[]) {
	if (value.length === 0) {
		return "Select languages...";
	}

	const firstLanguage = languages[value[0]];
	const additionalLanguages =
		value.length > 1 ? ` (+${value.length - 1} more)` : "";
	return firstLanguage + additionalLanguages;
}

export function Particle() {
	return (
		<div className="w-full max-w-50">
			<SelectRoot defaultValue={["javascript", "typescript"]} multiple>
				<SelectTrigger>
					<SelectValue>{renderValue}</SelectValue>
				</SelectTrigger>

				<SelectContent alignItemWithTrigger={false}>
					{values.map((value) => (
						<SelectItem key={value} value={value}>
							{languages[value]}
						</SelectItem>
					))}
				</SelectContent>
			</SelectRoot>
		</div>
	);
}

export default Particle;

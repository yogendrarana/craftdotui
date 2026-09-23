"use client";
import * as React from "react";
import {
	CheckboxRoot,
	CheckboxIndicator,
} from "@craftdotui/baseui/components/checkbox";
import { CheckboxGroupRoot } from "@craftdotui/baseui/components/checkbox-group";

const frameworks = [
	{ id: "react", label: "React" },
	{ id: "vue", label: "Vue" },
	{ id: "svelte", label: "Svelte" },
];

export default function Particle() {
	const id = React.useId();
	const [value, setValue] = React.useState<string[]>([]);

	return (
		<CheckboxGroupRoot
			aria-labelledby={id}
			defaultValue={["react"]}
			value={value}
			onValueChange={setValue}
			allValues={frameworks.map((framework) => framework.id)}
			className="flex flex-col items-start gap-1"
		>
			<div className="flex items-center gap-2 cursor-pointer">
				<CheckboxRoot name="JavaScript" parent>
					<CheckboxIndicator />
				</CheckboxRoot>
				<span>JavaScript</span>
			</div>

			{frameworks.map((framework) => (
				<div
					key={framework.id}
					className="ms-4 flex items-center gap-2 cursor-pointer"
				>
					<CheckboxRoot
						id={`${id}-${framework.id}`}
						value={framework.id}
					>
						<CheckboxIndicator />
					</CheckboxRoot>
					<span>{framework.label}</span>
				</div>
			))}
		</CheckboxGroupRoot>
	);
}

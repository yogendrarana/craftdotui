"use client";

import * as React from "react";
import {
	Checkbox,
	CheckboxIndicator,
} from "@craftdotui/baseui/components/checkbox";
import { CheckboxGroup } from "@craftdotui/baseui/components/checkbox-group";

const frontendFrameworks = ["react", "vue", "svelte"];
const reactFrameworks = ["next", "remix"];

export default function LanguageFrameworkTree() {
	const [frontendValues, setFrontendValues] = React.useState<string[]>([]);
	const [reactValues, setReactValues] = React.useState<string[]>([]);

	return (
		<CheckboxGroup
			value={frontendValues}
			allValues={frontendFrameworks}
			onValueChange={(value) => {
				const wasReactSelected = frontendValues.includes("react");
				const isReactSelected = value.includes("react");

				if (isReactSelected && !wasReactSelected) {
					setReactValues(reactFrameworks);
				} else if (!isReactSelected && wasReactSelected) {
					setReactValues([]);
				}

				setFrontendValues(value);
			}}
		>
			<div className="flex items-center gap-2 cursor-pointer">
				<Checkbox
					name="javascript"
					parent
					indeterminate={
						(reactValues.length > 0 &&
							reactValues.length !== reactFrameworks.length) ||
						(frontendValues.length > 0 &&
							frontendValues.length !== frontendFrameworks.length)
					}
				>
					<CheckboxIndicator />
				</Checkbox>
				<span>Frontend</span>
			</div>

			<div className="ms-4 flex items-center gap-2 cursor-pointer">
				<Checkbox value="vue">
					<CheckboxIndicator />
				</Checkbox>
				<span>Vue</span>
			</div>

			<div className="ms-4 flex items-center gap-2 cursor-pointer">
				<Checkbox value="svelte">
					<CheckboxIndicator />
				</Checkbox>
				<span>Svelte</span>
			</div>

			<CheckboxGroup
				value={reactValues}
				allValues={reactFrameworks}
				onValueChange={(value) => {
					if (value.length === reactFrameworks.length) {
						setFrontendValues((prev) =>
							Array.from(new Set([...prev, "react"])),
						);
					} else {
						setFrontendValues((prev) =>
							prev.filter((value) => value !== "react"),
						);
					}

					setReactValues(value);
				}}
			>
				<div className="ms-4 flex items-center gap-2 cursor-pointer">
					<Checkbox
						parent
						indeterminate={
							reactValues.length > 0 &&
							reactValues.length !== reactFrameworks.length
						}
					>
						<CheckboxIndicator />
					</Checkbox>
					<span>React</span>
				</div>

				{reactFrameworks.map((framework) => (
					<div
						key={framework}
						className="ms-8 flex items-center gap-2 cursor-pointer"
					>
						<Checkbox name={framework} value={framework}>
							<CheckboxIndicator />
						</Checkbox>
						<span className="capitalize">{framework}</span>
					</div>
				))}
			</CheckboxGroup>
		</CheckboxGroup>
	);
}

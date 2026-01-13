"use client";
import * as React from "react";
import {
	Checkbox,
	CheckboxIndicator,
} from "@craftdotui/baseui/components/checkbox";
import { CheckboxGroup } from "@craftdotui/baseui/components/checkbox-group";

export default function Particle() {
	const id = React.useId();

	return (
		<CheckboxGroup
			aria-labelledby={id}
			defaultValue={["react"]}
			className="flex flex-col items-start gap-1"
		>
			<div className="flex items-center gap-2 cursor-pointer">
				<Checkbox id={`${id}-react`} value="react">
					<CheckboxIndicator />
				</Checkbox>
				<span>React</span>
			</div>

			<div className="flex items-center gap-2 cursor-pointer">
				<Checkbox id={`${id}-vue`} value="vue">
					<CheckboxIndicator />
				</Checkbox>
				<span>Vue</span>
			</div>

			<div className="flex items-center gap-2 cursor-pointer">
				<Checkbox id={`${id}-svelte`} value="svelte">
					<CheckboxIndicator />
				</Checkbox>
				<span>Svelte</span>
			</div>
		</CheckboxGroup>
	);
}

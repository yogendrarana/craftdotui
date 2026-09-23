"use client";
import * as React from "react";
import {
	CheckboxRoot,
	CheckboxIndicator,
} from "@craftdotui/baseui/components/checkbox";
import { CheckboxGroupRoot } from "@craftdotui/baseui/components/checkbox-group";

export default function Particle() {
	const id = React.useId();

	return (
		<CheckboxGroupRoot
			aria-labelledby={id}
			defaultValue={["react"]}
			className="flex flex-col items-start gap-1"
		>
			<div className="flex items-center gap-2 cursor-pointer">
				<CheckboxRoot id={`${id}-react`} value="react">
					<CheckboxIndicator />
				</CheckboxRoot>
				<span>React</span>
			</div>

			<div className="flex items-center gap-2 cursor-pointer">
				<CheckboxRoot id={`${id}-vue`} value="vue">
					<CheckboxIndicator />
				</CheckboxRoot>
				<span>Vue</span>
			</div>

			<div className="flex items-center gap-2 cursor-pointer">
				<CheckboxRoot id={`${id}-svelte`} value="svelte">
					<CheckboxIndicator />
				</CheckboxRoot>
				<span>Svelte</span>
			</div>
		</CheckboxGroupRoot>
	);
}

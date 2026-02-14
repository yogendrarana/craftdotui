"use client";

import { useState } from "react";
import type { FormEvent } from "react";

import {
	Field,
	FieldError,
	FieldLabel,
} from "@craftdotui/baseui/components/field";
import { Form } from "@craftdotui/baseui/components/form";
import { Input } from "@craftdotui/baseui/components/input";
import { Button } from "@craftdotui/baseui/components/button";

export default function Particle() {
	const [loading, setLoading] = useState(false);

	const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const formData = new FormData(e.currentTarget);
		setLoading(true);
		await new Promise((r) => setTimeout(r, 800));
		setLoading(false);
		alert(`Email: ${formData.get("email") || ""}`);
	};

	return (
		<Form className="max-w-64" onSubmit={onSubmit}>
			<Field name="email">
				<FieldLabel>Email</FieldLabel>
				<Input
					disabled={loading}
					placeholder="example@gmail.com"
					required
					type="email"
				/>
				<FieldError>Please enter a valid email.</FieldError>
			</Field>
			<Button disabled={loading} type="submit">
				Submit
			</Button>
		</Form>
	);
}

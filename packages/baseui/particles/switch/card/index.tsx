"use client";

import { useState } from "react";
import { Switch } from "@craftdotui/baseui/components/switch";

const items = [
	{
		id: "notifications",
		title: "Notifications",
		description: "Receive daily digest emails.",
	},
	{
		id: "marketing",
		title: "Marketing",
		description: "Receive emails about new products.",
	},
	{
		id: "security",
		title: "Security",
		description: "Receive emails about account activity.",
	},
];

export function Particle() {
	const [selected, setSelected] = useState<string[]>(["notifications"]);

	const toggle = (id: string) => {
		setSelected((prev) =>
			prev.includes(id)
				? prev.filter((item) => item !== id)
				: [...prev, id],
		);
	};

	return (
		<div className="w-full max-w-md space-y-3">
			{items.map((item) => (
				<div
					key={item.id}
					className="flex flex-row items-center justify-between rounded-lg border p-4"
				>
					<div className="space-y-0.5">
						<label
							htmlFor={item.id}
							className="text-base font-medium cursor-pointer"
						>
							{item.title}
						</label>
						<p className="text-sm text-muted-foreground">
							{item.description}
						</p>
					</div>
					<Switch
						id={item.id}
						checked={selected.includes(item.id)}
						onCheckedChange={() => toggle(item.id)}
					/>
				</div>
			))}
		</div>
	);
}

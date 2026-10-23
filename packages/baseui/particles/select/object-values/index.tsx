"use client";

import {
	SelectContent,
	SelectItem,
	SelectRoot,
	SelectTrigger,
	SelectValue,
} from "@craftdotui/baseui/components/select";

const items = [
	{ command: "npm create node-blueprint", label: "NPM", value: "npm" },
	{ command: "yarn create node-blueprint", label: "Yarn", value: "yarn" },
	{ command: "pnpm create node-blueprint", label: "PNPM", value: "pnpm" },
];

export function Particle() {
	return (
		<div className="w-full max-w-80">
			<SelectRoot
				defaultValue={items[0]}
				itemToStringValue={(item) => item.value}
			>
				<SelectTrigger className="py-2">
					<SelectValue>
						{(item) => (
							<span className="flex flex-col items-start">
								<span className="truncate">{item.label}</span>
								<span className="truncate text-muted-foreground text-xs">
									{item.command}
								</span>
							</span>
						)}
					</SelectValue>
				</SelectTrigger>
				<SelectContent>
					{items.map((item) => (
						<SelectItem key={item.value} value={item}>
							<span className="flex flex-col">
								<span className="truncate">{item.label}</span>
								<span className="truncate text-muted-foreground text-xs">
									{item.command}
								</span>
							</span>
						</SelectItem>
					))}
				</SelectContent>
			</SelectRoot>
		</div>
	);
}

export default Particle;

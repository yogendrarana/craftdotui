"use client";

import { Tabs } from "@craftdotui/baseui/components/tabs";

export function Preview09() {
	return (
		<div
			className="border border-border bg-card text-card-foreground p-4 space-y-3"
			style={{
				borderRadius: "var(--radius-xl)",
				boxShadow: "var(--shadow-sm)",
			}}
		>
			<Tabs.Root defaultValue="account">
				<Tabs.List>
					<Tabs.Tab value="account">Account</Tabs.Tab>
					<Tabs.Tab value="tokens">Tokens</Tabs.Tab>
					<Tabs.Tab value="security">Security</Tabs.Tab>
				</Tabs.List>
				<Tabs.Panel
					value="account"
					className="mt-3 p-3 bg-muted/50 border border-border text-xs text-muted-foreground"
					style={{ borderRadius: "var(--radius)" }}
				>
					Active tab indicator and muted panel inherit{" "}
					<code className="font-mono text-foreground">--muted</code>{" "}
					and{" "}
					<code className="font-mono text-foreground">
						--background
					</code>
					.
				</Tabs.Panel>
				<Tabs.Panel
					value="tokens"
					className="mt-3 p-3 bg-muted/50 border border-border text-xs text-muted-foreground"
					style={{ borderRadius: "var(--radius)" }}
				>
					100% compatible with shadcn/ui and Tailwind CSS v4.
				</Tabs.Panel>
				<Tabs.Panel
					value="security"
					className="mt-3 p-3 bg-muted/50 border border-border text-xs text-muted-foreground"
					style={{ borderRadius: "var(--radius)" }}
				>
					End-to-end token validation enabled.
				</Tabs.Panel>
			</Tabs.Root>
		</div>
	);
}

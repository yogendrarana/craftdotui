"use client";

import * as React from "react";
import { EyeIcon, Code2Icon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Registry } from "@/__registry__";
import { CodeRenderer } from "@/components/mdx/code-renderer";
import { InstallCommandDropdown } from "./install-command";
import { ComponentPreview } from "./component-preview";
import {
	Tabs,
	TabsList,
	TabsPanel,
	TabsTab,
} from "@craftdotui/baseui/components/tabs";

interface ComponentPreviewProps extends React.HTMLAttributes<HTMLDivElement> {
	name: string;
	hasReTrigger?: boolean;
}

export function ComponentCodePreview({
	name,
	className,
	hasReTrigger = false,
	...props
}: ComponentPreviewProps) {
	const [key, _] = React.useState(0);

	const registryItem = Registry[name];

	const Code = React.useMemo(() => {
		if (registryItem?.files?.[0]?.content) {
			return registryItem.files[0].content;
		}
		return (
			<p className="text-sm text-muted-foreground">
				Code for <code className="mx-1">{name}</code> not found.
			</p>
		);
	}, [registryItem, name]);

	return (
		<Tabs
			defaultValue="preview"
			className={cn("w-full flex flex-col", className)}
			{...props}
		>
			{/* header */}
			<div className="mb-2 flex items-center justify-between rounded-md">
				<TabsList>
					<TabsTab value="preview">
						<EyeIcon className="size-4" />
						Preview
					</TabsTab>

					<TabsTab value="code">
						<Code2Icon className="size-4" />
						Code
					</TabsTab>
				</TabsList>

				<div className="flex items-center gap-2">
					<InstallCommandDropdown pkg={registryItem.command} />
				</div>
			</div>

			{/* component and code */}
			<div className="relative min-h-100 w-full border rounded-lg flex items-center justify-center p-1.5">
				<TabsPanel value="preview" className="w-full">
					<div className="h-100 w-full flex justify-center items-center border border-dashed rounded-md">
						<ComponentPreview
							name={name}
							key={key}
							hasReTrigger={hasReTrigger}
						/>
					</div>
				</TabsPanel>

				<TabsPanel value="code" className="w-full">
					<CodeRenderer
						className="h-100 w-full border rounded-md"
						code={Code}
					/>
				</TabsPanel>
			</div>
		</Tabs>
	);
}

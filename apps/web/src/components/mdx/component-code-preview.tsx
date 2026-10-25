"use client";

import * as React from "react";
import { XIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Registry } from "@/__registry__";
import { CodeRenderer } from "@/components/mdx/code-renderer";
import { InstallCommandDropdown } from "./install-command";
import { ComponentPreview } from "./component-preview";

import {
	DrawerClose,
	DrawerContent,
	DrawerHeader,
	DrawerPanel,
	DrawerRoot,
	DrawerTitle,
	DrawerTrigger,
} from "@craftdotui/baseui/components/drawer";
import { Button, buttonVariants } from "@craftdotui/baseui/components/button";

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
	const [key] = React.useState(0);

	const registryItem = Registry[name];

	const code = React.useMemo(() => {
		if (registryItem?.files?.[0]?.content) {
			return registryItem.files[0].content;
		}
		return `// Code for ${name} not found.`;
	}, [registryItem, name]);

	return (
		<div
			className={cn(
				"relative my-4 w-full border border-border rounded-md overflow-hidden bg-background",
				className,
			)}
			{...props}
		>
			{/* Component preview surface */}
			<div className="relative min-h-88 w-full p-6 flex items-center justify-center bg-background">
				<ComponentPreview
					name={name}
					key={key}
					hasReTrigger={hasReTrigger}
				/>
			</div>

			{/* Bottom action bar */}
			<div className="px-3.5 py-2.5 flex flex-wrap items-center justify-between gap-2 border-t border-border bg-muted/40">
				<DrawerRoot position="right" variant="inset">
					<DrawerTrigger
						render={
							<Button
								variant="outline"
								size="sm"
								className="h-8 text-xs rounded-md cursor-pointer"
							/>
						}
					>
						View code
					</DrawerTrigger>

					<DrawerContent
						showHandle={false}
						popupProps={{
							className: "w-full sm:w-[550px] md:w-[640px]",
						}}
					>
						<DrawerHeader className="flex-row items-center justify-between border-b px-6 pt-5 pb-3 select-none">
							<DrawerTitle className="text-base font-semibold">
								Installation
							</DrawerTitle>

							<DrawerClose
								className={cn(
									buttonVariants({
										variant: "outline",
										size: "icon-sm",
									}),
									"rounded-md cursor-pointer",
								)}
								aria-label="Close code drawer"
							>
								<XIcon className="size-4" />
							</DrawerClose>
						</DrawerHeader>

						<DrawerPanel className="overflow-hidden flex flex-col">
							<CodeRenderer
								code={code}
								className="h-full w-full border rounded-md"
							/>
						</DrawerPanel>
					</DrawerContent>
				</DrawerRoot>

				<InstallCommandDropdown pkg={registryItem?.command} />
			</div>
		</div>
	);
}

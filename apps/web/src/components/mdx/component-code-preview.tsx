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

import { buttonVariants } from "@craftdotui/baseui/components/button";

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
				"relative w-full border border-border rounded-xl overflow-hidden bg-background",
				className,
			)}
			{...props}
		>
			{/* Component preview */}
			<div className="relative h-100 w-full p-2 flex items-center justify-center">
				<ComponentPreview
					name={name}
					key={key}
					hasReTrigger={hasReTrigger}
				/>
			</div>

			{/* Bottom action bar */}
			<div className="px-3 py-2.5 flex items-center justify-between gap-2 border-t border-border bg-muted/10">
				<DrawerRoot position="right" variant="inset">
					<DrawerTrigger
						className={cn(
							buttonVariants({ variant: "outline", size: "sm" }),
							"gap-1.5 h-8 text-xs font-medium cursor-pointer rounded-md",
						)}
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
										variant: "ghost",
										size: "icon-sm",
									}),
									"rounded-md cursor-pointer",
								)}
								aria-label="Close code drawer"
							>
								<XIcon className="size-4" />
							</DrawerClose>
						</DrawerHeader>

						<DrawerPanel className="p-4 sm:p-6 overflow-hidden flex flex-col">
							<CodeRenderer
								code={code}
								className="h-full w-full border rounded-lg"
							/>
						</DrawerPanel>
					</DrawerContent>
				</DrawerRoot>

				<InstallCommandDropdown pkg={registryItem?.command} />
			</div>
		</div>
	);
}

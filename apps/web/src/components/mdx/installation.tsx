"use client";

import {
	Tabs,
	TabsList,
	TabsPanel,
	TabsTab,
} from "@craftdotui/baseui/components/tabs";
import { cn } from "@/lib/utils";
import { Registry } from "@/__registry__";
import { ComponentSource } from "./component-source";
import { InstallCommandTabs } from "./install-command";

interface PropType {
	name: string;
	className?: string;
}

export function Installation({ name, className }: PropType) {
	const registryItem = Registry[name];

	if (!registryItem) {
		return (
			<div className="py-10 border bord-border border-dashed rounded-sm">
				Component <code className="mx-1">{name}</code> not found (404
				NOT FOUND)
			</div>
		);
	}

	return (
		<Tabs
			defaultValue="cli"
			className={cn("w-full flex flex-col gap-4", className)}
		>
			<TabsList>
				<TabsTab value="cli">CLI</TabsTab>
				<TabsTab value="manual">Manual</TabsTab>
			</TabsList>

			<TabsPanel value="cli">
				<InstallCommandTabs
					type="registry"
					pkg={registryItem.command}
				/>
			</TabsPanel>

			<TabsPanel value="manual">
				<div className="flex flex-col gap-4 text-sm">
					{registryItem.dependencies.length > 0 && (
						<div>
							<h3 className="font-medium mb-1">
								Install Required Packages
							</h3>
							<InstallCommandTabs
								type="package"
								pkg={(registryItem.dependencies || []).join(
									" ",
								)}
							/>
						</div>
					)}

					{registryItem.registryDependencies.length > 0 && (
						<div>
							<h3 className="font-medium mb-1">
								Install Registry Dependencies
							</h3>
							<InstallCommandTabs
								type="registry"
								pkg={(
									registryItem.registryDependencies || []
								).join(" ")}
							/>
						</div>
					)}

					<div>
						<h3 className="font-medium mb-1">
							Copy Component Code
						</h3>

						<ComponentSource name={registryItem.name} />
					</div>
				</div>
			</TabsPanel>
		</Tabs>
	);
}

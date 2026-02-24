"use client";

import React from "react";
import {
	MenuRoot,
	MenuTrigger,
	MenuItem,
	MenuPortal,
	MenuPositioner,
	MenuPopup,
} from "@craftdotui/baseui/components/menu";

import {
	Tooltip,
	TooltipPortal,
	TooltipPositioner,
	TooltipPopup,
	TooltipTrigger,
} from "@craftdotui/baseui/components/tooltip";

import { cn } from "@craftdotui/lib/utils";
import { CopyButton } from "./copy-button";
import type { PackageManager } from "@/types";
import { packageManagerCommands } from "@/constants";

function useInstallCommand(pkg: string) {
	const [hasCopied, setHasCopied] = React.useState(false);
	const [packageManager, setPackageManager] =
		React.useState<PackageManager>("npm");

	const installCommand = `${packageManagerCommands[packageManager]} ${pkg}`;

	const onCopy = () => {
		navigator.clipboard.writeText(installCommand);
		setHasCopied(true);
	};

	React.useEffect(() => {
		if (hasCopied) {
			const timeout = setTimeout(() => setHasCopied(false), 2000);
			return () => clearTimeout(timeout);
		}
	}, [hasCopied]);

	return {
		hasCopied,
		packageManager,
		setPackageManager,
		installCommand,
		onCopy,
	};
}

// COMPONENT 1 — DROPDOWN VERSION

export function InstallCommandDropdown({ pkg }: { pkg: string }) {
	const {
		hasCopied,
		packageManager,
		setPackageManager,
		installCommand,
		onCopy,
	} = useInstallCommand(pkg);

	return (
		<div className="hidden md:flex items-center justify-between cursor-pointer border border-border border-dashed rounded-md overflow-hidden">
			<Tooltip>
				<TooltipTrigger
					render={
						<button
							type="button"
							onClick={onCopy}
							className="px-2 text-xs text-muted-foreground cursor-pointer max-w-75 truncate"
						>
							{hasCopied ? "Copied!" : installCommand}
						</button>
					}
				/>

				<TooltipPortal>
					<TooltipPositioner sideOffset={10}>
						<TooltipPopup
							hideTooltipArrow
							className="max-w-150 bg-muted"
						>
							<code className="text-xs">{installCommand}</code>
						</TooltipPopup>
					</TooltipPositioner>
				</TooltipPortal>
			</Tooltip>

			<MenuRoot>
				<MenuTrigger
					render={
						<button
							type="button"
							className="h-full px-3 py-1.5 cursor-pointer text-xs font-medium bg-muted"
						>
							{packageManager}
						</button>
					}
				/>

				<MenuPortal>
					<MenuPositioner>
						<MenuPopup className="w-28">
							{["npm", "pnpm", "yarn", "bun"].map((pm) => (
								<MenuItem
									key={pm}
									onClick={() =>
										setPackageManager(pm as PackageManager)
									}
									className="text-xs"
								>
									{pm}
								</MenuItem>
							))}
						</MenuPopup>
					</MenuPositioner>
				</MenuPortal>
			</MenuRoot>
		</div>
	);
}

// COMPONENT 2 — TAB VERSION (Your custom UI)

export function InstallCommandTabs({
	pkg,
	className,
}: {
	pkg: string;
	className?: string;
}) {
	const { packageManager, setPackageManager, installCommand } =
		useInstallCommand(pkg);

	return (
		<div className={cn("rounded-md border text-sm", className)}>
			{/* Header */}
			<div className="p-3 flex items-center justify-between">
				<div className="flex gap-5">
					{(
						Object.keys(packageManagerCommands) as PackageManager[]
					).map((pm) => (
						<button
							type="button"
							key={pm}
							onClick={() => setPackageManager(pm)}
							className={cn(
								"cursor-pointer",
								pm === packageManager
									? "text-foreground font-semibold"
									: "text-muted-foreground font-light",
							)}
						>
							{pm}
						</button>
					))}
				</div>

				<CopyButton value={installCommand} />
			</div>

			{/* Command Row */}
			<div className="p-3 border-t flex justify-between items-center">
				{installCommand}
			</div>
		</div>
	);
}

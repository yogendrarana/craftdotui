"use client";

import React from "react";
import { Check, Copy, Terminal } from "lucide-react";
import {
	TooltipRoot,
	TooltipContent,
	TooltipTrigger,
} from "@craftdotui/baseui/components/tooltip";

import { cn } from "@/lib/utils";
import { CopyButton } from "./copy-button";
import type { PackageManager } from "@/types";
import { packageInstallCommands, packageManagerCommands } from "@/constants";
import {
	SelectItem,
	SelectItemList,
	SelectPopup,
	SelectPortal,
	SelectPositioner,
	SelectRoot,
	SelectTrigger,
	SelectValue,
} from "@craftdotui/baseui/components/select";

function useInstallCommand(
	pkg: string,
	type: "package" | "registry" = "registry",
) {
	const [hasCopied, setHasCopied] = React.useState(false);
	const [packageManager, setPackageManager] =
		React.useState<PackageManager>("npm");

	React.useEffect(() => {
		const handleStorageChange = () => {
			const saved = localStorage.getItem(
				"craftdotui-pm",
			) as PackageManager;
			if (saved && ["npm", "pnpm", "yarn", "bun"].includes(saved)) {
				setPackageManager(saved);
			}
		};

		handleStorageChange();
		window.addEventListener("storage", handleStorageChange);
		window.addEventListener("craftdotui-pm-change", handleStorageChange);
		return () => {
			window.removeEventListener("storage", handleStorageChange);
			window.removeEventListener(
				"craftdotui-pm-change",
				handleStorageChange,
			);
		};
	}, []);

	const handleSetPackageManager = (pm: PackageManager) => {
		setPackageManager(pm);
		localStorage.setItem("craftdotui-pm", pm);
		window.dispatchEvent(new Event("craftdotui-pm-change"));
	};

	const commands =
		type === "package" ? packageInstallCommands : packageManagerCommands;
	const installCommand = pkg ? `${commands[packageManager]} ${pkg}` : "";

	const onCopy = () => {
		if (!installCommand) return;
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
		setPackageManager: handleSetPackageManager,
		installCommand,
		onCopy,
	};
}

const PACKAGE_MANAGERS: PackageManager[] = ["npm", "pnpm", "yarn", "bun"];

// COMPONENT 1 — DROPDOWN VERSION
export function InstallCommandDropdown({
	pkg,
	type = "registry",
	className,
}: {
	pkg?: string;
	type?: "package" | "registry";
	className?: string;
}) {
	const {
		hasCopied,
		packageManager,
		setPackageManager,
		installCommand,
		onCopy,
	} = useInstallCommand(pkg ?? "", type);

	if (!pkg) return null;

	return (
		<div
			className={cn(
				"inline-flex items-center border border-border rounded-md overflow-hidden bg-background h-8 text-xs divide-x divide-border",
				className,
			)}
		>
			<SelectRoot
				value={packageManager}
				onValueChange={(val) => {
					if (val) setPackageManager(val as PackageManager);
				}}
			>
				<SelectTrigger
					variant="unstyled"
					className="h-full px-2.5 text-xs font-medium bg-muted/40 hover:bg-muted border-r border-border rounded-none cursor-pointer gap-1.5 w-auto select-none"
				>
					<SelectValue />
				</SelectTrigger>

				<SelectPortal>
					<SelectPositioner sideOffset={4} align="start">
						<SelectPopup className="min-w-24 rounded-md border border-border">
							<SelectItemList>
								{PACKAGE_MANAGERS.map((pm) => (
									<SelectItem
										key={pm}
										value={pm}
										className="text-xs rounded-sm"
									>
										{pm}
									</SelectItem>
								))}
							</SelectItemList>
						</SelectPopup>
					</SelectPositioner>
				</SelectPortal>
			</SelectRoot>

			<TooltipRoot>
				<TooltipTrigger
					render={
						<button
							type="button"
							onClick={onCopy}
							className="px-2.5 h-full inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground hover:bg-muted/40 cursor-pointer max-w-72 truncate transition-colors font-mono"
						>
							<span className="truncate">{installCommand}</span>
							{hasCopied ? (
								<Check className="size-3.5 text-foreground shrink-0" />
							) : (
								<Copy className="size-3.5 text-muted-foreground shrink-0" />
							)}
						</button>
					}
				/>

				<TooltipContent
					positionerProps={{ sideOffset: 5 }}
					className="bg-popover text-foreground rounded-md"
				>
					{hasCopied ? "Copied!" : "Click to copy"}
				</TooltipContent>
			</TooltipRoot>
		</div>
	);
}

// COMPONENT 2 — TAB VERSION
export function InstallCommandTabs({
	pkg,
	className,
	type = "registry",
}: {
	pkg: string;
	className?: string;
	type: "package" | "registry";
}) {
	const { packageManager, setPackageManager, installCommand } =
		useInstallCommand(pkg, type);

	return (
		<div
			className={cn(
				"relative rounded-md border border-border overflow-hidden text-sm",
				className,
			)}
		>
			{/* Header */}
			<div className="flex items-center justify-between border-b border-border bg-muted/40">
				<div className="flex items-stretch divide-x divide-border">
					<div className="inline-flex items-center px-3 py-2 text-muted-foreground">
						<Terminal className="size-3.5" />
					</div>
					{(
						Object.keys(
							type === "package"
								? packageInstallCommands
								: packageManagerCommands,
						) as PackageManager[]
					).map((pm) => {
						const active = pm === packageManager;
						return (
							<button
								type="button"
								key={pm}
								onClick={() => setPackageManager(pm)}
								className={cn(
									"relative px-3.5 py-2 text-[11px] font-mono uppercase tracking-wider cursor-pointer transition-colors",
									active
										? "bg-background text-foreground font-medium"
										: "text-muted-foreground hover:text-foreground hover:bg-muted",
								)}
							>
								{pm}
								{active && (
									<span className="absolute inset-x-0 bottom-0 h-0.5 bg-foreground" />
								)}
							</button>
						);
					})}
				</div>

				<CopyButton className="mr-1 size-6" value={installCommand} />
			</div>

			{/* Command Row */}
			<div className="px-4 py-3.5 font-mono text-xs flex justify-between items-center overflow-x-auto">
				<div className="flex items-center gap-2.5">
					<span className="text-muted-foreground select-none">$</span>
					<span>{installCommand}</span>
				</div>
			</div>
		</div>
	);
}

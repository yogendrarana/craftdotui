"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import {
	ArrowDownIcon,
	ArrowUpIcon,
	CornerDownLeftIcon,
	FileTextIcon,
	LaptopIcon,
	MoonIcon,
	SearchIcon,
	SunIcon,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { docsNavItems } from "@/config/docs";
import {
	CommandDialog,
	CommandEmpty,
	CommandFooter,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
	CommandSeparator,
} from "@craftdotui/craftui/components/command";
import { Kbd, KbdGroup } from "@craftdotui/craftui/components/kbd";

interface CommandMenuProps {
	className?: string;
}

export function CommandMenu({ className }: CommandMenuProps) {
	const router = useRouter();
	const { setTheme } = useTheme();
	const [open, setOpen] = React.useState(false);

	React.useEffect(() => {
		const down = (e: KeyboardEvent) => {
			if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
				e.preventDefault();
				setOpen((prev) => !prev);
			}
		};

		document.addEventListener("keydown", down);
		return () => document.removeEventListener("keydown", down);
	}, []);

	const runCommand = React.useCallback((command: () => unknown) => {
		setOpen(false);
		command();
	}, []);

	return (
		<>
			<button
				type="button"
				onClick={() => setOpen(true)}
				className={cn(
					"inline-flex h-full w-12 items-center justify-center rounded-none bg-background text-muted-foreground hover:bg-muted/40 hover:text-foreground transition-colors cursor-pointer",
					className,
				)}
				aria-label="Search documentation"
			>
				<SearchIcon className="size-4" />
			</button>

			<CommandDialog
				open={open}
				onOpenChange={setOpen}
				title="Search Documentation"
				description="Search through components, hooks, loaders, and guides."
			>
				<CommandInput placeholder="Type a command or search documentation..." />
				<CommandList>
					<CommandEmpty>No results found.</CommandEmpty>
					{docsNavItems.map((group) => (
						<CommandGroup key={group.title} heading={group.title}>
							{group.items.map((item) => (
								<CommandItem
									key={item.href}
									value={`${group.title} ${item.title}`}
									disabled={item.disabled}
									onSelect={() => {
										runCommand(() => {
											if (item.external) {
												window.open(
													item.href,
													"_blank",
												);
											} else {
												router.push(item.href);
											}
										});
									}}
								>
									<FileTextIcon className="size-4 shrink-0 text-muted-foreground" />
									<span>{item.title}</span>
									{item.label && (
										<span className="ml-2 rounded-sm border border-warning/30 bg-warning/10 px-1.5 py-0.5 font-mono text-[10px] tracking-wide text-warning uppercase">
											{item.label}
										</span>
									)}
									{item.paid && (
										<span className="ml-2 rounded-sm border border-primary/30 bg-primary/10 px-1.5 py-0.5 font-mono text-[10px] tracking-wide text-primary uppercase">
											Paid
										</span>
									)}
								</CommandItem>
							))}
						</CommandGroup>
					))}

					<CommandSeparator />
					<CommandGroup heading="Theme">
						<CommandItem
							value="theme light"
							onSelect={() => runCommand(() => setTheme("light"))}
						>
							<SunIcon className="size-4 shrink-0 text-muted-foreground" />
							<span>Light</span>
						</CommandItem>
						<CommandItem
							value="theme dark"
							onSelect={() => runCommand(() => setTheme("dark"))}
						>
							<MoonIcon className="size-4 shrink-0 text-muted-foreground" />
							<span>Dark</span>
						</CommandItem>
						<CommandItem
							value="theme system"
							onSelect={() =>
								runCommand(() => setTheme("system"))
							}
						>
							<LaptopIcon className="size-4 shrink-0 text-muted-foreground" />
							<span>System</span>
						</CommandItem>
					</CommandGroup>
				</CommandList>
				<CommandFooter>
					<div className="flex items-center gap-1.5">
						<KbdGroup>
							<Kbd size="sm">
								<ArrowUpIcon />
							</Kbd>
							<Kbd size="sm">
								<ArrowDownIcon />
							</Kbd>
						</KbdGroup>
						<span>Navigate</span>
					</div>
					<div className="flex items-center gap-1.5">
						<Kbd size="sm">
							<CornerDownLeftIcon />
						</Kbd>
						<span>Open</span>
					</div>
					<div className="flex items-center gap-1.5">
						<Kbd size="sm">Esc</Kbd>
						<span>Close</span>
					</div>
				</CommandFooter>
			</CommandDialog>
		</>
	);
}

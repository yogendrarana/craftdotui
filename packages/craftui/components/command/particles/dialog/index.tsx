"use client";

import * as React from "react";
import {
	CalculatorIcon,
	CalendarIcon,
	CornerDownLeftIcon,
	CreditCardIcon,
	SearchIcon,
	SettingsIcon,
	SmileIcon,
	UserIcon,
} from "lucide-react";
import { Button } from "@craftdotui/baseui/components/button";
import {
	CommandDialog,
	CommandEmpty,
	CommandFooter,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
	CommandSeparator,
	CommandShortcut,
} from "@craftdotui/craftui/components/command";
import { Kbd, KbdGroup } from "@craftdotui/craftui/components/kbd";

export default function Particle() {
	const [open, setOpen] = React.useState(false);

	React.useEffect(() => {
		const down = (e: KeyboardEvent) => {
			if (e.key === "j" && (e.metaKey || e.ctrlKey)) {
				e.preventDefault();
				setOpen((prev) => !prev);
			}
		};

		document.addEventListener("keydown", down);
		return () => document.removeEventListener("keydown", down);
	}, []);

	return (
		<>
			<Button
				variant="outline"
				className="w-64 justify-between pr-1.5 text-muted-foreground font-normal"
				onClick={() => setOpen(true)}
			>
				<span className="inline-flex items-center gap-2">
					<SearchIcon className="size-3.5" />
					<span>Search commands...</span>
				</span>
				<KbdGroup>
					<Kbd size="sm">⌘</Kbd>
					<Kbd size="sm">J</Kbd>
				</KbdGroup>
			</Button>

			<CommandDialog open={open} onOpenChange={setOpen}>
				<CommandInput placeholder="Type a command or search..." />
				<CommandList>
					<CommandEmpty>No results found.</CommandEmpty>
					<CommandGroup heading="Suggestions">
						<CommandItem onSelect={() => setOpen(false)}>
							<CalendarIcon />
							<span>Calendar</span>
						</CommandItem>
						<CommandItem onSelect={() => setOpen(false)}>
							<SmileIcon />
							<span>Search Emoji</span>
						</CommandItem>
						<CommandItem onSelect={() => setOpen(false)}>
							<CalculatorIcon />
							<span>Calculator</span>
						</CommandItem>
					</CommandGroup>
					<CommandSeparator />
					<CommandGroup heading="Settings">
						<CommandItem onSelect={() => setOpen(false)}>
							<UserIcon />
							<span>Profile</span>
							<CommandShortcut>
								<KbdGroup>
									<Kbd size="sm">⌘</Kbd>
									<Kbd size="sm">P</Kbd>
								</KbdGroup>
							</CommandShortcut>
						</CommandItem>
						<CommandItem onSelect={() => setOpen(false)}>
							<CreditCardIcon />
							<span>Billing</span>
							<CommandShortcut>
								<KbdGroup>
									<Kbd size="sm">⌘</Kbd>
									<Kbd size="sm">B</Kbd>
								</KbdGroup>
							</CommandShortcut>
						</CommandItem>
						<CommandItem onSelect={() => setOpen(false)}>
							<SettingsIcon />
							<span>Settings</span>
							<CommandShortcut>
								<KbdGroup>
									<Kbd size="sm">⌘</Kbd>
									<Kbd size="sm">S</Kbd>
								</KbdGroup>
							</CommandShortcut>
						</CommandItem>
					</CommandGroup>
				</CommandList>
				<CommandFooter>
					<div className="flex items-center gap-1.5">
						<Kbd size="sm">
							<CornerDownLeftIcon />
						</Kbd>
						<span>Select</span>
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

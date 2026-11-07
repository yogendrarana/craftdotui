import {
	CalculatorIcon,
	CalendarIcon,
	CreditCardIcon,
	SettingsIcon,
	SmileIcon,
	UserIcon,
} from "lucide-react";
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
	CommandSeparator,
	CommandShortcut,
} from "@craftdotui/craftui/components/command";
import { Kbd, KbdGroup } from "@craftdotui/craftui/components/kbd";

export default function Particle() {
	return (
		<Command className="max-w-md rounded-lg border border-border shadow-sm">
			<CommandInput placeholder="Type a command or search..." />
			<CommandList>
				<CommandEmpty>No results found.</CommandEmpty>
				<CommandGroup heading="Suggestions">
					<CommandItem>
						<CalendarIcon />
						<span>Calendar</span>
					</CommandItem>
					<CommandItem>
						<SmileIcon />
						<span>Search Emoji</span>
					</CommandItem>
					<CommandItem disabled>
						<CalculatorIcon />
						<span>Calculator</span>
					</CommandItem>
				</CommandGroup>
				<CommandSeparator />
				<CommandGroup heading="Settings">
					<CommandItem>
						<UserIcon />
						<span>Profile</span>
						<CommandShortcut>
							<KbdGroup>
								<Kbd size="sm">⌘</Kbd>
								<Kbd size="sm">P</Kbd>
							</KbdGroup>
						</CommandShortcut>
					</CommandItem>
					<CommandItem>
						<CreditCardIcon />
						<span>Billing</span>
						<CommandShortcut>
							<KbdGroup>
								<Kbd size="sm">⌘</Kbd>
								<Kbd size="sm">B</Kbd>
							</KbdGroup>
						</CommandShortcut>
					</CommandItem>
					<CommandItem>
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
		</Command>
	);
}

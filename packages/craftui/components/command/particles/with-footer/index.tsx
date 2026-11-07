import {
	ArrowDownIcon,
	ArrowUpIcon,
	CornerDownLeftIcon,
	FileTextIcon,
	FolderIcon,
	PlusCircleIcon,
	TerminalIcon,
} from "lucide-react";
import {
	Command,
	CommandEmpty,
	CommandFooter,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
	CommandShortcut,
} from "@craftdotui/craftui/components/command";
import { Kbd, KbdGroup } from "@craftdotui/craftui/components/kbd";

export default function Particle() {
	return (
		<Command className="max-w-md rounded-lg border border-border shadow-sm">
			<CommandInput placeholder="Filter workspace actions..." />
			<CommandList>
				<CommandEmpty>No matching actions.</CommandEmpty>
				<CommandGroup heading="Quick Actions">
					<CommandItem>
						<PlusCircleIcon />
						<span>Create New Component</span>
						<CommandShortcut>
							<KbdGroup>
								<Kbd size="sm">⌘</Kbd>
								<Kbd size="sm">N</Kbd>
							</KbdGroup>
						</CommandShortcut>
					</CommandItem>
					<CommandItem>
						<FileTextIcon />
						<span>Search Documentation</span>
						<CommandShortcut>
							<KbdGroup>
								<Kbd size="sm">⌘</Kbd>
								<Kbd size="sm">K</Kbd>
							</KbdGroup>
						</CommandShortcut>
					</CommandItem>
					<CommandItem>
						<FolderIcon />
						<span>Browse Registry</span>
						<CommandShortcut>
							<KbdGroup>
								<Kbd size="sm">⌘</Kbd>
								<Kbd size="sm">O</Kbd>
							</KbdGroup>
						</CommandShortcut>
					</CommandItem>
					<CommandItem>
						<TerminalIcon />
						<span>Copy CLI Command</span>
						<CommandShortcut>
							<KbdGroup>
								<Kbd size="sm">⇧</Kbd>
								<Kbd size="sm">⌘</Kbd>
								<Kbd size="sm">C</Kbd>
							</KbdGroup>
						</CommandShortcut>
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
					<span>Run</span>
				</div>
			</CommandFooter>
		</Command>
	);
}

import { SearchIcon } from "lucide-react";
import { Input } from "@craftdotui/baseui/components/input";
import { Kbd, KbdGroup } from "@craftdotui/craftui/components/kbd";

export default function Particle() {
	return (
		<div className="relative w-full max-w-xs">
			<SearchIcon className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
			<Input
				type="search"
				placeholder="Search documentation..."
				className="pr-14 pl-9"
			/>
			<KbdGroup className="pointer-events-none absolute top-1/2 right-2.5 -translate-y-1/2">
				<Kbd size="sm">⌘</Kbd>
				<Kbd size="sm">K</Kbd>
			</KbdGroup>
		</div>
	);
}

import { CornerDownLeftIcon, SearchIcon } from "lucide-react";
import { Button } from "@craftdotui/baseui/components/button";
import { Kbd, KbdGroup } from "@craftdotui/craftui/components/kbd";

export default function Particle() {
	return (
		<div className="flex flex-wrap items-center gap-3">
			<Button variant="outline" size="sm" className="pr-1.5">
				<SearchIcon className="text-muted-foreground" />
				<span>Search</span>
				<KbdGroup className="ml-2">
					<Kbd size="sm">⌘</Kbd>
					<Kbd size="sm">K</Kbd>
				</KbdGroup>
			</Button>

			<Button variant="outline" size="sm" className="pr-1.5">
				<span>Accept</span>
				<Kbd size="sm" className="ml-1">
					<CornerDownLeftIcon />
				</Kbd>
			</Button>

			<Button variant="ghost" size="sm" className="pr-1.5">
				<span>Cancel</span>
				<Kbd size="sm" variant="outline" className="ml-1">
					Esc
				</Kbd>
			</Button>
		</div>
	);
}

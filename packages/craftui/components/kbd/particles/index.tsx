import { Kbd, KbdGroup } from "@craftdotui/craftui/components/kbd";

export default function Particle() {
	return (
		<div className="flex flex-col items-center gap-4">
			<div className="flex flex-wrap items-center gap-2">
				<Kbd>⌘</Kbd>
				<Kbd>⇧</Kbd>
				<Kbd>⌥</Kbd>
				<Kbd>⌃</Kbd>
				<Kbd>Esc</Kbd>
				<Kbd>↵</Kbd>
			</div>

			<div className="flex flex-wrap items-center gap-4">
				<KbdGroup>
					<Kbd>⌘</Kbd>
					<Kbd>K</Kbd>
				</KbdGroup>

				<KbdGroup>
					<Kbd>Ctrl</Kbd>
					<span className="text-muted-foreground text-xs">+</span>
					<Kbd>B</Kbd>
				</KbdGroup>

				<KbdGroup>
					<Kbd>⇧</Kbd>
					<Kbd>⌥</Kbd>
					<Kbd>P</Kbd>
				</KbdGroup>
			</div>
		</div>
	);
}

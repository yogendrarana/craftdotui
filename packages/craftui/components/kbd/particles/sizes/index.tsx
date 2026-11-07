import { Kbd, KbdGroup } from "@craftdotui/craftui/components/kbd";

export default function Particle() {
	return (
		<div className="flex flex-wrap items-center gap-6">
			<KbdGroup>
				<Kbd size="sm">⌘</Kbd>
				<Kbd size="sm">K</Kbd>
			</KbdGroup>

			<KbdGroup>
				<Kbd size="md">⌘</Kbd>
				<Kbd size="md">K</Kbd>
			</KbdGroup>

			<KbdGroup>
				<Kbd size="lg">⌘</Kbd>
				<Kbd size="lg">K</Kbd>
			</KbdGroup>
		</div>
	);
}

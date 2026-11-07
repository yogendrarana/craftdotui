import { Kbd, KbdGroup } from "@craftdotui/craftui/components/kbd";

export default function Particle() {
	return (
		<div className="flex flex-wrap items-center gap-6">
			<div className="flex flex-col items-center gap-2">
				<KbdGroup>
					<Kbd variant="default">⌘</Kbd>
					<Kbd variant="default">K</Kbd>
				</KbdGroup>
				<span className="text-muted-foreground text-xs">Default</span>
			</div>

			<div className="flex flex-col items-center gap-2">
				<KbdGroup>
					<Kbd variant="outline">⌘</Kbd>
					<Kbd variant="outline">K</Kbd>
				</KbdGroup>
				<span className="text-muted-foreground text-xs">Outline</span>
			</div>

			<div className="flex flex-col items-center gap-2">
				<KbdGroup>
					<Kbd variant="ghost">⌘</Kbd>
					<Kbd variant="ghost">K</Kbd>
				</KbdGroup>
				<span className="text-muted-foreground text-xs">Ghost</span>
			</div>
		</div>
	);
}

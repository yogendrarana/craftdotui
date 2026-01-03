import {
	Tabs,
	TabsList,
	TabsTab,
	TabsPanel,
} from "@craftdotui/baseui/components/tabs";

export function Particle() {
	return (
		<Tabs defaultValue="music" className="w-[400px]">
			<TabsList tabsListFullWidth>
				<TabsTab value="music">Music</TabsTab>
				<TabsTab value="podcasts">Podcasts</TabsTab>
				<TabsTab value="live">Live</TabsTab>
			</TabsList>

			<TabsPanel
				value="music"
				className="p-4 space-y-2 border rounded-md text-xs"
			>
				Music
			</TabsPanel>
			<TabsPanel
				value="podcasts"
				className="p-4 space-y-2 border rounded-md text-xs"
			>
				Podcasts
			</TabsPanel>
			<TabsPanel
				value="live"
				className="p-4 space-y-2 border rounded-md text-xs"
			>
				Live
			</TabsPanel>
		</Tabs>
	);
}

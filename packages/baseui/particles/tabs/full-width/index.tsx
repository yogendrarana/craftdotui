import {
	TabsRoot,
	TabsList,
	Tab,
	TabsPanel,
} from "@craftdotui/baseui/components/tabs";

export function Particle() {
	return (
		<TabsRoot defaultValue="music" className="w-[400px]">
			<TabsList tabsListFullWidth>
				<Tab value="music">Music</Tab>
				<Tab value="podcasts">Podcasts</Tab>
				<Tab value="live">Live</Tab>
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
		</TabsRoot>
	);
}

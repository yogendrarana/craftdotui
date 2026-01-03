import {
	Tabs,
	TabsList,
	TabsTab,
	TabsPanel,
} from "@craftdotui/baseui/components/tabs";

export function Particle() {
	return (
		<Tabs defaultValue="overview" className="w-[400px]">
			<TabsList variant="outlined">
				<TabsTab value="overview">Overview</TabsTab>
				<TabsTab value="analytics">Analytics</TabsTab>
			</TabsList>

			<TabsPanel
				value="overview"
				className="p-4 border rounded-md text-xs"
			>
				Overview Content
			</TabsPanel>
			<TabsPanel
				value="analytics"
				className="p-4 border rounded-md text-xs"
			>
				Analytics Content
			</TabsPanel>
		</Tabs>
	);
}

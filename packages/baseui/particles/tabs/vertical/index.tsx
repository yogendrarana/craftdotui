import {
	Tabs,
	TabsList,
	TabsTab,
	TabsPanel,
} from "@craftdotui/baseui/components/tabs";

export function Particle() {
	return (
		<Tabs
			defaultValue="overview"
			orientation="vertical"
			className="h-[200px] w-[400px] border p-2 rounded-lg"
		>
			<TabsList className="min-w-20">
				<TabsTab value="overview">Overview</TabsTab>
				<TabsTab value="analytics">Analytics</TabsTab>
				<TabsTab value="reports">Reports</TabsTab>
			</TabsList>

			<TabsPanel value="overview" className="text-xs">
				Overview Content
			</TabsPanel>
			<TabsPanel value="analytics" className="text-xs">
				Analytics Content
			</TabsPanel>
			<TabsPanel value="reports" className="text-xs">
				Reports Content
			</TabsPanel>
		</Tabs>
	);
}

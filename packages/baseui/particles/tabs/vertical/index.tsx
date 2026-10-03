import {
	TabsRoot,
	TabsList,
	Tab,
	TabsPanel,
} from "@craftdotui/baseui/components/tabs";

export function Particle() {
	return (
		<TabsRoot
			defaultValue="overview"
			orientation="vertical"
			className="h-[200px] w-[400px] border p-2 rounded-lg"
		>
			<TabsList className="min-w-20">
				<Tab value="overview">Overview</Tab>
				<Tab value="analytics">Analytics</Tab>
				<Tab value="reports">Reports</Tab>
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
		</TabsRoot>
	);
}

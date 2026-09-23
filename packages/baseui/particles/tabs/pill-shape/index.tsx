import {
	TabsRoot,
	TabsList,
	TabsTab,
	TabsPanel,
} from "@craftdotui/baseui/components/tabs";

export function Particle() {
	return (
		<TabsRoot defaultValue="overview" className="w-[400px]">
			<TabsList tabShape="pill">
				<TabsTab value="overview">Overview</TabsTab>
				<TabsTab value="analytics">Analytics</TabsTab>
			</TabsList>

			<TabsPanel value="overview" className="p-4 border rounded-full">
				Overview Content
			</TabsPanel>
			<TabsPanel value="analytics" className="p-4 border rounded-full">
				Analytics Content
			</TabsPanel>
		</TabsRoot>
	);
}

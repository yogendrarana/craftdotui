import {
	TabsRoot,
	TabsList,
	Tab,
	TabsPanel,
} from "@craftdotui/baseui/components/tabs";

export function Particle() {
	return (
		<TabsRoot defaultValue="overview" className="w-[400px]">
			<TabsList tabShape="pill">
				<Tab value="overview">Overview</Tab>
				<Tab value="analytics">Analytics</Tab>
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

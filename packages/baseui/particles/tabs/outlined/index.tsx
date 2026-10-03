import {
	TabsRoot,
	TabsList,
	Tab,
	TabsPanel,
} from "@craftdotui/baseui/components/tabs";

export function Particle() {
	return (
		<TabsRoot defaultValue="overview" className="w-[400px]">
			<TabsList variant="outlined">
				<Tab value="overview">Overview</Tab>
				<Tab value="analytics">Analytics</Tab>
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
		</TabsRoot>
	);
}

import {
	TabsRoot,
	TabsList,
	Tab,
	TabsPanel,
} from "@craftdotui/baseui/components/tabs";

export function Particle() {
	return (
		<TabsRoot defaultValue="account" className="w-[400px]">
			<TabsList>
				<Tab value="account">Account</Tab>
				<Tab value="password">Password</Tab>
			</TabsList>
			<TabsPanel
				value="account"
				className="p-4 space-y-2 border rounded-md text-xs"
			>
				<h3 className="text-md font-medium">Account</h3>
				<p className="text-sm text-muted-foreground">
					Manage your account info.
				</p>
			</TabsPanel>
			<TabsPanel
				value="password"
				className="p-4 space-y-2 border rounded-md text-xs"
			>
				<h3 className="text-md font-medium">Password</h3>
				<p className="text-sm text-muted-foreground">
					Change your password here.
				</p>
			</TabsPanel>
		</TabsRoot>
	);
}

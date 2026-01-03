import {
	Tabs,
	TabsList,
	TabsTab,
	TabsPanel,
} from "@craftdotui/baseui/components/tabs";
import { User, Settings } from "lucide-react";

export function Particle() {
	return (
		<Tabs defaultValue="account" className="w-[400px]">
			<TabsList>
				<TabsTab value="account">
					<User className="w-4 h-4" />
					Account
				</TabsTab>
				<TabsTab value="settings">
					<Settings className="w-4 h-4" />
					Settings
				</TabsTab>
			</TabsList>

			<TabsPanel
				value="account"
				className="p-4 space-y-2 border rounded-md text-xs"
			>
				Account
			</TabsPanel>
			<TabsPanel
				value="settings"
				className="p-4 space-y-2 border rounded-md text-xs"
			>
				Settings
			</TabsPanel>
		</Tabs>
	);
}

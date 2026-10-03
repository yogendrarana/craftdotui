import {
	TabsRoot,
	TabsList,
	Tab,
	TabsPanel,
} from "@craftdotui/baseui/components/tabs";
import { User, Settings } from "lucide-react";

export function Particle() {
	return (
		<TabsRoot defaultValue="account" className="w-[400px]">
			<TabsList>
				<Tab value="account">
					<User className="w-4 h-4" />
					Account
				</Tab>
				<Tab value="settings">
					<Settings className="w-4 h-4" />
					Settings
				</Tab>
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
		</TabsRoot>
	);
}

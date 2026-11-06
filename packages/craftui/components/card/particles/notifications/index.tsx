import { BellIcon, ShieldAlertIcon, SparklesIcon } from "lucide-react";

import { Button } from "@craftdotui/baseui/components/button";
import { Switch } from "@craftdotui/baseui/components/switch";
import {
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardRoot,
	CardTitle,
} from "@craftdotui/craftui/components/card";

const notifications = [
	{
		icon: BellIcon,
		title: "Push notifications",
		description: "Send alerts to your desktop and mobile devices.",
		defaultChecked: true,
	},
	{
		icon: ShieldAlertIcon,
		title: "Security alerts",
		description: "Get notified about new sign-ins and API key usage.",
		defaultChecked: true,
	},
	{
		icon: SparklesIcon,
		title: "Product updates",
		description: "Receive monthly changelog and new component releases.",
		defaultChecked: false,
	},
];

export default function Particle() {
	return (
		<CardRoot className="w-full max-w-md">
			<CardHeader className="border-b">
				<CardTitle>Notification Preferences</CardTitle>
				<CardDescription>
					Choose how and when you want to be notified.
				</CardDescription>
			</CardHeader>
			<CardContent className="flex flex-col gap-4">
				{notifications.map((item) => {
					const Icon = item.icon;
					return (
						<div
							key={item.title}
							className="flex items-start justify-between gap-4"
						>
							<div className="flex items-start gap-3">
								<div className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-md border border-border bg-muted/50 text-muted-foreground">
									<Icon className="size-4" />
								</div>
								<div className="space-y-0.5">
									<p className="text-sm font-medium text-foreground">
										{item.title}
									</p>
									<p className="text-xs text-muted-foreground">
										{item.description}
									</p>
								</div>
							</div>
							<Switch defaultChecked={item.defaultChecked} />
						</div>
					);
				})}
			</CardContent>
			<CardFooter className="justify-end gap-2 border-t">
				<Button variant="ghost" size="sm">
					Reset
				</Button>
				<Button size="sm">Save preferences</Button>
			</CardFooter>
		</CardRoot>
	);
}

import { Radio, RadioGroup } from "@craftdotui/baseui/components/radio";

export function Particle() {
	return (
		<RadioGroup defaultValue="all">
			<div className="flex items-start gap-2">
				<Radio value="all" id="all" className="mt-0.5" />
				<div className="flex flex-col gap-1">
					<label
						htmlFor="all"
						className="text-sm font-medium cursor-pointer"
					>
						All new messages
					</label>
					<p className="text-xs text-muted-foreground">
						Receive notifications for all new messages.
					</p>
				</div>
			</div>

			<div className="flex items-start gap-2">
				<Radio value="mentions" id="mentions" className="mt-0.5" />
				<div className="flex flex-col gap-1">
					<label
						htmlFor="mentions"
						className="text-sm font-medium cursor-pointer"
					>
						Mentions only
					</label>
					<p className="text-xs text-muted-foreground">
						Only receive notifications when you're mentioned.
					</p>
				</div>
			</div>

			<div className="flex items-start gap-2">
				<Radio value="none" id="none" className="mt-0.5" />
				<div className="flex flex-col gap-1">
					<label
						htmlFor="none"
						className="text-sm font-medium cursor-pointer"
					>
						Nothing
					</label>
					<p className="text-xs text-muted-foreground">
						Disable all notifications.
					</p>
				</div>
			</div>
		</RadioGroup>
	);
}

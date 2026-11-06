"use client";

import { Button } from "@craftdotui/baseui/components/button";
import { toastManager } from "@craftdotui/baseui/components/toast";

export default function Particle() {
	return (
		<div className="text-center space-x-2">
			{["info", "success", "warning", "error", "loading"].map(
				(status) => (
					<Button
						key={status}
						variant="outline"
						size="sm"
						onClick={() => {
							toastManager.add({
								title: "Toast title",
								description: "Toast description goes here.",
								type: status,
							});
						}}
					>
						{status}
					</Button>
				),
			)}
		</div>
	);
}

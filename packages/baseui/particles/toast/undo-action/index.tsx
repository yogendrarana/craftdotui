"use client";

import { Button } from "@craftdotui/baseui/components/button";
import { toastManager } from "@craftdotui/baseui/components/toast";

export default function Particle() {
	return (
		<Button
			variant="outline"
			onClick={() => {
				const id = toastManager.add({
					title: "Message deleted",
					description: "The message has been moved to trash.",
					type: "info",
					actionProps: {
						children: "Undo",
						onClick: () => {
							toastManager.close(id);
							toastManager.add({
								title: "Action undone",
								description: "The message has been restored.",
							});
						},
					},
				});
			}}
		>
			Delete Message
		</Button>
	);
}

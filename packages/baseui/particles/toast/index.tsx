"use client";

import { Button } from "@craftdotui/baseui/components/button";
import { toastManager } from "@craftdotui/baseui/components/toast";

export default function Particle() {
	return (
		<Button
			variant="outline"
			size="sm"
			onClick={() => {
				toastManager.add({
					title: "Toast Title",
					description: "Toast description goes here",
				});
			}}
		>
			Click Here
		</Button>
	);
}

"use client";

import { Button } from "@craftdotui/baseui/components/button";
import { toastManager } from "@craftdotui/baseui/components/toast";

export default function Particle() {
	return (
		<div className="flex justify-center gap-2">
			<Button
				variant="outline"
				onClick={() => {
					toastManager.add({
						title: "Short Toast",
						description: "A simple notification.",
					});
				}}
			>
				Short
			</Button>
			<Button
				variant="outline"
				onClick={() => {
					toastManager.add({
						title: "Tall Toast",
						description:
							"This toast has a much longer description that will cause it to have more height than a standard one, demonstrating how the stack handles different dimensions.",
					});
				}}
			>
				Tall
			</Button>
		</div>
	);
}

"use client";

import { Button } from "@craftdotui/baseui/components/button";
import { toastManager } from "@craftdotui/baseui/components/toast";

export default function Particle() {
	const runPromise = () => {
		toastManager
			.promise(
				new Promise((resolve, reject) => {
					setTimeout(() => {
						if (Math.random() > 0.5) resolve("Data loaded!");
						else reject(new Error("Failed to load"));
					}, 2000);
				}),
				{
					loading: {
						title: "Saving changes...",
						description: "Please wait.",
						type: "loading",
					},
					success: () => ({
						title: "Changes saved!",
						description: "Settings updated successfully.",
						type: "success",
					}),
					error: (err) => ({
						title: "Save failed",
						description:
							err instanceof Error
								? err.message
								: "An error occurred.",
						type: "error",
					}),
				},
			)
			.catch(() => {
				console.log("Error caught");
			});
	};

	return (
		<Button variant="outline" onClick={runPromise}>
			Run Promise
		</Button>
	);
}

"use client";

import { Button } from "@craftdotui/baseui/components/button";
import { useConfetti } from "@craftdotui/hooks/use-confetti";

const origins = ["top", "bottom", "center", "left", "right"] as const;

export default function ConfettiDemo() {
	const triggerConfetti = useConfetti();

	return (
		<div className="flex flex-wrap justify-center gap-3">
			{origins.map((origin) => (
				<Button
					key={origin}
					variant="outline"
					size="sm"
					className="capitalize"
					onClick={() => {
						triggerConfetti({
							particleCount: 50,
							origin,
							duration: 5000,
						});
					}}
				>
					{origin}
				</Button>
			))}
		</div>
	);
}

"use client";

import { motion } from "motion/react";
import { cn } from "@craftdotui/lib/utils";

export default function LineSpinner() {
	const lines = 12;

	return (
		<div className="relative w-12 h-12">
			{Array.from({ length: lines }).map((_, i) => (
				<motion.div
					key={i}
					className={cn(
						"absolute",
						"w-1 h-4",
						"rounded-full",
						"bg-black dark:bg-white",
					)}
					style={{
						left: "50%",
						top: "50%",
						rotate: `-${i * 30}deg`,
						transformOrigin: "0% 0%",
					}}
					animate={{ opacity: [0.1, 1, 0.1] }}
					transition={{
						duration: 1,
						repeat: Infinity,
						delay: i * 0.1,
						ease: "linear",
					}}
				/>
			))}
		</div>
	);
}

"use client";

export default function LineWobble() {
	return (
		<div className="relative flex items-center h-1 w-20 rounded-full overflow-hidden">
			{/* track */}
			<div className="absolute inset-0 bg-black/10 dark:bg-white/10" />

			{/* wobble bar */}
			<div className="h-full w-full rounded-full bg-black dark:bg-white animate-wobble" />

			<style>{`
				@keyframes wobble {
					0%,
					100% {
						transform: translateX(-95%);
					}
					50% {
						transform: translateX(95%);
					}
				}

				.animate-wobble {
					animation: wobble 1.75s ease-in-out infinite;
				}
			`}</style>
		</div>
	);
}

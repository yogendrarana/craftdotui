"use client";

export default function PulsingDots() {
	const dotCount = 5;
	const duration = 1.3;

	return (
		<div className="relative flex items-center justify-between gap-1">
			{Array.from({ length: dotCount }).map((_, i) => {
				const fraction =
					dotCount > 1 ? -0.25 * (i / (dotCount - 1)) : 0;

				return (
					<div
						key={i}
						className="w-[10.32px] h-[10.32px] rounded-full bg-black dark:bg-white"
						style={{
							animation: `pulse ${duration}s ease-in-out infinite`,
							animationDelay: `calc(${duration}s * ${fraction})`,
						}}
					/>
				);
			})}

			<style>{`
				@keyframes pulse {
					0%, 100% {
						transform: scale(0);
					}
					50% {
						transform: scale(1);
					}
				}
			`}</style>
		</div>
	);
}

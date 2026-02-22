"use client";

export default function Spiral() {
	const dotCount = 8;
	const duration = 0.9;

	return (
		<div className="relative flex items-center justify-start h-[40px] w-[40px]">
			{Array.from({ length: dotCount }).map((_, index) => {
				const rotation = (360 / dotCount) * index;

				return (
					<div
						key={index}
						className="absolute top-0 left-0 flex items-center justify-start h-full w-full"
						style={{ transform: `rotate(${rotation}deg)` }}
					>
						<div
							className="h-[20%] w-[20%] rounded-full bg-black dark:bg-white"
							style={{
								animation: `pulse ${duration}s ease-in-out infinite`,
								animationDelay: `-${index * (duration / dotCount)}s`,
							}}
						/>
					</div>
				);
			})}

			<style>{`
				@keyframes pulse {
					0%, 100% {
						transform: scale(0);
						opacity: 0.5;
					}
					50% {
						transform: scale(1);
						opacity: 1;
					}
				}
			`}</style>
		</div>
	);
}

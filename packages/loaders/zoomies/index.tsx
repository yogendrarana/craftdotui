"use client";

export default function Zoomies() {
	const duration = 1.4;

	return (
		<div className="relative flex items-center justify-center h-[5px] w-[80px] rounded-[2.5px] overflow-hidden">
			{/* bg */}
			<div className="absolute inset-0 bg-black dark:bg-white opacity-10 transition-colors duration-300" />

			{/* moving bar */}
			<div
				className="h-full w-full rounded-[2.5px] bg-black dark:bg-white transition-colors duration-300"
				style={{
					animation: `zoom ${duration}s ease-in-out infinite`,
				}}
			/>

			<style>
				{`
                    @keyframes zoom {
                        0% {
                            transform: translateX(-100%);
                        }
                        100% {
                            transform: translateX(100%);
                        }
                    }
                `}
			</style>
		</div>
	);
}

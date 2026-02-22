"use client";

export default function JumpingDots() {
	const dots = 4;

	return (
		<div className="flex items-end gap-1.5">
			{Array.from({ length: dots }).map((_, index) => (
				<div
					key={index}
					className="w-2 h-2 rounded-full bg-black dark:bg-white animate-[jump_1s_ease-in-out_infinite]"
					style={{
						animationDelay: `-${(dots - index) * 0.15}s`,
					}}
				/>
			))}

			<style>{`
				@keyframes jump {
					0%,
					100% {
						transform: translateY(0);
					}
					50% {
						transform: translateY(-200%);
					}
				}
			`}</style>
		</div>
	);
}

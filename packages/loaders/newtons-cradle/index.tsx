"use client";

import { cn } from "@craftdotui/lib/utils";

export default function NewtonsCradle() {
	const dots = 5;

	return (
		<>
			<div className="relative flex items-center justify-center">
				{Array.from({ length: dots }).map((_, index) => (
					<div
						key={index}
						className={cn(
							"h-10 flex items-center justify-center origin-top",
							{
								swing: index === 0,
								swing2: index === dots - 1,
							},
						)}
					>
						<div className="bg-primary size-2 rounded-full"></div>
					</div>
				))}
			</div>

			<style>{`
                .swing {
                    animation: swing 1.4s linear infinite;
                }

                .swing2 {
                    animation: swing2 1.4s linear infinite;
                }

                @keyframes swing {
                    0% {
                        transform: rotate(0deg);
                        animation-timing-function: ease-out;
                    }
                    25% {
                        transform: rotate(70deg);
                        animation-timing-function: ease-in;
                    }
                    50% {
                        transform: rotate(0deg);
                        animation-timing-function: linear;
                    }
                    100% {
                        transform: rotate(0deg);
                    }
                }

                @keyframes swing2 {
                    0% {
                        transform: rotate(0deg);
                        animation-timing-function: linear;
                    }
                    50% {
                        transform: rotate(0deg);
                        animation-timing-function: ease-out;
                    }
                    75% {
                        transform: rotate(-70deg);
                        animation-timing-function: ease-in;
                    }
                    100% {
                        transform: rotate(0deg);
                    }
                }
            `}</style>
		</>
	);
}

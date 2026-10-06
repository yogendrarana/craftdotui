"use client";

export default function NewtonsCradle() {
	const dots = 5;

	return (
		<>
			<div className="relative flex items-center justify-center">
				{Array.from({ length: dots }).map((_, index) => (
					<div
						key={index}
						className={`h-10 flex items-center justify-center origin-top ${
							index === 0
								? "swing"
								: index === dots - 1
									? "swing-2"
									: ""
						}`.trim()}
					>
						<div className="bg-primary size-2 rounded-full"></div>
					</div>
				))}
			</div>

			<style>{`
                .swing {
                    animation: swing 1.4s linear infinite;
                }

                .swing-2 {
                    animation: swing-2 1.4s linear infinite;
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

                @keyframes swing-2 {
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

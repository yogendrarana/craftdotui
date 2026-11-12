"use client";

import * as React from "react";
import {
	Carousel,
	type CarouselApi,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@craftdotui/craftui/components/carousel";
import { Card, CardContent } from "@craftdotui/craftui/components/card";

export default function Particle() {
	const [api, setApi] = React.useState<CarouselApi>();
	const [current, setCurrent] = React.useState(0);
	const [count, setCount] = React.useState(0);

	React.useEffect(() => {
		if (!api) return;

		setCount(api.scrollSnapList().length);
		setCurrent(api.selectedScrollSnap() + 1);

		const onSelect = () => {
			setCurrent(api.selectedScrollSnap() + 1);
		};

		api.on("select", onSelect);
		return () => {
			api.off("select", onSelect);
		};
	}, [api]);

	return (
		<div className="w-full px-12 flex flex-col items-center gap-2">
			<Carousel setApi={setApi} className="w-full max-w-xs">
				<CarouselContent>
					{Array.from({ length: 5 }).map((_, index) => (
						<CarouselItem key={index}>
							<div className="p-1">
								<Card className="py-0">
									<CardContent className="flex aspect-square items-center justify-center p-6">
										<span className="text-4xl font-semibold">
											{index + 1}
										</span>
									</CardContent>
								</Card>
							</div>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
			</Carousel>
			<div className="text-center text-xs text-muted-foreground">
				Slide {current} of {count}
			</div>
		</div>
	);
}

"use client";

import * as React from "react";
import { cn } from "cn";
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
	const [selectedIndex, setSelectedIndex] = React.useState(0);

	React.useEffect(() => {
		if (!api) return;

		const onSelect = () => {
			setSelectedIndex(api.selectedScrollSnap());
		};

		onSelect();
		api.on("select", onSelect);
		return () => {
			api.off("select", onSelect);
		};
	}, [api]);

	return (
		<div className="w-full px-12 flex flex-col items-center gap-3">
			<Carousel setApi={setApi} className="w-full max-w-xs">
				<CarouselContent>
					{Array.from({ length: 5 }).map((_, index) => (
						<CarouselItem key={index}>
							<div className="p-1">
								<Card className="py-0">
									<CardContent className="flex aspect-video items-center justify-center p-6">
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

			<div className="grid w-full max-w-xs grid-cols-5 gap-2 px-1">
				{Array.from({ length: 5 }).map((_, index) => {
					const isActive = index === selectedIndex;
					return (
						<button
							key={index}
							type="button"
							onClick={() => api?.scrollTo(index)}
							aria-label={`Select slide ${index + 1}`}
							className={cn(
								"flex aspect-square items-center justify-center rounded-lg border text-sm font-medium transition-all cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-ring",
								isActive
									? "border-primary bg-primary/10 text-foreground ring-1 ring-primary"
									: "border-border bg-card text-muted-foreground opacity-60 hover:opacity-100",
							)}
						>
							{index + 1}
						</button>
					);
				})}
			</div>
		</div>
	);
}

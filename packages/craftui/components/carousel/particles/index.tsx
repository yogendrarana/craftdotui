"use client";

import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@craftdotui/craftui/components/carousel";
import { Card, CardContent } from "@craftdotui/craftui/components/card";

export default function Particle() {
	return (
		<div className="w-full px-12 flex justify-center">
			<Carousel className="w-full max-w-xs">
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
		</div>
	);
}

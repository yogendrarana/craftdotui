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
			<Carousel
				opts={{
					align: "start",
				}}
				className="w-full max-w-sm"
			>
				<CarouselContent className="-ml-1">
					{Array.from({ length: 6 }).map((_, index) => (
						<CarouselItem
							key={index}
							className="pl-1 basis-1/2 sm:basis-1/3"
						>
							<div className="p-1">
								<Card className="py-0">
									<CardContent className="flex aspect-square items-center justify-center p-6">
										<span className="text-2xl font-semibold">
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

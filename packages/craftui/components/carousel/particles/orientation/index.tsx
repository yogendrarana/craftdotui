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
		<div className="w-full py-12 flex justify-center">
			<Carousel
				opts={{
					align: "start",
				}}
				orientation="vertical"
				className="w-full max-w-xs"
			>
				<CarouselContent className="-mt-1 h-[220px]">
					{Array.from({ length: 5 }).map((_, index) => (
						<CarouselItem key={index} className="pt-1 basis-1/2">
							<div className="p-1">
								<Card className="py-0">
									<CardContent className="flex items-center justify-center p-6">
										<span className="text-3xl font-semibold">
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

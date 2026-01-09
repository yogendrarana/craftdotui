import {
	ScrollAreaRoot,
	ScrollAreaContent,
	ScrollAreaCorner,
	ScrollAreaScrollbar,
	ScrollAreaThumb,
	ScrollAreaViewport,
} from "@craftdotui/baseui/components/scroll-area";

export function Particle() {
	return (
		<ScrollAreaRoot className="max-w-96">
			<ScrollAreaViewport>
				<ScrollAreaContent className="p-4 flex gap-4">
					{Array.from({ length: 20 }).map((_, index) => (
						<div
							className="h-20 w-30 rounded-md bg-muted text-muted-foreground flex items-center justify-center font-medium"
							key={index}
						>
							Item {index}
						</div>
					))}
				</ScrollAreaContent>
			</ScrollAreaViewport>

			<ScrollAreaScrollbar orientation="horizontal">
				<ScrollAreaThumb />
			</ScrollAreaScrollbar>

			<ScrollAreaCorner />
		</ScrollAreaRoot>
	);
}

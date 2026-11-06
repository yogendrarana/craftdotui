import {
	ScrollAreaRoot,
	ScrollAreaPanel,
} from "@craftdotui/baseui/components/scroll-area";

export function Particle() {
	return (
		<ScrollAreaRoot className="max-w-96 h-40 border rounded-md">
			<ScrollAreaPanel
				contentProps={{ className: "flex gap-2" }}
				orientation="horizontal"
			>
				{Array.from({ length: 20 }).map((_, index) => (
					<div
						className="h-full w-30 rounded-md bg-muted text-muted-foreground flex items-center justify-center font-medium"
						key={index}
					>
						Item {index}
					</div>
				))}
			</ScrollAreaPanel>
		</ScrollAreaRoot>
	);
}

export default Particle;

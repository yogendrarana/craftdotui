import { Button } from "@craftdotui/baseui/components/button";

export default function Particle() {
	return (
		<div className="flex flex-wrap items-center gap-2">
			<Button variant="outline" size="xs">
				Extra Small
			</Button>
			<Button variant="outline" size="sm">
				Small
			</Button>
			<Button variant="outline" size="default">
				Default
			</Button>
			<Button variant="outline" size="lg">
				Large
			</Button>
			<Button variant="outline" size="xl">
				Extra Large
			</Button>
		</div>
	);
}

import { Button } from "@craftdotui/baseui/components/button";
import {
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetPanel,
	SheetRoot,
	SheetTitle,
	SheetTrigger,
} from "@craftdotui/craftui/components/sheet";

const SIDES = ["top", "right", "bottom", "left"] as const;

export default function Particle() {
	return (
		<div className="flex flex-wrap items-center justify-center gap-2">
			{SIDES.map((side) => (
				<SheetRoot key={side}>
					<SheetTrigger
						render={
							<Button variant="outline" className="capitalize" />
						}
					>
						{side}
					</SheetTrigger>
					<SheetContent side={side}>
						<SheetHeader>
							<SheetTitle className="capitalize">
								{side} Sheet
							</SheetTitle>
							<SheetDescription>
								This sheet slides in from the {side} edge of the
								viewport.
							</SheetDescription>
						</SheetHeader>
						<SheetPanel>
							<p className="text-sm text-muted-foreground leading-relaxed">
								Sheets reuse the modular Dialog primitives under
								the hood while docking the popup container to
								any edge of the screen.
							</p>
						</SheetPanel>
						<SheetFooter>
							<SheetClose render={<Button variant="outline" />}>
								Close
							</SheetClose>
						</SheetFooter>
					</SheetContent>
				</SheetRoot>
			))}
		</div>
	);
}

import { Button } from "@craftdotui/baseui/components/button";
import {
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardRoot,
	CardTitle,
} from "@craftdotui/craftui/components/card";

export default function Particle() {
	return (
		<CardRoot className="w-full max-w-md">
			<CardHeader>
				<CardTitle>Project Domain</CardTitle>
				<CardDescription>
					Configure custom DNS settings and primary production domain.
				</CardDescription>
			</CardHeader>
			<CardContent className="space-y-2">
				<div className="rounded-lg border border-border p-3 text-sm">
					<div className="font-mono text-xs font-medium text-foreground">
						craftui.example.com
					</div>
					<div className="mt-0.5 text-xs text-muted-foreground">
						Points to production deployment (active)
					</div>
				</div>
			</CardContent>
			<CardFooter
				variant="shaded"
				className="justify-between text-xs text-muted-foreground"
			>
				<span>Learn more about domains</span>
				<Button size="sm">Save changes</Button>
			</CardFooter>
		</CardRoot>
	);
}

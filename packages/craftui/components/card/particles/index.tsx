import { Button } from "@craftdotui/baseui/components/button";
import {
	FieldControl,
	FieldLabel,
	FieldRoot,
} from "@craftdotui/baseui/components/field";
import {
	CardAction,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardRoot,
	CardTitle,
} from "@craftdotui/craftui/components/card";

export default function Particle() {
	return (
		<CardRoot className="w-full max-w-sm">
			<CardHeader>
				<CardTitle>Sign in to your account</CardTitle>
				<CardDescription>
					Enter your email below to access your workspace
				</CardDescription>
				<CardAction>
					<Button variant="link" className="h-auto p-0">
						Sign up
					</Button>
				</CardAction>
			</CardHeader>
			<CardContent>
				<form className="flex flex-col gap-4">
					<FieldRoot>
						<FieldLabel>Email</FieldLabel>
						<FieldControl
							type="email"
							placeholder="you@craftui.com"
						/>
					</FieldRoot>
					<FieldRoot>
						<div className="flex items-center justify-between">
							<FieldLabel>Password</FieldLabel>
							<a
								href="#forgot-password"
								className="text-xs text-muted-foreground underline-offset-4 hover:underline"
							>
								Forgot password?
							</a>
						</div>
						<FieldControl type="password" placeholder="••••••••" />
					</FieldRoot>
				</form>
			</CardContent>
			<CardFooter className="flex-col gap-2">
				<Button className="w-full">Sign in</Button>
				<Button variant="outline" className="w-full">
					Continue with GitHub
				</Button>
			</CardFooter>
		</CardRoot>
	);
}

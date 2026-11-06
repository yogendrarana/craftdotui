import {
	OTPFieldRoot,
	OTPFieldInput,
} from "@craftdotui/baseui/components/otp-field";

const CODE_LENGTH = 6;

export default function Particle() {
	return (
		<div className="flex flex-col items-center justify-center gap-2 text-center">
			<label
				htmlFor="otp-alphanumeric"
				className="text-sm font-medium text-foreground"
			>
				Recovery code
			</label>
			<OTPFieldRoot
				id="otp-alphanumeric"
				length={CODE_LENGTH}
				validationType="alphanumeric"
			>
				{Array.from({ length: CODE_LENGTH }, (_, index) => (
					<OTPFieldInput
						key={index}
						aria-label={
							index === 0
								? undefined
								: `Character ${index + 1} of ${CODE_LENGTH}`
						}
					/>
				))}
			</OTPFieldRoot>
			<p className="text-sm text-muted-foreground">
				Accepts letters and numbers for backup codes such as{" "}
				<code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">
					A7C9XZ
				</code>
				.
			</p>
		</div>
	);
}

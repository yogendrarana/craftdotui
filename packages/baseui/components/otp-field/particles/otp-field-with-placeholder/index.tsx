import {
	OTPFieldRoot,
	OTPFieldInput,
} from "@craftdotui/baseui/components/otp-field";

const CODE_LENGTH = 6;

export default function Particle() {
	return (
		<div className="flex flex-col items-center justify-center gap-2 text-center">
			<label
				htmlFor="otp-placeholder"
				className="text-sm font-medium text-foreground"
			>
				Verification code
			</label>
			<OTPFieldRoot id="otp-placeholder" length={CODE_LENGTH}>
				{Array.from({ length: CODE_LENGTH }, (_, index) => (
					<OTPFieldInput
						key={index}
						placeholder="-"
						aria-label={
							index === 0
								? undefined
								: `Character ${index + 1} of ${CODE_LENGTH}`
						}
					/>
				))}
			</OTPFieldRoot>
			<p className="text-sm text-muted-foreground">
				Placeholder hints stay visible until the active slot is focused.
			</p>
		</div>
	);
}

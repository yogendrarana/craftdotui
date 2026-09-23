import {
	OTPFieldRoot,
	OTPFieldInput,
} from "@craftdotui/baseui/components/otp-field";

const CODE_LENGTH = 6;

export default function Particle() {
	return (
		<div className="flex flex-col items-center justify-center gap-2 text-center">
			<label
				htmlFor="otp-masked"
				className="text-sm font-medium text-foreground"
			>
				Access code
			</label>
			<OTPFieldRoot id="otp-masked" length={CODE_LENGTH} mask>
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
				Characters are masked for privacy on shared screens.
			</p>
		</div>
	);
}

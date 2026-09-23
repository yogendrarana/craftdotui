import {
	OTPFieldRoot,
	OTPFieldInput,
} from "@craftdotui/baseui/components/otp-field";

const OTP_LENGTH = 6;

export default function Particle() {
	return (
		<div className="flex flex-col items-center justify-center gap-2 text-center">
			<label
				htmlFor="otp-demo"
				className="text-sm font-medium text-foreground"
			>
				Verification code
			</label>
			<OTPFieldRoot id="otp-demo" length={OTP_LENGTH}>
				{Array.from({ length: OTP_LENGTH }, (_, index) => (
					<OTPFieldInput
						key={index}
						aria-label={
							index === 0
								? undefined
								: `Character ${index + 1} of ${OTP_LENGTH}`
						}
					/>
				))}
			</OTPFieldRoot>
			<p className="text-sm text-muted-foreground">
				Enter the 6-digit code we sent to your device.
			</p>
		</div>
	);
}

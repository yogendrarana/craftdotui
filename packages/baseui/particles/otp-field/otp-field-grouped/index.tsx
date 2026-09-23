import {
	OTPFieldRoot,
	OTPFieldInput,
	OTPFieldSeparator,
} from "@craftdotui/baseui/components/otp-field";

const OTP_LENGTH = 6;

export default function Particle() {
	return (
		<div className="flex flex-col items-center justify-center gap-2 text-center">
			<label
				htmlFor="otp-grouped"
				className="text-sm font-medium text-foreground"
			>
				Verification code
			</label>
			<OTPFieldRoot id="otp-grouped" length={OTP_LENGTH}>
				<div className="flex gap-2">
					{Array.from({ length: 3 }, (_, index) => (
						<OTPFieldInput
							key={index}
							aria-label={
								index === 0
									? undefined
									: `Character ${index + 1} of ${OTP_LENGTH}`
							}
						/>
					))}
				</div>
				<OTPFieldSeparator />
				<div className="flex gap-2">
					{Array.from({ length: 3 }, (_, index) => (
						<OTPFieldInput
							key={index + 3}
							aria-label={`Character ${index + 4} of ${OTP_LENGTH}`}
						/>
					))}
				</div>
			</OTPFieldRoot>
		</div>
	);
}

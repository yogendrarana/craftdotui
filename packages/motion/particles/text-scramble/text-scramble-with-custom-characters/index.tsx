"use client";

import TextScramble from "@craftdotui/motion/components/text-scramble";

export default function Particle() {
	return (
		<TextScramble speed={50} characterSet="*">
			Custom Scramble
		</TextScramble>
	);
}

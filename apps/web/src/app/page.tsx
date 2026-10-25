import { Hero } from "@/components/layout/hero";
import { BaseUIShowcase } from "@/components/layout/baseui-showcase";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";

export default function HomePage() {
	return (
		<div className="min-h-screen flex flex-col bg-background text-foreground">
			<Header />
			<Hero />
			<BaseUIShowcase />
			<Footer />
		</div>
	);
}

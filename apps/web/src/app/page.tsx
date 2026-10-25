import { Hero } from "@/components/layout/hero";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";

export default function HomePage() {
	return (
		<div className="min-h-screen flex flex-col bg-background text-foreground">
			<Header />
			<Hero />
			<Footer />
		</div>
	);
}

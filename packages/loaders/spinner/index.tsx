export default function Spinner() {
	return (
		<div className="animate-spin rounded-full h-10 w-10 border-b-2 border-black dark:border-white">
			<span className="sr-only">Loading...</span>
		</div>
	);
}

import {
	TableBody,
	TableCaption,
	TableCell,
	TableFooter,
	TableHead,
	TableHeader,
	TableRoot,
	TableRow,
} from "@craftdotui/craftui/components/table";

const invoices = [
	{
		invoice: "INV-001",
		paymentStatus: "Paid",
		totalAmount: "$250.00",
		paymentMethod: "Credit Card",
	},
	{
		invoice: "INV-002",
		paymentStatus: "Pending",
		totalAmount: "$150.00",
		paymentMethod: "PayPal",
	},
	{
		invoice: "INV-003",
		paymentStatus: "Unpaid",
		totalAmount: "$350.00",
		paymentMethod: "Bank Transfer",
	},
	{
		invoice: "INV-004",
		paymentStatus: "Paid",
		totalAmount: "$450.00",
		paymentMethod: "Credit Card",
	},
	{
		invoice: "INV-005",
		paymentStatus: "Paid",
		totalAmount: "$550.00",
		paymentMethod: "PayPal",
	},
];

export default function Particle() {
	return (
		<div className="w-full max-w-2xl">
			<TableRoot>
				<TableCaption>A list of your recent invoices.</TableCaption>
				<TableHeader>
					<TableRow>
						<TableHead className="w-[100px]">Invoice</TableHead>
						<TableHead>Status</TableHead>
						<TableHead>Method</TableHead>
						<TableHead className="text-right">Amount</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{invoices.map((invoice) => (
						<TableRow key={invoice.invoice}>
							<TableCell className="font-medium">
								{invoice.invoice}
							</TableCell>
							<TableCell>{invoice.paymentStatus}</TableCell>
							<TableCell className="text-muted-foreground">
								{invoice.paymentMethod}
							</TableCell>
							<TableCell className="text-right font-mono">
								{invoice.totalAmount}
							</TableCell>
						</TableRow>
					))}
				</TableBody>
				<TableFooter>
					<TableRow>
						<TableCell colSpan={3}>Total</TableCell>
						<TableCell className="text-right font-mono">
							$1,750.00
						</TableCell>
					</TableRow>
				</TableFooter>
			</TableRoot>
		</div>
	);
}

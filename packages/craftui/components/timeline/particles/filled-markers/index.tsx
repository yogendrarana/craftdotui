import {
	TimelineConnector,
	TimelineContent,
	TimelineDescription,
	TimelineItem,
	TimelineMarker,
	TimelineRoot,
	TimelineTitle,
} from "@craftdotui/craftui/components/timeline";

export function Particle() {
	return (
		<TimelineRoot className="mx-auto max-w-md">
			<TimelineItem>
				<TimelineMarker className="border-primary bg-primary" />
				<TimelineConnector className="bg-primary" />
				<TimelineContent>
					<TimelineTitle>Order Confirmed</TimelineTitle>
					<TimelineDescription>
						Your order #40291 has been received and is being
						prepared for shipment.
					</TimelineDescription>
				</TimelineContent>
			</TimelineItem>

			<TimelineItem>
				<TimelineMarker className="border-primary bg-primary" />
				<TimelineConnector />
				<TimelineContent>
					<TimelineTitle>In Transit</TimelineTitle>
					<TimelineDescription>
						Package departed from the regional sorting facility.
					</TimelineDescription>
				</TimelineContent>
			</TimelineItem>

			<TimelineItem>
				<TimelineMarker />
				<TimelineContent>
					<TimelineTitle>Out for Delivery</TimelineTitle>
					<TimelineDescription>
						Estimated delivery by 5:00 PM today.
					</TimelineDescription>
				</TimelineContent>
			</TimelineItem>
		</TimelineRoot>
	);
}

export default Particle;

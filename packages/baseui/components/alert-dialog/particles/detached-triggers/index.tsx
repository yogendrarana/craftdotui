"use client";

import { Button } from "@craftdotui/baseui/components/button";
import {
	AlertDialogClose,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogRoot,
	AlertDialogTitle,
	AlertDialogTrigger,
	createHandle,
} from "@craftdotui/baseui/components/alert-dialog";

const purgeCacheHandle = createHandle();

export function Particle() {
	return (
		<div className="flex flex-col items-center gap-4">
			<AlertDialogTrigger
				handle={purgeCacheHandle}
				render={<Button variant="destructive" />}
			>
				Purge System Cache
			</AlertDialogTrigger>

			{/* AlertDialogRoot mounted separately via handle */}
			<AlertDialogRoot handle={purgeCacheHandle}>
				<AlertDialogContent>
					<AlertDialogHeader>
						<AlertDialogTitle>Purge System Cache?</AlertDialogTitle>
						<AlertDialogDescription>
							This will invalidate all cached static assets and
							edge responses. Initial page loads may experience
							higher latency while the cache warms up.
						</AlertDialogDescription>
					</AlertDialogHeader>

					<AlertDialogFooter>
						<AlertDialogClose render={<Button variant="outline" />}>
							Cancel
						</AlertDialogClose>
						<AlertDialogClose
							render={<Button variant="destructive" />}
						>
							Purge Cache
						</AlertDialogClose>
					</AlertDialogFooter>
				</AlertDialogContent>
			</AlertDialogRoot>
		</div>
	);
}

export default Particle;

"use client";

import { Drawer } from "@craftdotui/baseui/components/drawer";
import { Button } from "@craftdotui/baseui/components/button";

export default function Particle() {
	return (
		<Drawer.Root>
			<Drawer.Trigger
				render={<Button variant="outline">Open Drawer Stack</Button>}
			/>
			<Drawer.Content
				contentProps={{ className: "mx-auto w-full max-w-[32rem]" }}
			>
				<Drawer.Header className="text-center">
					<Drawer.Title className="font-semibold text-lg">
						Account
					</Drawer.Title>
					<Drawer.Description>
						Manage your account settings
					</Drawer.Description>
				</Drawer.Header>

				<Drawer.Panel>
					<p className="text-sm text-muted-foreground text-center">
						Manage your general account settings or open security
						options to dive deeper.
					</p>
				</Drawer.Panel>

				<Drawer.Footer className="sm:justify-between">
					<Drawer.Root>
						<Drawer.Trigger
							render={<Button variant="outline">Security</Button>}
						/>
						<Drawer.Content
							hasBackdrop={false}
							contentProps={{
								className: "mx-auto w-full max-w-[32rem]",
							}}
						>
							<Drawer.Header className="text-center">
								<Drawer.Title className="font-semibold text-lg">
									Security
								</Drawer.Title>
								<Drawer.Description>
									Review sign-in activity and update your
									security preferences.
								</Drawer.Description>
							</Drawer.Header>

							<Drawer.Panel>
								<div className="rounded-lg border border-border bg-muted/30 p-3.5">
									<ul className="space-y-2.5 text-sm text-muted-foreground">
										<li className="flex items-center gap-2">
											<span className="size-1.5 rounded-full bg-emerald-500" />
											Passkeys enabled
										</li>
										<li className="flex items-center gap-2">
											<span className="size-1.5 rounded-full bg-emerald-500" />
											2FA via authenticator app
										</li>
										<li className="flex items-center gap-2">
											<span className="size-1.5 rounded-full bg-amber-500" />
											3 signed-in devices
										</li>
									</ul>
								</div>
							</Drawer.Panel>

							<Drawer.Footer className="sm:justify-between">
								<Drawer.Root>
									<Drawer.Trigger
										render={
											<Button variant="outline">
												Advanced
											</Button>
										}
									/>
									<Drawer.Content
										hasBackdrop={false}
										contentProps={{
											className:
												"mx-auto w-full max-w-[32rem]",
										}}
									>
										<Drawer.Header className="text-center">
											<Drawer.Title className="font-semibold text-lg">
												Advanced
											</Drawer.Title>
											<Drawer.Description>
												This is a third-level nested
												drawer demonstrating deep
												stacking.
											</Drawer.Description>
										</Drawer.Header>

										<Drawer.Panel>
											<div className="space-y-3">
												<div className="rounded-lg border border-border bg-muted/30 p-3">
													<p className="text-sm font-medium">
														Session timeout
													</p>
													<p className="text-xs text-muted-foreground">
														30 minutes
													</p>
												</div>
												<div className="rounded-lg border border-border bg-muted/30 p-3">
													<p className="text-sm font-medium">
														Recovery codes
													</p>
													<p className="text-xs text-muted-foreground">
														5 remaining
													</p>
												</div>
											</div>
										</Drawer.Panel>

										<Drawer.Footer>
											<Drawer.Close
												render={
													<Button variant="outline">
														Done
													</Button>
												}
											/>
										</Drawer.Footer>
									</Drawer.Content>
								</Drawer.Root>

								<Drawer.Close
									render={
										<Button variant="outline">Close</Button>
									}
								/>
							</Drawer.Footer>
						</Drawer.Content>
					</Drawer.Root>

					<Drawer.Close
						render={<Button variant="outline">Close</Button>}
					/>
				</Drawer.Footer>
			</Drawer.Content>
		</Drawer.Root>
	);
}

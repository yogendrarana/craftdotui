"use client";

import Drawer from "@craftdotui/baseui/components/drawer";
import { Button } from "@craftdotui/baseui/components/button";

export default function Particle() {
	return (
		<Drawer.Root>
			<Drawer.Trigger
				render={<Button variant="outline">Open Drawer Stack</Button>}
			/>
			<Drawer.Portal>
				<Drawer.Backdrop />
				<Drawer.Viewport>
					<Drawer.Popup>
						<Drawer.Handle />
						<Drawer.Content className="mx-auto w-full max-w-[32rem]">
							<Drawer.Title className="text-center font-semibold text-lg">
								Account
							</Drawer.Title>
							<Drawer.Description className="mt-1.5 text-center text-sm text-muted-foreground">
								Nested drawers stack visually while each remains
								independently focus managed.
							</Drawer.Description>

							<div className="mt-6 flex items-center justify-between">
								<Drawer.Root>
									<Drawer.Trigger
										render={
											<Button variant="outline">
												Security
											</Button>
										}
									/>
									<Drawer.Portal>
										<Drawer.Viewport>
											<Drawer.Popup>
												<Drawer.Handle />
												<Drawer.Content className="mx-auto w-full max-w-[32rem]">
													<Drawer.Title className="text-center font-semibold text-lg">
														Security
													</Drawer.Title>
													<Drawer.Description className="mt-1.5 text-center text-sm text-muted-foreground">
														Review sign-in activity
														and update your security
														preferences.
													</Drawer.Description>

													<div className="mt-4 rounded-lg border border-border bg-muted/30 p-3.5">
														<ul className="space-y-2.5 text-sm text-muted-foreground">
															<li className="flex items-center gap-2">
																<span className="size-1.5 rounded-full bg-emerald-500" />
																Passkeys enabled
															</li>
															<li className="flex items-center gap-2">
																<span className="size-1.5 rounded-full bg-emerald-500" />
																2FA via
																authenticator
																app
															</li>
															<li className="flex items-center gap-2">
																<span className="size-1.5 rounded-full bg-amber-500" />
																3 signed-in
																devices
															</li>
														</ul>
													</div>

													<div className="mt-6 flex items-center justify-between">
														<Drawer.Root>
															<Drawer.Trigger
																render={
																	<Button variant="outline">
																		Advanced
																	</Button>
																}
															/>
															<Drawer.Portal>
																<Drawer.Viewport>
																	<Drawer.Popup>
																		<Drawer.Handle />
																		<Drawer.Content className="mx-auto w-full max-w-[32rem]">
																			<Drawer.Title className="text-center font-semibold text-lg">
																				Advanced
																			</Drawer.Title>
																			<Drawer.Description className="mt-1.5 text-center text-sm text-muted-foreground">
																				This
																				is
																				a
																				third-level
																				nested
																				drawer
																				demonstrating
																				deep
																				stacking.
																			</Drawer.Description>

																			<div className="mt-4 space-y-3">
																				<div className="rounded-lg border border-border bg-muted/30 p-3">
																					<p className="text-sm font-medium">
																						Session
																						timeout
																					</p>
																					<p className="text-xs text-muted-foreground">
																						30
																						minutes
																					</p>
																				</div>
																				<div className="rounded-lg border border-border bg-muted/30 p-3">
																					<p className="text-sm font-medium">
																						Recovery
																						codes
																					</p>
																					<p className="text-xs text-muted-foreground">
																						5
																						remaining
																					</p>
																				</div>
																			</div>

																			<div className="mt-6 flex justify-end">
																				<Drawer.Close>
																					<Button variant="outline">
																						Done
																					</Button>
																				</Drawer.Close>
																			</div>
																		</Drawer.Content>
																	</Drawer.Popup>
																</Drawer.Viewport>
															</Drawer.Portal>
														</Drawer.Root>

														<Drawer.Close>
															<Button variant="outline">
																Close
															</Button>
														</Drawer.Close>
													</div>
												</Drawer.Content>
											</Drawer.Popup>
										</Drawer.Viewport>
									</Drawer.Portal>
								</Drawer.Root>

								<Drawer.Close>
									<Button variant="outline">Close</Button>
								</Drawer.Close>
							</div>
						</Drawer.Content>
					</Drawer.Popup>
				</Drawer.Viewport>
			</Drawer.Portal>
		</Drawer.Root>
	);
}

"use client";

import { Trash2, KeyRound, UserMinus } from "lucide-react";
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

interface ActionPayload {
	title: string;
	description: string;
	confirmLabel: string;
}

const actionHandle = createHandle<ActionPayload>();

const ACTIONS = [
	{
		id: "repo",
		label: "Delete Branch",
		icon: Trash2,
		payload: {
			title: "Delete feature/auth-v2 branch?",
			description:
				"This branch has unmerged commits. Deleting it will permanently discard those changes from the remote repository.",
			confirmLabel: "Delete Branch",
		},
	},
	{
		id: "token",
		label: "Revoke API Key",
		icon: KeyRound,
		payload: {
			title: "Revoke production API key?",
			description:
				"Applications and CI/CD pipelines relying on this key will immediately stop working. A new key must be generated.",
			confirmLabel: "Revoke Key",
		},
	},
	{
		id: "member",
		label: "Remove Member",
		icon: UserMinus,
		payload: {
			title: "Remove team member?",
			description:
				"This will revoke all organization access and permissions for sarah@craftdotui.dev. They can be re-invited at any time.",
			confirmLabel: "Remove Member",
		},
	},
];

export function Particle() {
	return (
		<div className="flex flex-col items-center gap-6">
			<div className="flex flex-wrap items-center justify-center gap-3">
				{ACTIONS.map((action) => {
					const Icon = action.icon;
					return (
						<AlertDialogTrigger
							key={action.id}
							handle={actionHandle}
							payload={action.payload}
							render={
								<Button variant="outline" className="gap-2">
									<Icon className="size-4 text-destructive" />
									{action.label}
								</Button>
							}
						/>
					);
				})}
			</div>

			<AlertDialogRoot handle={actionHandle}>
				{({ payload }) => (
					<AlertDialogContent>
						<AlertDialogHeader>
							<AlertDialogTitle>
								{payload?.title ?? "Confirm Action"}
							</AlertDialogTitle>
							<AlertDialogDescription>
								{payload?.description ??
									"Are you sure you want to proceed with this destructive action?"}
							</AlertDialogDescription>
						</AlertDialogHeader>

						<AlertDialogFooter>
							<AlertDialogClose
								render={<Button variant="outline" />}
							>
								Cancel
							</AlertDialogClose>
							<AlertDialogClose
								render={<Button variant="destructive" />}
							>
								{payload?.confirmLabel ?? "Confirm"}
							</AlertDialogClose>
						</AlertDialogFooter>
					</AlertDialogContent>
				)}
			</AlertDialogRoot>
		</div>
	);
}

export default Particle;

"use client";

import { authClient } from "@/libs/auth/auth-client";
import { redirect } from "next/navigation";

export default function RegisterLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { data, error, isPending } = authClient.useSession();

  if (isPending) {
    return null;
  }

  if (!data || error) {
    redirect("/");
  }

  return <main className="font-prompt w-full">{children}</main>;
}

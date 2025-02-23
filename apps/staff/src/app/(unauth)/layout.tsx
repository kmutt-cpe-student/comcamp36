import type { Metadata } from "next"
import "../globals.css"
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { headers } from "next/headers";

export const metadata: Metadata = {
  title: "CC36 Staff",
}

export default async function UnauthenticatedLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth.api.getSession({
    headers: await headers()
  })

  if (session){
    redirect("/")
  }
  
  return (
    <>{children}</>
  )
}
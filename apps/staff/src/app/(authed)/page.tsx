import localFont from "next/font/local"

import { auth } from "@/auth"
import { YookbeerTable } from "@/components/yookbeer-table"
import { db } from "@/db"
import { thirtyeight } from "@/db/schema"

const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
})

export default async function Home() {
  const data = await db.select().from(thirtyeight).orderBy(thirtyeight.stdid)
  const session = await auth()
  const isAdmin = (session?.user.role === 'admin')
  return (
    <div className={`flex flex-col w-screen ${geistMono.className}`}>
      <YookbeerTable data={data} isAdmin={isAdmin} />
    </div>
  )
}
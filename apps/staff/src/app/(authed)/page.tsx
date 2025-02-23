
import { ResTable } from "@/components/res-table"
import { db } from "@/db"
import { users } from "@/db/schema"


export default async function Home() {
  const data = await db.select({ id: users.id, fullname: users.fullname, gender: users.gender, phone: users.telephone, email: users.email }).from(users)
  return (
    <div className={`flex flex-col w-screen font-geist-mono`}>
      <ResTable data={data.filter((u) => (u.fullname !== null && u.email !== null && u.gender !== null && u.phone !== null))} />
    </div>
  )
}
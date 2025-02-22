"use client"

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { AddStaffDialog } from "./add-staff"
//import { StaffEditAndDeleteActions } from "./edit-staff"
import { UserWithRole } from "better-auth/plugins/admin"

interface UWRWithUsername extends UserWithRole{
    username?: string
}

export interface StaffUsersTableProps {
    data: {
        users: UWRWithUsername[];
    }
}

const firstCharCapital = (s: string) => {
    const t = s.split('')
    t[0] = t[0].toUpperCase()
    return t.join('')
}

export function StaffUsersTable({ data }: StaffUsersTableProps){
    //const adminCount = data.users.filter(ea => ea.role === 'admin').length
    return (
        <Card className="relative">
            <CardHeader>
                <AddStaffDialog />
                <CardTitle className="text-lg">Staff Accounts</CardTitle>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Name</TableHead>
                            <TableHead>Username</TableHead>
                            <TableHead>Email</TableHead>
                            <TableHead>Role</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {data.users.map((s, i) => (
                            <TableRow key={i}>
                                <TableCell>{s.name}</TableCell>
                                <TableCell>{s.username}</TableCell>
                                <TableCell>{s.email}</TableCell>
                                <TableCell>{firstCharCapital(s.role || 'null')}</TableCell>
                                {/* <TableCell className="flex justify-end"><StaffEditAndDeleteActions data={s} deleteDisabled={((s.role === 'admin') && (adminCount < 2))}  /></TableCell> */}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    )
}
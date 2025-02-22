import { CheckCircleIcon, UserPlusIcon } from "@heroicons/react/24/outline"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { useState } from "react"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { LoadingSpinner } from "@/components/svg/loading-spinner"
import { addStaffAccount } from "@/app/(authed)/admin/actions"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle } from "lucide-react"

const ROLES = ["staff", "admin"] as const
const RoleEnum = z.enum(ROLES)

const passwordSchema = z
  .string()
  .min(11, { message: "Password must be longer than 10 characters" })
  .refine((password) => /[A-Z]/.test(password), {
    message: "Password must contain at least 1 uppercase letter",
  })
  .refine((password) => /[a-z]/.test(password), {
    message: "Password must contain at least 1 lowercase letter",
  })
  .refine((password) => /[0-9]/.test(password), { message: "Password must contain at least 1 number" })
  .refine((password) => /[!@#$%^&*]/.test(password), {
    message: "Password must contain at least 1 special character",
  })

const formSchema = z.object({
    name: z.string().min(2, {
        message: "Name must be at least 2 characters.",
    }),
    username: z.string().min(4, {
        message: "Username must be at least 4 characters.",
    }),
    email: z.string().email("Must be a valid email address."),
    password: passwordSchema,
    role: RoleEnum
})

export function AddStaffDialog() {
    const [status, setStatus] = useState<'ready' | 'loading' | 'success' | 'failed'>('ready')
    const [errMsg, setErrMsg] = useState('')
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          role: RoleEnum.Enum.staff,
        },
    })
    const onSubmit = async(data: z.infer<typeof formSchema>) => {
        setStatus('loading')
        const res = await addStaffAccount(data)
        if (res.status === 201) {
            setStatus('success')
            window.location.reload()
        }
        else {
            setStatus('failed')
            setErrMsg(res.err || 'unknown error')
        }
    }
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="default" className="absolute top-8 right-8 p-2">
                    <UserPlusIcon className="h-6" /> Add
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Add new staff account</DialogTitle>
                </DialogHeader>
                    {(status === 'ready' || status === 'failed') && (<Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Name</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Somsak Saksom" {...field} />
                                            </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
                                            <FormControl>
                                                <Input placeholder="somsak.saks@kmutt.ac.th" {...field} />
                                            </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="username"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Username</FormLabel>
                                            <FormControl>
                                                <Input placeholder="somsaklnwza" {...field} />
                                            </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Password</FormLabel>
                                            <FormControl>
                                                <Input placeholder="************" type="password" {...field} />
                                            </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="role"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Role</FormLabel>
                                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                <FormControl>
                                                    <SelectTrigger>
                                                        <SelectValue />
                                                    </SelectTrigger>
                                                </FormControl>
                                                <SelectContent>
                                                    <SelectItem value="staff">Staff</SelectItem>
                                                    <SelectItem value="admin">Admin</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </form>
                    </Form>)}
                    {(status === 'failed') && (
                        <Alert variant="destructive">
                            <AlertCircle className="h-4 w-4" />
                            <AlertTitle>Error</AlertTitle>
                            <AlertDescription>
                                {errMsg}
                            </AlertDescription>
                        </Alert>
                    )}
                    {(status === 'loading') && (
                        <div className="flex flex-col w-full h-full items-center justify-center">
                            <LoadingSpinner className="w-16 h-16 mx-auto" />
                            <p className="text-center text-lg">Registering staff account</p>
                        </div>
                    )}
                    {(status === 'success') && (
                        <div className="flex flex-col w-full h-full items-center justify-center">
                            <CheckCircleIcon className="w-16 h-16 mx-auto" />
                            <p className="text-center text-lg">Registered successfully!</p>
                        </div>
                    )}
                <DialogFooter>
                    {(status === 'ready' || status === 'failed') && (
                        <>
                            <DialogClose asChild>
                                <Button variant="destructive">Cancel</Button>
                            </DialogClose>
                            <Button type="submit" onClick={form.handleSubmit(onSubmit)}>Confirm</Button>
                        </>
                    )}
                    {(status === 'success') && (
                        <DialogClose asChild>
                            <Button className="mx-auto">Close</Button>
                        </DialogClose>
                    )}
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
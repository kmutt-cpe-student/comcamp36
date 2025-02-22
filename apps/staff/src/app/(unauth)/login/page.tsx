
'use client'

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useSearchParams } from "next/navigation"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { staffSignIn } from "./actions"
import { Input } from "@/components/ui/input"
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert"
import { AlertCircle } from "lucide-react"

const formSchema = z.object({
    user: z.string().email(),
    password: z.string().min(1),
})

export default function StaffLogin(){
    const [status, setStatus] = useState<'ready' | 'loading' | 'success' | 'failed'>('ready')
    /* const [err, setErr] = useState("") */
    const searchParams = useSearchParams()
    const callbackUrl = searchParams.get('callbackUrl')

    const loginForm = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
    })

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        setStatus('loading')
        const res = await staffSignIn(values, callbackUrl)
        if (res){
            setStatus('success')
        }
        else {
            setStatus('failed')
        }
    }
    return (
        <>
            <div className="flex flex-col gap-y-12 mt-[25vh]">
                <h1 className="text-5xl text-center text-black prompt-bold">Staff Login</h1>
                <Form {...loginForm}>
                    <form onSubmit={loginForm.handleSubmit(onSubmit)} className="flex flex-col gap-y-2 w-[70vw] lg:w-[30vw]">
                        <FormField
                            control={loginForm.control}
                            name="user"
                            render={({ field } ) => (
                                <FormItem>
                                    <FormLabel>Username</FormLabel>
                                        <FormControl>
                                            <Input placeholder="username" {...field} />
                                        </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={loginForm.control}
                            name="password"
                            render={({ field } ) => (
                                <FormItem>
                                    <FormLabel>Password</FormLabel>
                                        <FormControl>
                                            <Input placeholder="*********" {...field} type="password" />
                                        </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button type="submit" className="w-full">Sign in</Button>
                    </form>
                </Form>
                {(status === 'failed') && (
                    <Alert variant="destructive">
                        <AlertCircle className="h-4 w-4" />
                        <AlertTitle className="font-medium">Login failed</AlertTitle>
                        <AlertDescription className="font-medium">
                            Check your credentials and try again.
                        </AlertDescription>
                    </Alert>
                )}
            </div>
        </>
    )
}
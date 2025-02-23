"use server"

import { auth } from "@/lib/auth";

export interface LoginData {
    user: string,
    password: string
}

export const staffSignIn = async(data: LoginData, callbackUrl: string | null) => {
    try {
        await auth.api.signInUsername({
            body: {
                username: data.user,
                password: data.password,
                callbackUrl: callbackUrl
            }
        })
        return true
    }
    catch {
        return false
    }
}
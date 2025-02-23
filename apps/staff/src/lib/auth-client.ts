import { createAuthClient } from "better-auth/react" // make sure to import from better-auth/react
import { usernameClient } from "better-auth/client/plugins"
 
export const authClient =  createAuthClient({
    baseURL: process.env.NEXT_PUBLIC_STAFFAPP_BASEURL,
    plugins: [
        usernameClient() 
    ]
})
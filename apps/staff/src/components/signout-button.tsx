import { authClient } from "@/lib/auth-client"
import { Button } from "./ui/button"

export default function SignoutButton () {
    return (
        <Button onClick={() => authClient.signOut()}>Sign Out</Button>
    )
}
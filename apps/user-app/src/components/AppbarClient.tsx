"use client"
import {signIn, signOut} from "next-auth/react"
import { Appbar } from "@repo/ui"
import { useRouter } from "next/navigation"

export function AppbarClient({user}:{user?: { name?: string | null }}) {
    const router = useRouter();

    return(
        <div>
            <Appbar onSignin={signIn} onSignout={async ()=>{
                await signOut()
                router.push("/api/auth/signin")
            }} user={user}/>
        </div>
    )
}
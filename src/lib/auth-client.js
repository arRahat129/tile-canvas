import { createAuthClient } from "better-auth/react"
export const authClient = createAuthClient({
    baseURL: "https://tile-canvas.vercel.app", // Production link
    // baseURL: "http://localhost:3000" // This was used while building..
})

export const { signIn, signUp, signOut, updateUser, useSession } = authClient;
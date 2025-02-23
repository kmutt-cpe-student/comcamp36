import { betterAuth } from "better-auth";
import Database from "better-sqlite3";
import { admin, username } from "better-auth/plugins"
import { nextCookies } from "better-auth/next-js";
import { mkdir } from "fs/promises"
import { existsSync } from "fs"

const dbPath = () => {
    if (process.env.CI === "true" || process.env.NODE_ENV === "test") {
        return ":memory:"
    }
    
    const path = process.env.NODE_ENV === "production" 
        ? "./app/sqlite/sqlite.db" 
        : "./staff.db"

    // Ensure directory exists for production database
    if (process.env.NODE_ENV === "production" && !existsSync("./app/sqlite")) {
        try {
            mkdir("./app/sqlite", { recursive: true })
        } catch (error) {
            console.warn("Failed to create SQLite directory:", error)
            // Fallback to memory database if directory creation fails
            return ":memory:"
        }
    }

    return path
}

export const auth = betterAuth({
    database: new Database(dbPath()),
    emailAndPassword: {
        enabled: true,
    },
    plugins: [ 
        username(),
        nextCookies(),
        admin({
            defaultRole: "staff",
            adminRole: "admin"
        }) 
    ]
})
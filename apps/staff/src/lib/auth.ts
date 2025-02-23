import { betterAuth } from "better-auth";
import Database from "better-sqlite3";
import { admin, username } from "better-auth/plugins"
import { nextCookies } from "better-auth/next-js";
import { mkdir } from "fs/promises"
import { existsSync } from "fs"

let db: Database.Database | null = null;

const getDatabase = () => {
    if (db) return db;

    const path = (() => {
        if (process.env.CI === "true" || process.env.NODE_ENV === "test") {
            return ":memory:"
        }
        
        if (process.env.NODE_ENV === "production") {
            const dbPath = "./app/sqlite/sqlite.db"
            if (!existsSync("./app/sqlite")) {
                try {
                    mkdir("./app/sqlite", { recursive: true })
                } catch (error) {
                    console.warn("Failed to create SQLite directory:", error)
                    return ":memory:"
                }
            }
            return dbPath
        }

        return "./staff.db"
    })()

    try {
        db = new Database(path)
        return db
    } catch (error) {
        console.warn("Failed to open database:", error)
        db = new Database(":memory:")
        return db
    }
}

export const auth = betterAuth({
    database: getDatabase(),
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
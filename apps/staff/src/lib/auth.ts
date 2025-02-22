import { betterAuth } from "better-auth";
import Database from "better-sqlite3";
import { username } from "better-auth/plugins"
import { nextCookies } from "better-auth/next-js";

const dbPath = (process.env.NODE_ENV === "production") ? "./sqlite/sqlite.db" : "../../staff.db"
 
export const auth = betterAuth({
    database: new Database(dbPath),
    plugins: [ 
        username(),
        nextCookies()
    ]
})
import { betterAuth } from "better-auth";
import Database from "better-sqlite3";
import { admin, username } from "better-auth/plugins"
import { nextCookies } from "better-auth/next-js";

const dbPath = () => {
    if (process.env.CI === "true") return ":memory:";
    
    return process.env.NODE_ENV === "production" 
      ? "./app/sqlite/sqlite.db" 
      : "./staff.db";
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
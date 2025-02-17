import { env } from "@/env";
import { betterAuth } from "better-auth";
import { openAPI } from "better-auth/plugins";

export const auth = betterAuth({
  socialProviders: {
    google: {
      clientId: env.NEXT_PUBLIC_GOOGLE_OAUTH_CLIENT_ID,
      clientSecret: env.NEXT_PUBLIC_GOOGLE_OAUTH_CLIENT_SECRET,
    },
  },
  advanced: {
    crossSubDomainCookies: {
      enabled: true,
      domain: "api.comcamp.io",
    },
  },
  plugins: [openAPI()],
});

"use client";
import { env } from "@/env";
import posthog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";
import { ReactNode } from "react";

if (typeof window !== "undefined") {
  posthog.init(env.NEXT_PUBLIC_POSTHOG_KEY, {
    api_host: env.NEXT_PUBLIC_POSTHOG_HOST,
    person_profiles: "identified_only",
  });
}

interface CSPostHogProviderProps {
  children: ReactNode;
}

export function CSPostHogProvider({ children }: CSPostHogProviderProps) {
  if (process.env.NODE_ENV == "development") {
    return <>{children}</>;
  } else {
    return <PostHogProvider client={posthog}>{children}</PostHogProvider>;
  }
}

import { cookies } from "next/headers";
import createFetchClient from "openapi-fetch";

import { env } from "@/env";
import type { paths } from "@/libs/server/types";

export const fetchServer = createFetchClient<paths>({
  baseUrl: env.NEXT_PUBLIC_SERVER_URL,
  fetch: async (request) => {
    return fetch(request, {
      headers: {
        cookie: (await cookies()).toString(),
      },
    });
  },
});

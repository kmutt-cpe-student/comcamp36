import createFetchClient from "openapi-fetch";

import { env } from "@/env";
import type { paths } from "@/libs/server/types";
import createClient from "openapi-react-query";

export const fetchClient = createFetchClient<paths>({
  baseUrl: env.NEXT_PUBLIC_SERVER_URL,
  fetch: (request) => {
    return fetch(request, {
      credentials: "include",
    });
  },
});

export const fetchQuery = createClient(fetchClient);

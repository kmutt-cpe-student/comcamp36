"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

interface DateRedirectedProps {
  deadline: string;
}

export default function RedirectHandler({ deadline }: DateRedirectedProps) {
  const router = useRouter();
  const pathname = usePathname();
  const allowedPath = "/comingsoon";

  //   I can't found development status in .env. (NOT SURE ABOUT THIS.)
  const isDevelopment = process.env.NODE_ENV === "development";

  useEffect(() => {
    const nowDate = new Date();
    const endDate = new Date(deadline);

    if (nowDate > endDate) {
      return;
    }

    if (isDevelopment) {
      if (pathname !== allowedPath) {
        router.push(allowedPath);
      }
    }
  }, [pathname, router, deadline, isDevelopment]);

  return null;
}

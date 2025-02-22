"use client";

import { fetchClient } from "@/libs/server/client";
import { redirect } from "next/navigation";

export default function LogoutBtn() {
  return (
    <div>
      <button
        className="cursor-pointer text-white"
        onClick={() => {
          fetchClient.POST("/auth/logout");
          redirect("/signin");
        }}
      >
        Logout
      </button>
    </div>
  );
}

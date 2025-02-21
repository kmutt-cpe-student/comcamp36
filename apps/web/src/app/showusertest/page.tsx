import { fetchServer } from "@/libs/server/server";
import { redirect } from "next/navigation";

export const runtime = "edge";

export default async function page() {
  const { data } = await fetchServer.GET("/auth/me");

  return (
    <div className="bg-charcoal-1 flex h-screen w-screen items-center justify-center">
      <p className="text-white">{data?.email}</p>
      <div>
        {data && (
          <div>
            <button
              className="cursor-pointer text-white"
              onClick={() => {
                fetchServer.POST("/auth/logout");
                redirect("/authtest");
              }}
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

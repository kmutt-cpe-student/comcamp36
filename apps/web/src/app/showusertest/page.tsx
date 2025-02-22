import LogoutBtn from "@/components/auth/logout-btn";
import { fetchServer } from "@/libs/server/server";

export const runtime = "edge";

export default async function page() {
  const { data } = await fetchServer.GET("/auth/me");

  return (
    <div className="bg-charcoal-1 flex h-screen w-screen items-center justify-center">
      <p className="text-white">{data?.email}</p>
      <div>{data && <LogoutBtn />}</div>
    </div>
  );
}

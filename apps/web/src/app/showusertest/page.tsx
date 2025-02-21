import { fetchServer } from "@/libs/server/server";
import Logout from "./logout";

export default async function page() {
  const { data } = await fetchServer.GET("/auth/me");

  return (
    <div className="bg-charcoal-1 flex h-screen w-screen items-center justify-center">
      <p className="text-white">{data?.email}</p>
      <div>{data && <Logout />}</div>
    </div>
  );
}

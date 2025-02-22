import SigninBtn from "@/components/auth/google-signin-btn";
import { fetchServer } from "@/libs/server/server";
import { redirect } from "next/navigation";

export const runtime = "edge";

export default async function SigninPage() {
  const { data } = await fetchServer.GET("/auth/me");
  if (data?.email) return redirect("/register");

  return (
    <div className="bg-charcoal-1 flex h-screen w-screen items-center justify-center">
      <div>
        <SigninBtn />
      </div>
    </div>
  );
}

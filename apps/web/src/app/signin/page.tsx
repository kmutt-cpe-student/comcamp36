import SigninBtn from "@/components/auth/google-signin-btn";
import { fetchServer } from "@/libs/server/server";
import Image from "next/image";
import { redirect } from "next/navigation";

export const runtime = "edge";

export default async function SigninPage() {
  const { data } = await fetchServer.GET("/auth/me");
  if (data?.email) return redirect("/register");

  return (
    <div className="bg-charcoal-1 grid h-screen w-screen grid-cols-1 place-content-center place-items-center items-center justify-center gap-10 md:grid-cols-2">
      <div className="h-full w-fit">
        <div className="flex w-[18rem] justify-center md:w-[24rem]">
          <Image
            style={{ width: "100%", height: "auto" }}
            width={550}
            height={288}
            src="/static/image/logo.png"
            alt="ComCamp36Logo"
            priority
          />
        </div>
      </div>
      <div className="h-fit w-fit">
        <SigninBtn />
      </div>
    </div>
  );
}

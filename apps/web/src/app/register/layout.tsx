import PolicyConsent from "@/components/card/policy-consent";
import Navbar from "@/components/navigate/navbar";
import { fetchServer } from "@/libs/server/server";
import { redirect } from "next/navigation";

export default async function RegisterLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { data } = await fetchServer.GET("/auth/me");
  if (!data?.email) return redirect("/signin");

  return (
    <div className="bg-charcoal-1 min-h-screen w-full text-white">
      <PolicyConsent />
      <div className="absolute z-[100]">
        <Navbar
          items={[
            {
              label: "เนื้อหาที่เรียน",
              href: "#learn",
            },
          ]}
        />
      </div>
      <div className="font-prompt flex w-full justify-center px-10 pt-36">
        {children}
      </div>
    </div>
  );
}

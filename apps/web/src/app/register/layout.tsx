import PolicyConsent from "@/components/card/policy-consent";
import Footer from "@/components/navigate/footer";
import Navbar from "@/components/navigate/navbar";

export default function RegisterLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
      <div className="font-prompt flex w-full justify-center px-10 py-36">
        {children}
      </div>
      <Footer />
    </div>
  );
}

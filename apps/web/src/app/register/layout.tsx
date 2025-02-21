import PolicyConsent from "@/components/card/policy-consent";
import Navbar from "@/components/navigate/navbar";

export default function RegisterLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-charcoal-1 min-h-screen w-full text-white">
      <PolicyConsent />
      <div className="bg-charcoal-1 absolute h-fit w-full overflow-x-hidden">
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
        <div className="font-prompt relative h-fit bg-cover bg-center bg-no-repeat text-white">
          {children}
        </div>
      </div>
      {children}
    </div>
  );
}

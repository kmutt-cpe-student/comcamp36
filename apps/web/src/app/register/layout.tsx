import PolicyConsent from "@/components/card/policy-consent";

export default function RegisterLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-charcoal-1 h-screen w-full text-white">
      <PolicyConsent />
      {children}
    </div>
  );
}

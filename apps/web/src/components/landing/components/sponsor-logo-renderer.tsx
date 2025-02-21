import { MagicCard } from "@/components/card/magic-card";
import { Sponsor, SponsorTiers } from "../sponsor";

interface SponsorLogoRendererProps {
  data: Sponsor;
  key: string;
}

const SponsorLogoRenderer = ({ data: s, key }: SponsorLogoRendererProps) => {
  let h = 60;

  if (s.tier === SponsorTiers.diamond) {
    h = 160;
  } else if (s.tier === SponsorTiers.platinum) {
    h = 100;
  }

  return (
    <MagicCard
      className="flex w-full justify-center border-white/20 px-6 py-2"
      key={key}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        style={{ width: "auto", height: `${h}px` }}
        src={s.image_path}
        alt={`${s.name} logo`}
        loading="lazy"
      />
    </MagicCard>
  );
};

export default SponsorLogoRenderer;

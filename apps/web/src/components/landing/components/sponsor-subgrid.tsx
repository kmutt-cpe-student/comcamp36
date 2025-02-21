import { Sponsor, SponsorTiers } from "../sponsor";
import SponsorLogoRenderer from "./sponsor-logo-renderer";

interface SponsorSubgridProps {
  data: Sponsor[];
  tier: SponsorTiers;
}

export default function SponsorSubgrid({ data, tier }: SponsorSubgridProps) {
  const amt = data.filter((sp) => sp.tier === tier).length;
  const gridClass =
    amt === 1
      ? "md:grid-cols-1"
      : amt === 2
        ? "md:grid-cols-2"
        : "md:grid-cols-3";

  return (
    <div className={`grid grid-cols-1 ${gridClass} gap-x-4`}>
      {data
        .filter((sp) => sp.tier === tier)
        .map((sp) => (
          <SponsorLogoRenderer data={sp} key={sp.name} />
        ))}
    </div>
  );
}

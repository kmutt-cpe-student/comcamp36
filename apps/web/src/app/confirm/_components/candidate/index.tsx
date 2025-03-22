import { ConfettiFireworks } from "@/components/animation/firework";
import { TextShimmer } from "@/components/text/text-shimmer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function Candidate() {
  return (
    <>
      <ConfettiFireworks />
      <Card className="w-full max-w-[110rem] px-5 sm:px-10">
        <CardHeader>
          <CardTitle>
            <TextShimmer
              duration={2}
              className="text-4xl font-bold transition-opacity duration-200 [--base-color:var(--color-vermilion)] [--base-gradient-color:var(--color-vermilion-1)] dark:[--base-color:var(--color-vermilion)] dark:[--base-gradient-color:var(--color-vermilion-1)]"
            >
              Congraduation
            </TextShimmer>
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-8"></CardContent>
      </Card>
    </>
  );
}
export default Candidate;

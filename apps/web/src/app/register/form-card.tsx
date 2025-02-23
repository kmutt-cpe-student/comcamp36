import { TextShimmer } from "@/components/text/text-shimmer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ReactNode } from "react";

interface FormCardProps {
  title: string;
  children: ReactNode;
}

function FormCard({ title, children }: FormCardProps) {
  return (
    <Card className="w-full max-w-[110rem] px-5 sm:px-10">
      <CardHeader>
        <CardTitle>
          <TextShimmer
            duration={2}
            className="text-4xl font-bold transition-opacity duration-200 [--base-color:var(--color-vermilion)] [--base-gradient-color:var(--color-vermilion-1)] dark:[--base-color:var(--color-vermilion)] dark:[--base-gradient-color:var(--color-vermilion-1)]"
          >
            {title}
          </TextShimmer>
        </CardTitle>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
}
export default FormCard;

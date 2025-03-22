"use client";

import Candidate from "@/app/confirm/_components/candidate";
import Ineligible from "@/app/confirm/_components/ineligible";
import ConfirmLoading from "@/app/confirm/_components/loading";
import Reserved from "@/app/confirm/_components/reserved";
import { fetchQuery } from "@/libs/server/client";

function ConfirmPage() {
  const { data, isPending } = fetchQuery.useQuery(
    "get",
    "/confirmation/user-confirmation",
    undefined,
    {
      refetchOnWindowFocus: false,
    },
  );

  return <ConfirmLoading />;

  if (isPending) {
  }

  if (!data?.confirm) {
    return <Ineligible />;
  }

  if (data.isPassed && data.confirm.index.includes("reserved")) {
    return <Reserved />;
  }

  return <Candidate />;
}
export default ConfirmPage;

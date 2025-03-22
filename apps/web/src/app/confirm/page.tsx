"use client";

import Candidate from "@/app/confirm/_components/candidate";
import Ineligible from "@/app/confirm/_components/ineligible";
import Reserved from "@/app/confirm/_components/reserved";
import Spinner from "@/components/spinner";
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

  if (isPending) {
    return (
      <div className="flex flex-col items-center">
        <h3 className="mb-5">ผลที่ออกคือ...</h3>
        <Spinner />
      </div>
    );
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

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

  if (isPending) {
    return <ConfirmLoading />;
  }

  if (!data?.isPassed) {
    return <Ineligible />;
  }

  if (data.isPassed && data.confirm.confirmation_status == "reserved") {
    return <Reserved />;
  }

  return <Candidate isAnswerDone={false} />;
}
export default ConfirmPage;

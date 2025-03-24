"use client";

import Candidate from "@/app/confirm/_components/candidate";
import Ineligible from "@/app/confirm/_components/ineligible";
import ConfirmLoading from "@/app/confirm/_components/loading";
import Reserved from "@/app/confirm/_components/reserved";
import { InView } from "@/components/animation/in-view";
import { fetchQuery } from "@/libs/server/client";

function ConfirmPage() {
  const { data, isPending, isError, refetch } = fetchQuery.useQuery(
    "get",
    "/confirmation/user-confirmation",
    undefined,
    {
      refetchOnWindowFocus: false,
      retry: 1,
    },
  );

  if (isPending) {
    return <ConfirmLoading />;
  }

  if (!data?.confirm || isError) {
    return (
      <InView>
        <Ineligible />
      </InView>
    );
  }

  if (data.isPassed && data.confirm.confirmation_status == "reserved") {
    return (
      <InView>
        <Reserved />
      </InView>
    );
  }

  return (
    <InView>
      <Candidate confirmData={data} refetch={refetch} />
    </InView>
  );
}
export default ConfirmPage;

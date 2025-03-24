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

  const currentDate = new Date();
  const targetDate = new Date("2025-03-24T16:00:00+07:00");

  if (currentDate < targetDate) {
    if (data?.confirm && data.confirm.index < 900) {
      return (
        <InView>
          <div>รอก่อนน่ะ พี่ ๆ กำลังประมวลผลกันอยู่</div>
        </InView>
      );
    }
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

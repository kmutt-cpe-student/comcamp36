"use client";

import Candidate from "@/app/confirm/_components/candidate";
import Ineligible from "@/app/confirm/_components/ineligible";
import ConfirmLoading from "@/app/confirm/_components/loading";
import Reserved from "@/app/confirm/_components/reserved";
import { InView } from "@/components/animation/in-view";
import { fetchQuery } from "@/libs/server/client";
import ConfirmationError from "./_components/error";

function ConfirmPage() {
  const {
    data: userData,
    isPending: userDataPending,
    isError: userDataError,
  } = fetchQuery.useQuery("get", "/auth/me");


  const { data, isPending, isError, refetch } = fetchQuery.useQuery(
    "get",
    "/confirmation/user-confirmation",
    undefined,
    {
      refetchOnWindowFocus: false,
      retry: 1,
    },
  );

  if (isPending || userDataPending) {
    return <ConfirmLoading />;
  }

  const currentDate = new Date();
  const targetDate = new Date("2025-03-24T16:00:00+07:00");

  if (currentDate < targetDate) {
    if (data?.confirm && data.confirm.index < 900) {
      return (
        <InView>
          <div>รอก่อนนะ พี่ ๆ กำลังประมวลผลกันอยู่</div>
        </InView>
      );
    }
  }

  if (isError || userDataError) {
    return <ConfirmationError />;
  }

  if (!data?.confirm) {
    return (
      <InView>
        <Ineligible userData={userData} />
      </InView>
    );
  }

  if (data.isPassed && data.confirm.confirmation_status == "reserved") {
    return (
      <InView>
        <Reserved userData={userData} />
      </InView>
    );
  }

  return (
    <InView>
      <Candidate confirmData={data} refetch={refetch} userData={userData} />
    </InView>
  );
}
export default ConfirmPage;

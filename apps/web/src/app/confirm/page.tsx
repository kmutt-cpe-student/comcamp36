"use client";

import { ConfettiFireworks } from "@/app/confirm/_components/firework";
import Spinner from "@/components/spinner";
import { fetchQuery } from "@/libs/server/client";
import Image from "next/image";

function ConfirmPage() {
  const { data, isPending } = fetchQuery.useQuery(
    "get",
    "/confirmation/user-confirmation",
    undefined,
    {
      refetchOnWindowFocus: false,
    },
  );

  console.log(data);

  if (isPending) {
    return (
      <div className="flex flex-col items-center">
        <h3 className="mb-5">ผลที่ออกคือ...</h3>
        <Spinner />
      </div>
    );
  }

  return (
    <div>
      <ConfettiFireworks />
      <h1 className="text-center">{data?.isPassed ? "ผ่าน เย้ๆ" : "โง่กาก"}</h1>
      <div className="relative h-96 w-96">
        <Image
          src={
            data?.isPassed
              ? "/static/image/placeholder/frontmant-purple.png"
              : "/static/image/placeholder/main-char.png"
          }
          alt="Profile"
          className="object-cover"
          fill
          priority
        />
      </div>
    </div>
  );
}
export default ConfirmPage;

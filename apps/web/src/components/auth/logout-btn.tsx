"use client";

import { fetchQuery } from "@/libs/server/client";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import Spinner from "../spinner";
import { Button } from "../ui/button";

export default function LogoutBtn() {
  const router = useRouter();

  const { mutate, isPending } = fetchQuery.useMutation("post", "/auth/logout", {
    onSuccess() {
      toast.success("สำเร็จ!");
      router.replace("/");
    },
    onError() {
      router.replace("/");
    },
  });

  return (
    <Button
      onClick={() => {
        mutate({});
      }}
      disabled={isPending}
    >
      {isPending ? <Spinner /> : "ออกจากระบบ"}
    </Button>
  );
}

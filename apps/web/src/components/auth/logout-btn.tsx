"use client";

import { fetchQuery } from "@/libs/server/client";
import { LogOutIcon } from "lucide-react";
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
    <div>
      <Button
        onClick={() => {
          mutate({});
        }}
        disabled={isPending}
        className="hidden md:block"
      >
        {isPending ? <Spinner /> : <div>ออกจากระบบ</div>}
      </Button>
      <Button className="flex md:hidden" size="icon">
        {isPending ? <Spinner /> : <LogOutIcon />}
      </Button>
    </div>
  );
}

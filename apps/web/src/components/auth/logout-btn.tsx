"use client";

import { fetchQuery } from "@/libs/server/client";
import { redirect } from "next/navigation";
import { toast } from "sonner";
import Spinner from "../spinner";
import { Button } from "../ui/button";

export default function LogoutBtn() {
  const { mutate, isPending } = fetchQuery.useMutation("post", "/auth/logout", {
    onSuccess() {
      toast.success("สำเร็จ!");
      redirect("/");
    },
    onError() {
      toast.error("เกิดข้อผิดพลาดบางอย่างในระบบ!");
    },
  });

  return (
    <Button
      onClick={() => {
        mutate({});
      }}
    >
      {isPending ? <Spinner /> : "Logout"}
    </Button>
  );
}

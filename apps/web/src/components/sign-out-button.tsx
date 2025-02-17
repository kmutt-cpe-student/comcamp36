"use client";

import { Button } from "@/components/ui/button";
import { authClient } from "@/libs/auth/auth-client";

function SignOutButton() {
  return (
    <Button
      onClick={async () => {
        await authClient.signOut();
      }}
      className="flex cursor-pointer items-center justify-center gap-2"
    >
      <small className="text-white">ออกจากระบบ</small>
    </Button>
  );
}
export default SignOutButton;

import { env } from "@/env";
import Link from "next/link";
import Google from "../icons/google-icon";
import { Button } from "../ui/button";

export default function SigninBtn() {
  return (
    <Link href={`${env.NEXT_PUBLIC_SERVER_URL}/auth`}>
      <Button className="w-fit p-6 font-bold">
        <Google />
        เข้าสู่ระบบด้วย Google
      </Button>
    </Link>
  );
}

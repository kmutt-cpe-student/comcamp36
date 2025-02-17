import GoogleIcon from "@/components/icons/google";
import { Button } from "@/components/ui/button";
import { authClient } from "@/libs/auth/auth-client";

function SignInButton() {
  const { data } = authClient.useSession();

  return (
    <Button
      onClick={async () => {
        if (data) {
          window.location.href = "/register";
        } else {
          await authClient.signIn.social({
            provider: "google",
            callbackURL: "/register",
          });
        }
      }}
      className="flex cursor-pointer items-center justify-center gap-2"
    >
      <small className="text-white">เข้าสู่ระบบด้วย</small>
      <GoogleIcon className="size-6" />
    </Button>
  );
}
export default SignInButton;

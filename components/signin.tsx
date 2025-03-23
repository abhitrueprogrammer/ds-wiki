import { signInWithGoogle } from "@/app/actions/auth";
import { Button } from "./ui/button";
import { RiGoogleFill } from "react-icons/ri";
export default function SignIn() {
  return (
    <form action={signInWithGoogle}>
      <Button
        type="submit"
        variant="secondary"
        className=" border-2 mt-2 w-full sm:mt-0"
      >
        <div className="inline-flex items-center gap-2">
          <RiGoogleFill className="size-4" aria-hidden="true" />
          Login with Google
        </div>
      </Button>
    </form>
  );
}

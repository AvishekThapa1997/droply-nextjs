import { useSignUp } from "@clerk/nextjs";
import { SignUpSchema } from "../validation/types";

export function useAuthService() {
  const { signUp: clerkSignUp, isLoaded } = useSignUp();
  const signUp = async (
    signUpDate: Pick<SignUpSchema, "email" | "password">
  ) => {
    if (!isLoaded) return;
    await clerkSignUp.create({
      emailAddress: signUpDate.email,
      password: signUpDate.password,
    });
    await clerkSignUp.prepareEmailAddressVerification({
      strategy: "email_code",
    });
  };
  return { signUp };
}

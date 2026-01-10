import { useSignIn, useSignUp } from "@clerk/nextjs";
import { SignInSchema, SignUpSchema } from "../validation/types";

export function useAuthService() {
  const { signUp: clerkSignUp, isLoaded: isSignUpLoaded } = useSignUp();
  const { signIn: clerkSignIn, isLoaded: isSignInLoaded } = useSignIn();

  const signUp = async (
    signUpDate: Pick<SignUpSchema, "email" | "password">
  ) => {
    if (!isSignUpLoaded) return;
    await clerkSignUp.create({
      emailAddress: signUpDate.email,
      password: signUpDate.password,
    });
    await clerkSignUp.prepareEmailAddressVerification({
      strategy: "email_code",
    });
  };

  const signIn = async (signInData: SignInSchema) => {
    if (!isSignInLoaded) return;
    try {
      const result = await clerkSignIn.create({
        identifier: signInData.email,
        password: signInData.password,
      });
      console.log("Sign in result:", result);
    } catch (err) {
      console.error("Sign in error:", err);
      throw err;
    }
  };

  return { signUp, signIn };
}

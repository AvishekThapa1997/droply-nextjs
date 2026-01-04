import React, { useState } from "react";
import { useAuthService } from "../hooks/use-auth-service";
import { Box } from "@radix-ui/themes";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { SignUpSchema } from "../validation/types";
import { signupSchema } from "../validation/signup-schema";

function SignUpForm() {
  const { signUp } = useAuthService();
  const { register, handleSubmit } = useForm<SignUpSchema>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });
  const [isVerifying, setIsVerifying] = useState(false);
  const onSubmit: SubmitHandler<SignUpSchema> = async ({ email, password }) => {
    try {
      signUp({
        email,
        password,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const onVerification = async () => {};

  return (
    <Box>
      <form onSubmit={handleSubmit(onSubmit)}></form>
    </Box>
  );
}

export { SignUpForm };

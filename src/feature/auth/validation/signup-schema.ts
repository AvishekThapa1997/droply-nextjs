import { emailSchema } from "@/shared/validation/email-schema";
import { passwordSchema } from "@/shared/validation/password-schema";
import * as zod from "zod";

export const signupSchema = zod
  .object({
    name: zod.string().min(1, { error: "Name is required" }),
    email: emailSchema,
    password: passwordSchema,
    confirmPassword: zod
      .string()
      .min(1, { error: "Confirm Password is required" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    error: "Passwords do not match",
    path: ["confirmPassword"],
  });

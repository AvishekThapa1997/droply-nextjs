import { emailSchema } from "@/shared/validation/email-schema";
import { passwordSchema } from "@/shared/validation/password-schema";
import * as zod from "zod";

export const signupSchema = zod
  .object({
    name: zod.string().min(1, { error: "Name is required" }),
    email: emailSchema,
    password: passwordSchema,
  })
 

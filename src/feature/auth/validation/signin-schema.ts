import * as zod from "zod";
import { emailSchema } from "@/shared/validation/email-schema";
import { passwordSchema } from "@/shared/validation/password-schema";
export const signinSchema = zod.object({
  email: emailSchema,
  password: passwordSchema,
});

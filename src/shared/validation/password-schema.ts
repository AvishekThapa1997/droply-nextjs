import * as zod from "zod";
const passwordSchema = zod
  .string()
  .min(8, { error: "Password must be at least 8 characters long" })
  .max(32, { error: "Password must be at most 32 characters long" });

export { passwordSchema };

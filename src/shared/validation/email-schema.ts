import * as zod from "zod";
const emailSchema = zod.email({ error: "Please enter a valid email" });
export { emailSchema };

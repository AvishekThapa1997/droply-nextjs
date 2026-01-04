import * as zod from "zod";
import { signupSchema } from "./signup-schema";
import { signinSchema } from "./signin-schema";

export type SignUpSchema = zod.infer<typeof signupSchema>;

export type SignInSchema = zod.infer<typeof signinSchema>;

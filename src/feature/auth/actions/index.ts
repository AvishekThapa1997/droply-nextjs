"use server";

import { db } from "@/lib/db";
import { signupSchema } from "../validation/signup-schema";
import { users } from "@/lib/db/schema";
import { eq } from "drizzle-orm";
import { generateHashedPassword, generatePasswordSalt } from "../lib/password";

export const signUp = async (formData: FormData) => {
  try {
    const payload = Object.fromEntries(formData.entries());
    const { success, data, error } = await signupSchema.safeParseAsync(payload);
    if (!success) {
      return {
        success: false,
        error: error.message,
      };
    }
    const { name, email, password } = data;
    const [existingUser] = await db
      .select()
      .from(users)
      .where(eq(users.email, email));
    if (existingUser) {
      return {
        success: false,
        error:
          "Unable to create account. Please try signing in or reset your password.",
      };
    }
    const passwordSalt = await generatePasswordSalt();
    const hashedPassword = await generateHashedPassword({
      password,
      salt: passwordSalt,
    });
    const [user] = await db
      .insert(users)
      .values({
        name,
        password: hashedPassword,
        passwordSalt,
        email: email,
        emailVerified: false,
      })
      .returning();
    if (!user) {
      return {
        success: false,
        error: "Something went wrong.Please try again later.",
      };
    }
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : "Something went wrong",
    };
  }
};

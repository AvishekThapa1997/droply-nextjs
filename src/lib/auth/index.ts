import type { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { db } from "../db";
import { users } from "../db/schema";
import { eq } from "drizzle-orm";
import { comparePassword } from "../password";
import { signinSchema } from "@/feature/auth/validation/signin-schema";

const authOptions: NextAuthOptions = {
  pages: {
    signIn: "/auth/sign-in",
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    Credentials({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          const parsedData = await signinSchema.safeParseAsync(credentials);
          if (!parsedData.success) {
            throw new Error("Email or password is incorrect");
          }
          const { email, password } = parsedData.data;
          const [user] = await db
            .select()
            .from(users)
            .where(eq(users.email, email));

          if (!user) {
            throw new Error("Email or password is incorrect");
          }
          const isPasswordValid = await comparePassword({
            hashedPassword: user.password,
            password: password,
          });
          if (!isPasswordValid) {
            throw new Error("Email or password is incorrect");
          }
          return {
            id: user.id,
            name: user.name,
            email: user.email,
            image: user.image,
          };
        } catch (err) {
          console.error("Unable to login user", err);
          throw err;
        }
      },
    }),
  ],
  callbacks: {
    async signIn() {
      return true;
    },
    async redirect({ baseUrl }) {
      return baseUrl;
    },
    async jwt({ token, user }) {
      if (user) {
        token.user = user;
      }
      return token;
    },
    async session({ session, token }) {
      if (token.user) {
        session.user = token.user;
      }
      return session;
    },
  },
};

export { authOptions };

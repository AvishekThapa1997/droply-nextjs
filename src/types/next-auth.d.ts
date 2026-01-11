import NextAuth, { DefaultSession, User } from "next-auth";
import { AdapterUser } from "next-auth/adapters";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      name: string | null;
      email: string | null;
      image?: string | null;
    } & DefaultSession["user"];
  }

  interface User {
    id: string;
    name: string | null;
    email: string | null;
    image?: string | null;
  }
}
declare module "next-auth/jwt" {
  interface JWT {
    user: User;
  }
}

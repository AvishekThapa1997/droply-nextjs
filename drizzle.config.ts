import "dotenv/config";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  out: "./drizzle",
  schema: "./src/lib/db/schema.ts",
  dialect: "postgresql",
  migrations: {
    table: "migrations",
    schema: "public",
    prefix: "timestamp",
  },
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});

import type { Metadata } from "next";
import "@/styles/globals.css";
import { poppins } from "@/fonts";
import { AppThemeProvider } from "@/provider/app-theme-provider";
import { Layout } from "@/shared/layouts/root-layout";

export const metadata: Metadata = {
  title: "Droply",
  description: "Cloud storage",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <AppThemeProvider>
          <Layout>{children}</Layout>
        </AppThemeProvider>
      </body>
    </html>
  );
}

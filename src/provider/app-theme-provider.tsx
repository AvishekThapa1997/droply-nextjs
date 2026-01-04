"use client";
import { Theme } from "@radix-ui/themes";
import { PropsWithChildren } from "react";

function AppThemeProvider({ children }: PropsWithChildren) {
  return <Theme appearance="dark">{children}</Theme>;
}

export { AppThemeProvider };

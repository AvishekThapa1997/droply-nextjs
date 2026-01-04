"use client";
import { Box, Button, Flex } from "@radix-ui/themes";
import Link from "next/link";

function HeaderNav() {
  return <AuthActions />;
}

function AuthActions() {
  return (
    <Flex gap={"4"} align={"center"}>
      <Button variant="soft" size={"3"} asChild>
        <Link href="/sign-in">Sign In</Link>
      </Button>
      <Button size={"3"} asChild>
        <Link href="/sign-up">Sign Up</Link>
      </Button>
    </Flex>
  );
}

function UserActions() {
  return <Flex gap={"4"} align={"center"}></Flex>;
}

export { HeaderNav };

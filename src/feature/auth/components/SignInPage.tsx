import { Flex, Heading, Link, Text } from "@radix-ui/themes";
import NextLink from "next/link";
import { AuthFormCard } from "./AuthFormCard";
import { SignInForm } from "./SignInForm";

function SignInPage() {
  return (
    <Flex justify="center">
      <AuthFormCard>
        <Flex direction="column" gap="4">
          <Flex direction="column" gap="2" align="center">
            <Heading as="h2" size="6" weight="bold">
              Welcome Back
            </Heading>
            <Text size="2">Sign in to access your secure cloud storage</Text>
          </Flex>
          <SignInForm />
          <Flex justify="center">
            <Text size="2">
              Don't have an account?{" "}
              <Link asChild>
                <NextLink href="/sign-up">Sign up</NextLink>
              </Link>
            </Text>
          </Flex>
        </Flex>
      </AuthFormCard>
    </Flex>
  );
}
SignInPage.displayName = "SignInPage";
export { SignInPage };

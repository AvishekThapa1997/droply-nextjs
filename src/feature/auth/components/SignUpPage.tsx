import { Flex, Heading, Link, Text } from "@radix-ui/themes";
import NextLink from "next/link";
import { AuthFormCard } from "./AuthFormCard";
import { SignUpForm } from "./SignUpForm";

function SignUpPage() {
  return (
    <Flex justify="center">
      <AuthFormCard>
        <Flex direction="column" gap="5">
          <Flex direction="column" gap="2" align="center">
            <Heading as="h2" size="6" weight="bold">
              Create Your Account
            </Heading>
            <Text size="2">Sign up to start managing your images securely</Text>
          </Flex>
          <SignUpForm />
          <Flex justify="center">
            <Text size="2">
              Already have an account?{" "}
              <Link asChild>
                <NextLink href="/sign-in">Sign in</NextLink>
              </Link>
            </Text>
          </Flex>
        </Flex>
      </AuthFormCard>
    </Flex>
  );
}

SignUpPage.displayName = "SignUpPage";
export { SignUpPage };

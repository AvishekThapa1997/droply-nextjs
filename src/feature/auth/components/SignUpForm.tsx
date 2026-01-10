"use client";
import { Form } from "@/shared/ui/form";
import { Input } from "@/shared/ui/input";
import { PasswordInput } from "@/shared/ui/password-input";
import { Box, Button, Checkbox, Flex, Text } from "@radix-ui/themes";
import { Mail, User } from "lucide-react";
import { SubmitHandler } from "react-hook-form";
import type { SignUpSchema } from "../validation/types";

function SignUpForm() {
  const onSubmit: SubmitHandler<SignUpSchema> = async (data) => {
    try {
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Form>
      <Flex direction="column" gap="4">
        <Box>
          <Input
            placeholder="Full Name"
            size="3"
            variant="surface"
            label="Full Name"
            color="gray"
            leftIcon={<User height="16" width="16" />}
          />
        </Box>
        <Box>
          <Input
            placeholder="Email"
            size="3"
            variant="surface"
            label="Email"
            color="gray"
            leftIcon={<Mail height="16" width="16" />}
          />
        </Box>
        <Box>
          <PasswordInput size={"3"} label="Password" placeholder="Password" />
        </Box>
        <Box>
          <PasswordInput
            size={"3"}
            label="Confirm Password"
            placeholder="Password"
          />
        </Box>

        <Flex gap="2">
          <Flex className="size-4 items-center">
            <Checkbox size="2" />
          </Flex>
          <Text size="2" className="leading-4">
            By signing up, you agree to our Terms of Service and Privacy Policy
          </Text>
        </Flex>

        <Button size="3" variant="solid" type="submit">
          Create Account
        </Button>
      </Flex>
    </Form>
  );
}

export { SignUpForm };

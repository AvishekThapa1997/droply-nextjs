"use client";
import { SubmitButton } from "@/shared/components/submit-button";
import { Form } from "@/shared/ui/form";
import { Input } from "@/shared/ui/input";
import { PasswordInput } from "@/shared/ui/password-input";
import type { FormActionState } from "@/types";
import { Box, Checkbox, Flex, Text } from "@radix-ui/themes";
import { Mail, User } from "lucide-react";
import { useActionState } from "react";
import { signUp } from "../actions";
import { SignUpSchema } from "../validation/types";

const initialState : FormActionState<string,SignUpSchema> = {
  status:"idle",
}

function SignUpForm() {
 const [state, action] = useActionState(signUp, initialState);
 const isCompleted = state.status === "completed";
 const previousInputData = isCompleted ? state.input : null;
  return (
    <Form action={action}>
      <Flex direction="column" gap="4">
        <Box>
          <Input
            placeholder="Full Name"
            size="3"
            variant="surface"
            label="Full Name"
            color="gray"
            name="name"
            leftIcon={<User height="16" width="16" />}
            autoComplete="name"
            title="Please enter a valid name"
            defaultValue={previousInputData?.name}
            required
          />
        </Box>
        <Box>
          <Input
            placeholder="Email"
            size="3"
            variant="surface"
            label="Email"
            color="gray"
            name="email"
            leftIcon={<Mail height="16" width="16" />}
            autoComplete="email"
            required
            type="email"
            defaultValue={previousInputData?.email}
          />
        </Box>
        <Box>
          <PasswordInput
            size={"3"}
            label="Password"
            placeholder="Password"
            autoComplete="new-password"
            minLength={8}
            name="password"
            defaultValue={previousInputData?.password}
            required
          />
        </Box>

        <Flex gap="2">
          <Flex className="size-5 items-center">
            <Checkbox size="2" />
          </Flex>
          <Text size="2" className="leading-5">
            By signing up, you agree to our Terms of Service and Privacy Policy
          </Text>
        </Flex>
        <SubmitButton size="3" variant="solid">
          Create Account
        </SubmitButton>
      </Flex>
    </Form>
  );
}

export { SignUpForm };

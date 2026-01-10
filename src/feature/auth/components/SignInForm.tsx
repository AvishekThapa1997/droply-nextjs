"use client";
import { Box, Button, Flex } from "@radix-ui/themes";
import { Form } from "@/shared/ui/form";
import { Input } from "@/shared/ui/input";
import { Mail } from "lucide-react";
import { PasswordInput } from "@/shared/ui/password-input";

function SignInForm() {
  return (
    <Form>
      <Flex direction="column" gap="4">
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

        <Button size="3" variant="solid" type="submit">
          Sign In
        </Button>
      </Flex>
    </Form>
  );
}

export { SignInForm };

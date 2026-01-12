"use client";
import { Form } from "@/shared/ui/form";
import { Input } from "@/shared/ui/input";
import { PasswordInput } from "@/shared/ui/password-input";
import { Box, Button, Checkbox, Flex, Text } from "@radix-ui/themes";
import { Mail, User } from "lucide-react";
import { SubmitHandler } from "react-hook-form";
import type { SignUpSchema } from "../validation/types";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signupSchema } from "../validation/signup-schema";


function SignUpForm() {
  const { register, handleSubmit  } = useForm<SignUpSchema>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });
  const onSubmit: SubmitHandler<SignUpSchema> = async (data) => {
    try {
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Flex direction="column" gap="4">
        <Box>
          <Input
            placeholder="Full Name"
            size="3"
            variant="surface"
            label="Full Name"
            color="gray"
            leftIcon={<User height="16" width="16" />}
            autoComplete="name"
            {...register("name")}
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
            autoComplete="email"
            {...register("email")}
          />
        </Box>
        <Box>
          <PasswordInput size={"3"} label="Password" placeholder="Password" autoComplete="new-password" />
        </Box>
        
        <Flex gap="2">
          <Flex className="size-5 items-center">
            <Checkbox size="2" />
          </Flex>
          <Text size="2" className="leading-5">
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

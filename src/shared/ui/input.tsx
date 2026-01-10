"use client";
import { Flex, Text, TextField } from "@radix-ui/themes";
import { InputLabel } from "./label";

interface InputProps extends TextField.RootProps {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  errorMessage?: string;
  label?: string | React.ReactNode;
}

type InputIconPosition = "left" | "right";

interface InputIconProps extends TextField.SlotProps {
  icon: React.ReactNode;
  position: InputIconPosition;
}

function Input({
  leftIcon,
  rightIcon,
  errorMessage,
  label,
  ...props
}: InputProps) {
  const isError = !!errorMessage;
  return (
    <Flex direction={"column"} gap={"1"}>
      {label && (
        <InputLabel size="2" weight="bold" mb="1">
          {label}
        </InputLabel>
      )}
      <TextField.Root {...props}>
        {leftIcon && <InputIcon icon={leftIcon} position="left" />}
        {rightIcon && <InputIcon icon={rightIcon} position="right" />}
      </TextField.Root>
      {isError && <InputError message={errorMessage} />}
    </Flex>
  );
}

function InputIcon({ icon, position, ...props }: InputIconProps) {
  return (
    <TextField.Slot side={position} {...props}>
      {icon}
    </TextField.Slot>
  );
}

function InputError({ message }: { message: string }) {
  return (
    <Text as="span" color="red" size="1" mt="1">
      {message}
    </Text>
  );
}

Input.displayName = "Input";
InputIcon.displayName = "InputIcon";
InputError.displayName = "InputError";

export { Input, InputError };
export type { InputProps };

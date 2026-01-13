"use client";
import { Flex, Text, TextField } from "@radix-ui/themes";
import { InputLabel } from "./label";
import { useId } from "react";
import { cn } from "@/lib/class";

interface InputProps extends TextField.RootProps {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  errorMessage?: string;
  label?: string | React.ReactNode;
  showLabel?:boolean  
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
  showLabel = true,
  ...props
}: InputProps) {
  const isError = !!errorMessage;
  const fallbackId = useId();
  const id = props.id ?? fallbackId;
  const labelVisibilityStyles = {
    'sr-only': !showLabel,
    'sr-only-focusable': !showLabel,
  }
  return (
    <Flex direction={"column"} gap={"1"}>
       <InputLabel htmlFor={id} size="2" weight="bold" mb="1" className={cn(labelVisibilityStyles)}>
          {label }
        </InputLabel>
      <TextField.Root {...props} id={id}>
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

"use client";
import { Button } from "@radix-ui/themes";
import { Eye, EyeOff, Lock } from "lucide-react";
import { useState } from "react";

import { Input, type InputProps } from "./input";

interface PasswordInputProps
  extends Omit<InputProps, "type" | "leftIcon" | "rightIcon" | "iconProps"> {}

interface PasswordVisibilityToggleProps {
  showPassword: boolean;
  togglePasswordVisibility: () => void;
}

function PasswordInput(props: PasswordInputProps) {
  const [showPassword, setShowPassword] = useState(false);
  const inputType = showPassword ? "text" : "password";
  function togglePasswordVisibility() {
    setShowPassword((prev) => !prev);
  }
  return (
    <Input
      type={inputType}
      leftIcon={<Lock height="16" width="16" />}
      rightIcon={
        <PasswordVisibilityToggle
          showPassword={showPassword}
          togglePasswordVisibility={togglePasswordVisibility}
        />
      }
      {...props}
    />
  );
}

function PasswordVisibilityToggle({
  showPassword,
  togglePasswordVisibility,
}: PasswordVisibilityToggleProps) {
  const Icon = showPassword ? EyeOff : Eye;
  return (
    <Button
      type="button"
      color="gray"
      variant="ghost"
      onClick={togglePasswordVisibility}
      className="cursor-pointer"
    >
      <Icon height="16" width="16" />
    </Button>
  );
}

PasswordInput.displayName = "PasswordInput";
PasswordVisibilityToggle.displayName = "PasswordVisibilityToggle";

export { PasswordInput, PasswordVisibilityToggle };

import { Text, type TextProps } from "@radix-ui/themes";
import { ComponentProps } from "react";

type LabelProps = Omit<TextProps, "as" | "asChild" | "htmlFor"> & {
  htmlFor?: string;
};

function InputLabel({ children, ...props }: LabelProps) {
  return (
    <Text {...props} asChild>
      <Label>{children}</Label>
    </Text>
  );
}

function Label(props: ComponentProps<"label">) {
  return <label {...props} />;
}

InputLabel.displayName = "InputLabel";
Label.displayName = "Label";
export { InputLabel };

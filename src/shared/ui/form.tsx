import type { ComponentProps } from "react";

function Form(props: ComponentProps<"form">) {
  return <form {...props} />;
}

export { Form };

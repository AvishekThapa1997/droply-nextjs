import type { ButtonProps } from '@radix-ui/themes';
import { Button, Spinner } from '@radix-ui/themes';
import { useFormStatus } from 'react-dom';

function SubmitButton(buttonProps:Omit<ButtonProps, "loading" | "type" | "disabled">) {
    const {pending} = useFormStatus();
  return (
    <Button type="submit" loading={pending} disabled={pending} {...buttonProps}>
        {buttonProps.children}
        <Spinner loading={pending}/>
    </Button>
  )
}

SubmitButton.displayName = "SubmitButton";
export { SubmitButton };




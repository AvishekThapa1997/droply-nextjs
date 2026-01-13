import type { PropsWithChildren } from "react";

export type BaseProps = {
  className?: string;
} & PropsWithChildren;


export type Result<T> = {
   success:true,
   data:T
} | {
    success:false,
    error:string
}


export type FormActionState<R,I = any> = undefined | {
  status:"completed",
  result:Result<R>,
  input?:I
}

    
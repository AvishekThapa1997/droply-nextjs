import { PropsWithChildren } from "react";
import Header from "./header";

function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}

export { Layout };

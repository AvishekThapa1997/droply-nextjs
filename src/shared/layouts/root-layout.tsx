import { PropsWithChildren } from "react";
import Header from "./header";
import { Box, Flex } from "@radix-ui/themes";

function Layout({ children }: PropsWithChildren) {
  return (
    <Flex direction="column" height="100svh" overflow={"hidden"}>
      <Header />
      <Box overflow={"auto"} className="flex-1 min-h-0">
        <Box height={"100%"}>{children}</Box>
      </Box>
    </Flex>
  );
}
Layout.displayName = "Layout";
export { Layout };

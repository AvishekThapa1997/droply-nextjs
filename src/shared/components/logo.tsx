import { Box, Flex, Text } from "@radix-ui/themes";
import { CloudUpload } from "lucide-react";
import Link from "next/link";

function Logo() {
  return (
    <Flex asChild gap={"3"} align={"center"}>
      <Link href="/">
        <CloudUpload size={36} className="text-(--accent-10)" />
        <Text size={"6"}>Droply</Text>
      </Link>
    </Flex>
  );
}

export default Logo;

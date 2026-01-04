import { Flex } from "@radix-ui/themes";
import Logo from "./logo";
import { HeaderNav } from "./header-nav";

function Header() {
  return (
    <Flex
      py={"5"}
      px={"6"}
      justify={"between"}
      className="border-b border-b-(--gray-6)"
      position={"sticky"}
      top={"0"}
    >
      <Logo />
      <HeaderNav />
    </Flex>
  );
}

export default Header;

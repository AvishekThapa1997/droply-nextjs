import { Box, type BoxProps, Card } from "@radix-ui/themes";

function AuthFormCard({ children, p = "4", ...props }: BoxProps) {
  return (
    <Box className="w-[min(450px,90%)]" pt="6">
      <Card>
        <Box p={p} {...props}>
          {children}
        </Box>
      </Card>
    </Box>
  );
}

AuthFormCard.displayName = "AuthFormCard";
export { AuthFormCard };

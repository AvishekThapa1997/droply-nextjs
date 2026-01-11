import bcrypt from "bcryptjs";
type ComparePasswordProps = {
  hashedPassword: string;
  password: string;
};
export function comparePassword({
  hashedPassword,
  password,
}: ComparePasswordProps) {
  return bcrypt.compare(password, hashedPassword);
}

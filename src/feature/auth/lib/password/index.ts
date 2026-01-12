import bcrypt from "bcryptjs";
type ComparePasswordProps = {
  hashedPassword: string;
  password: string;
};

type HashPasswordOptions = {
  salt?: string;
  password: string;
};
export function comparePassword({
  hashedPassword,
  password,
}: ComparePasswordProps) {
  return bcrypt.compare(password, hashedPassword);
}

export async function generateHashedPassword({
  password,
  salt,
}: HashPasswordOptions) {
  const _salt = salt ?? (await generatePasswordSalt());
  return bcrypt.hash(password, _salt);
}

export function generatePasswordSalt() {
  return bcrypt.genSalt();
}

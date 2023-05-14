import bcrypt from "bcrypt";
/**
 * Hashes the given password using bcrypt.
 * @param password - The password to hash.
 * @returns A promise that resolves to the hashed password.
 */
const encrypt = async (password: string): Promise<string> => {
  // Generate a salt to use for the hash
  const salt = await bcrypt.genSalt(10);
  // Hash the password with the salt
  const hash = await bcrypt.hash(password, salt);
  return hash;
};

/**
 * Verifies if the given password matches the given hash.
 * @param password - The password to verify.
 * @param hash - The hash to compare the password to.
 * @returns A promise that resolves to true if the password matches the hash, false otherwise.
 */
const verify = async (password: string, hash: string): Promise<boolean> => {
  // Compare the given password with the given hash
  const match = await bcrypt.compare(password, hash);
  return match;
};

export { encrypt, verify };

import crypto from "crypto";
import { cookies } from "next/headers";

const COOKIE_KEY = "key";

/**
 * Generate the hash for the date part of the cookie.
 */
function generateHash(text: string) {
  const secret = process.env.SECRET;
  if (!secret) throw new Error("SECRET is not defined");
  return crypto.createHmac("sha256", secret).update(text).digest("hex");
}

export const isAuthenticated = () => {
  const key = cookies().get(COOKIE_KEY);
  if (!key) return false;

  let [payload, hash] = key.value.split(".");
  if (!payload || !hash) return false;
  payload = atob(payload);
  hash = atob(hash);

  const expectedHash = generateHash(payload);
  if (hash !== expectedHash) return false;

  const expiration = new Date(payload);
  expiration.setHours(expiration.getHours() + 1);
  const now = new Date();
  return now < expiration;
};

export const signIn = () => {
  const payload = new Date().toISOString();
  const hash = generateHash(payload);
  const key = `${btoa(payload)}.${btoa(hash)}`;
  cookies().set(COOKIE_KEY, key);
};

"use server";
import crypto from "crypto";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { COOKIE_KEY } from "@/lib/constants";

const isPasswordValid = (password: string) => {
  const hash = crypto.createHash("sha256").update(password).digest("hex");
  const validPassword = process.env.PASSWORD;
  return hash === validPassword;
};

const generateKey = () => {
  const secret = process.env.SECRET!;
  const payload = new Date().toISOString();
  const hash = crypto
    .createHmac("sha256", secret)
    .update(payload)
    .digest("hex");
  return `${btoa(payload)}.${btoa(hash)}`;
};

export const handleFormSubmit = async (_: unknown, form: FormData) => {
  const password = form.get("password") as string;
  if (isPasswordValid(password)) {
    const key = generateKey();
    cookies().set(COOKIE_KEY, key);
    redirect("/");
  } else {
    return "";
  }
};

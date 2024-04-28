"use server";
import crypto from "crypto";
import { redirect } from "next/navigation";
import { signIn } from "@/lib/server/auth";

const isPasswordValid = (password: string) => {
  const hash = crypto.createHash("sha256").update(password).digest("hex");
  const validPassword = process.env.PASSWORD;
  return hash === validPassword;
};

export const handleFormSubmit = async (_: unknown, form: FormData) => {
  const password = form.get("password") as string;
  if (isPasswordValid(password)) {
    signIn();
    redirect("/");
  } else {
    return "";
  }
};

import React from "react";
import ClientComponent from "./components/ClientComponent";
import { isAuthenticated } from "@/lib/server/auth";
import { redirect, RedirectType } from "next/navigation";

export default function AuthPage() {
  if (isAuthenticated()) redirect("/", RedirectType.replace);

  return (
    <main className="h-screen flex items-center justify-center">
      <ClientComponent />
    </main>
  );
}

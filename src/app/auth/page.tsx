import React from "react";
import ClientComponent from "./components/ClientComponent";
import { handleFormSubmit } from "./page.actions";

export default function AuthPage() {
  return (
    <main className="h-screen flex items-center justify-center">
      <ClientComponent action={handleFormSubmit} />
    </main>
  );
}

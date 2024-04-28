"use client";
import React from "react";
import { useFormState, useFormStatus } from "react-dom";
import { handleFormSubmit } from "./ClientComponent.actions";

const Input = (props: React.ComponentProps<"input">) => (
  <input
    className="border border-gray-300 rounded-md p-2 text-black"
    {...props}
  />
);

const Button = () => {
  const { pending } = useFormStatus();
  return (
    <button
      disabled={pending}
      className="mt-5 text-white p-2 rounded-md border border-slate-600 w-full disabled:text-slate-600 disabled:cursor-not-allowed"
    >
      Access
    </button>
  );
};

export default function ClientComponent(props: React.ComponentProps<"form">) {
  const [state, action] = useFormState(handleFormSubmit, null);

  return (
    <form
      action={action}
      className="flex flex-col gap-4 items-center justify-center"
      {...props}
    >
      <Input type="password" name="password" placeholder="Password" required />

      <Button />

      <p className="text-red-500">{state}</p>
    </form>
  );
}

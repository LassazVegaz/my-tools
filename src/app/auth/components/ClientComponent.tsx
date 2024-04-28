"use client";
import React from "react";
import { useFormState } from "react-dom";
import { handleFormSubmit } from "../page.actions";

const Input = (props: React.ComponentProps<"input">) => (
  <input
    className="border border-gray-300 rounded-md p-2 text-black"
    {...props}
  />
);

export default function ClientComponent(props: React.ComponentProps<"form">) {
  const [state, action] = useFormState(handleFormSubmit, " ");

  return (
    <form
      action={action}
      className="flex flex-col gap-4 items-center justify-center"
      {...props}
    >
      <Input type="password" name="password" placeholder="Password" required />

      <button className="mt-5 text-white p-2 rounded-md border border-slate-600 w-full disabled:text-slate-600 disabled:cursor-not-allowed">
        Access
      </button>

      <p className="text-red-500">{state}</p>
    </form>
  );
}

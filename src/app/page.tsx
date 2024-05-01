import { ClientComponent } from "./components";
import Link from "next/link";
import { isAuthenticated } from "@/lib/server/auth";
import { RedirectType, redirect } from "next/navigation";

export default function Home() {
  if (!isAuthenticated()) redirect("/auth", RedirectType.replace);

  return (
    <div className="h-screen grid grid-rows-[auto,1fr,auto] relative transition-all duration-500">
      <Link
        href="/numbers"
        className="absolute right-2 top-2 border rounded-full w-8 h-8 flex items-center justify-center cursor-pointer"
      >
        1
      </Link>

      <h1 className="text-center text-3xl py-2">
        Worked Hours of Last 40 Days
      </h1>

      <ClientComponent />
    </div>
  );
}

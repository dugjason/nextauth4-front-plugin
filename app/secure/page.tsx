"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";

export default function SecurePage() {
  const { data: session } = useSession();
  if (!session) return null;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="relative flex items-center justify-center">
        <p>
          Hi{" "}
          <span className="font-semibold">
            {session?.user?.name ?? "there"}
          </span>
          , welcome to the secure page!
          <br />
          <br />
          You will only be able to see this page if you are signed in.
        </p>
      </div>
      <Link href="/" className="underline text-blue-400">
        {" "}
        Go to main page
      </Link>
    </main>
  );
}

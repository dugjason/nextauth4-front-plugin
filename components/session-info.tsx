"use client";

import { signOut, useSession } from "next-auth/react";

export function SessionInfo() {
  const { data: session, status } = useSession();

  const handleSignInClick = async () => {
    window.open(
      `${process.env.NEXT_PUBLIC_FRONTEND_URL}/google-signin`,
      "_blank",
      "width=500,height=800"
    );
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-full p-8 space-y-4 text-center">
      <h1 className="text-2xl font-bold">Session Info</h1>
      Auth Status: {status}
      <code className="font-mono font-bold">
        {JSON.stringify({ session }, null, 2)}
      </code>
      <br />
      <div>
        <button
          className="px-4 py-2 text-white bg-blue-500 rounded-lg"
          onClick={handleSignInClick}
        >
          Sign in
        </button>
        <button
          className="px-4 py-2 text-white bg-red-500 rounded-lg"
          onClick={() => signOut()}
        >
          Sign out
        </button>
      </div>
    </div>
  );
}

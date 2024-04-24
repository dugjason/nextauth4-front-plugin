"use client";

import { useFrontContext } from "@/providers/front";
import { signIn } from "next-auth/react";
import { useEffect } from "react";

export const SignInPageClient = ({ user }: { user: any }) => {
  useEffect(() => {
    if (!user)
      void signIn("google", {
        callbackUrl: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/login-success`,
      });

    if (user) {
      window.opener.postMessage(
        { user },
        process.env.NEXT_PUBLIC_FRONTEND_URL as string
      );
      window.close();
    }
  }, [user]);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        position: "absolute",
        left: 0,
        top: 0,
        background: "white",
      }}
    ></div>
  );
};

export function FrontAuth() {
  const front = useFrontContext();

  return front?.authenticate();
}

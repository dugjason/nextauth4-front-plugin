"use client";

import { FrontContextProvider } from "@/providers/front";
import { SessionProvider } from "next-auth/react";

export function Providers({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <SessionProvider>
      <FrontContextProvider>{children}</FrontContextProvider>
    </SessionProvider>
  );
}

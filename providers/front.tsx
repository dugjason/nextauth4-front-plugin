"use client";

import { createContext, useContext, useEffect, useState } from "react";
import Front, { type ConversationContext } from "@frontapp/plugin-sdk";

/*
 * Context.
 */

export const FrontContext = createContext<ConversationContext | undefined>(
  undefined
);

/*
 * Hook.
 */

export function useFrontContext() {
  return useContext(FrontContext);
}

/*
 * Component.
 */

interface FrontContextProviderProps {
  children: React.ReactNode;
}

export const FrontContextProvider = ({
  children,
}: FrontContextProviderProps) => {
  const [context, setContext] = useState<ConversationContext>();

  useEffect(() => {
    const subscription = Front.contextUpdates.subscribe((frontContext) => {
      setContext(frontContext as ConversationContext);
    });
    return () => subscription.unsubscribe();
  }, []);

  return (
    <FrontContext.Provider value={context}>{children}</FrontContext.Provider>
  );
};

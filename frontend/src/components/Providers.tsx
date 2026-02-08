"use client";

/**
 * 🔐 PROVIDERS
 * 
 * Client Component que envolve a aplicação com SessionProvider do NextAuth.
 * Necessário porque o SessionProvider usa React Context, que só funciona em Client Components.
 */

import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

interface ProvidersProps {
  children: ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
  return (
    <SessionProvider>
      {children}
    </SessionProvider>
  );
}

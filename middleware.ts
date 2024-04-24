import withAuth from "next-auth/middleware";

import { authOptions } from "@/lib/auth";

export default withAuth({
  jwt: { decode: authOptions.jwt?.decode },
  callbacks: {
    authorized: ({ token }) => !!token,
  },
  pages: {
    signIn: "/google-signin",
    error: "/error",
  },
});

export const config = { matcher: ["/secure"] };

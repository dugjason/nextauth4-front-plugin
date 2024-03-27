import { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

const cookieOptions = {
  httpOnly: true,
  partioned: true,
  sameSite: 'none',
  secure: true,
  path: '/',
}

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,

  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.AUTH_GOOGLE_ID as string,
      clientSecret: process.env.AUTH_GOOGLE_SECRET as string,
    }),
  ],

  // Update cookie options to be secure and sameSite: 'none' and partioned
  cookies: {
    sessionToken: {
      name: `__Secure-next-auth.session-token`,
      options: cookieOptions
    },
    callbackUrl: {
      name: `__Secure-next-auth-callback-url`,
      options: cookieOptions
    },
    csrfToken: {
      name: `__Secure-next-auth.csrf-token`,
      options: cookieOptions
    },
    pkceCodeVerifier: {
      name: `__Secure-next-auth.pkce.code_verifier`,
      options: cookieOptions
    }
  },

};

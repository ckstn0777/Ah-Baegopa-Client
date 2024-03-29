import NextAuth from 'next-auth'
import { JWT } from 'next-auth/jwt'

declare module 'next-auth' {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      /** The user's postal address. */
      name: string
      email: string
      image: string
      userId: string
      role: 'ADMIN' | 'USER'
    }
  }

  interface User {
    id: string
    nickname?: string | undefined
    name?: string | undefined
    email?: string | undefined
    gender?: 'F' | 'M' | 'U' | undefined
    age?: string | undefined
    birthday?: string | undefined
    profile_image?: string | undefined
    birthyear?: string | undefined
    mobile?: string | undefined
    role?: 'ADMIN' | 'USER'
  }
}

declare module 'next-auth/jwt' {
  /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
  interface JWT {
    /** OpenID ID Token */
    userId: string
    role: 'ADMIN' | 'USER'
  }
}

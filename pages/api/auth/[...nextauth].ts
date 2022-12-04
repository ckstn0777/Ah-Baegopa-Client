import NextAuth, { NextAuthOptions } from 'next-auth'
import NaverProvider from 'next-auth/providers/naver'

export const authOptions: NextAuthOptions = {
  providers: [
    NaverProvider({
      clientId: process.env.NAVER_CLIENT_ID!,
      clientSecret: process.env.NAVER_CLIENT_SECRET!,
    }),
  ],
  // callbacks: {
  //   async jwt({ token }) {
  //     return token
  //   },
  // },
  pages: {
    signIn: '/auth/register',
  },
}

export default NextAuth(authOptions)

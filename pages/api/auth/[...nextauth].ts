import { PrismaAdapter } from '@next-auth/prisma-adapter'
import NextAuth, { NextAuthOptions } from 'next-auth'
import NaverProvider, { NaverProfile } from 'next-auth/providers/naver'
import prisma from '@utils/database'

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: 'jwt',
  },
  providers: [
    NaverProvider<NaverProfile>({
      clientId: process.env.NAVER_CLIENT_ID!,
      clientSecret: process.env.NAVER_CLIENT_SECRET!,
      profile(profile, tokens) {
        return {
          id: profile.response.id,
          name: profile.response.nickname,
          email: profile.response.email,
          image: profile.response.profile_image,
          // optional
          gender: profile.response.gender,
          age: profile.response.age,
        }
      },
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

import { PrismaAdapter } from '@next-auth/prisma-adapter'
import NextAuth, { NextAuthOptions } from 'next-auth'
import NaverProvider, { NaverProfile } from 'next-auth/providers/naver'
import prisma from '@utils/database'

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  secret: process.env.NEXTAUTH_SECRET, // jwt 암호화
  session: {
    // next-auth.session-token (cookie)
    strategy: 'jwt',
    maxAge: 60 * 60 * 24 * 7,
  },
  jwt: {
    maxAge: 60 * 60 * 24 * 7,
  },
  providers: [
    NaverProvider<NaverProfile>({
      clientId: process.env.NAVER_CLIENT_ID!,
      clientSecret: process.env.NAVER_CLIENT_SECRET!,
      async profile(profile, tokens) {
        const user = profile.response
        return {
          id: user.id,
          name: user.nickname,
          email: user.email,
          image: user.profile_image,
          // optional
          gender: user.gender,
          age: user.age,
        }
      },
    }),
  ],
  callbacks: {
    async signIn({ profile }) {
      // 유저 DB 업데이트 ex) profile, name 업데이트 된 경우
      const user = (profile as NaverProfile).response

      if (user && user.id) {
        const account = await prisma.account.findFirst({
          select: {
            userId: true,
          },
          where: {
            providerAccountId: user.id,
          },
        })

        if (account && account.userId) {
          await prisma.user.update({
            where: { id: account.userId },
            data: {
              image: user.profile_image,
              name: user.name,
            },
          })
        }
      }
      return true
    },

    async jwt({ token, user, account }) {
      if (user) {
        token.userId = user.id
      }
      return token
    },
    async session({ session, token, user }) {
      session.user.userId = token.userId
      return session
    },
  },

  // pages: {
  //   signIn: '/auth/register',
  // },
  //debug: true,
}

export default NextAuth(authOptions)

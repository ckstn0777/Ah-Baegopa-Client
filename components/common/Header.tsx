'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Search } from '../icons'
import { signOut, useSession } from 'next-auth/react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

function Header() {
  const { data: session, status } = useSession()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const router = useRouter()

  console.log('session', session)

  return (
    <header className="flexbox-between p-4 shadow">
      <Link href="/">
        <Image src="/images/logo.png" alt="logo" width={132} height={40} />
      </Link>
      <div className="flexbox-between gap-3">
        <div className="bg-gray2 w-28 h-9 rounded-lg ">
          <Link href="/search" className="w-full h-full flex items-center">
            <Search className="ml-2" />
          </Link>
        </div>

        {session && status === 'authenticated' ? (
          <div className="relative">
            <img
              src={session.user.image}
              alt="user"
              width={40}
              height={40}
              className="rounded-full"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            />

            <div
              className={
                isMenuOpen ? 'block absolute -left-16 top-10 bg-gray2 drop-shadow-lg' : 'hidden'
              }
            >
              <ul className="text-body2">
                <li className="px-4 py-2 border-b">프로필 설정</li>
                <li className="px-4 py-2 border-b" onClick={() => router.push('/article/write')}>
                  아티클 생성
                </li>
                {session.user.role === 'ADMIN' && (
                  <li className="px-4 py-2 border-b" onClick={() => router.push('/market/write')}>
                    가게 등록
                  </li>
                )}
                <li className="px-4 py-2 border-b" onClick={() => signOut()}>
                  로그아웃
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <Link
            href="/auth/login"
            className="flexbox-center bg-primary text-white text-sm rounded-lg w-16 h-9  hover:bg-primary-hover active:bg-primary-active"
          >
            로그인
          </Link>
        )}
      </div>
    </header>
  )
}

export default Header

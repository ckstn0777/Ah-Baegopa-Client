import { Google, KaKao, Naver } from '@components/icons'
import Image from 'next/image'
import Link from 'next/link'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="h-screen flexbox-center flex-col px-10">
      <div className="mb-10">
        <Link href="/">
          <Image src="/images/logo.png" alt="logo" width={148} height={40} />
        </Link>
      </div>

      {children}

      <div className="w-full flex flex-col gap-3">
        <button
          className="flexbox-center gap-2 text-sm rounded-lg py-3.5"
          style={{ backgroundColor: '#FAE500' }}
        >
          <KaKao />
          카카오톡
        </button>
        <button
          className="flexbox-center gap-2 text-sm text-white rounded-lg py-3.5"
          style={{ backgroundColor: '#19CE60' }}
        >
          <Naver />
          네이버
        </button>
        <button
          className="flexbox-center gap-2 text-sm rounded-lg py-3.5"
          style={{ backgroundColor: '#F4F4F4' }}
        >
          <Google />
          Google
        </button>
      </div>
    </main>
  )
}

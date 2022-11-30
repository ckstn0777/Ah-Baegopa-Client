import Image from 'next/image'
import Link from 'next/link'
import { Search } from '../icons'

function Header() {
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

        <Link
          href="/auth/login"
          className="flexbox-center bg-primary text-white text-sm rounded-lg w-16 h-9  hover:bg-primary-hover active:bg-primary-active"
        >
          로그인
        </Link>
      </div>
    </header>
  )
}

export default Header

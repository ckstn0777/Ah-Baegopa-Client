import Image from 'next/image'
import Link from 'next/link'
import { Search } from '../icons'

function Header() {
  return (
    <header className="flexbox-between p-4 shadow">
      <div>
        <Image src="/images/logo.png" alt="logo" width={132} height={40} />
      </div>
      <div className="flexbox-between gap-3">
        <div className="bg-gray2 w-28 h-9 rounded-lg flex items-center">
          <Search className="ml-2" />
        </div>

        <Link
          href="/auth/login"
          className="flexbox-center bg-primary text-white text-sm rounded-lg w-16 h-10  hover:bg-primary-hover active:bg-primary-active"
        >
          로그인
        </Link>
      </div>
    </header>
  )
}

export default Header

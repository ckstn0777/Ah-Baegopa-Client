import Image from 'next/image'
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
        <button className="bg-primary text-white text-sm rounded-lg	px-2.5 py-2 w-16 hover:bg-primary-hover active:bg-primary-active">
          로그인
        </button>
      </div>
    </header>
  )
}

export default Header

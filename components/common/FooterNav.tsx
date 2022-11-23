'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Bookmark, Compass, Game, Home } from '../icons'

function FooterNav() {
  const pathname = usePathname()

  return (
    <div className="flex justify-around items-center w-full absolute left-0 bottom-0 bg-gray2 py-6">
      <Link href="/" className={pathname === '/' ? 'text-primary' : ''}>
        <Home />
      </Link>
      <Link href="/compass" className={pathname === '/compass' ? 'text-primary' : ''}>
        <Compass width="28" height="28" />
      </Link>
      <Link href="/bookmark" className={pathname === '/bookmark' ? 'text-primary' : ''}>
        <Bookmark width="28" height="28" />
      </Link>
      <Link href="/games" className={pathname === '/games' ? 'text-primary' : ''}>
        <Game width="28" height="28" />
      </Link>
    </div>
  )
}

export default FooterNav

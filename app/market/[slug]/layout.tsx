'use client'

import { Bookmark, Close, Star } from '@components/icons'
import SwiperImageSlide from '@components/SwiperImageSlide'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'

function Layout({ params, children }: { params: any; children: React.ReactNode }) {
  const router = useRouter()
  const pathname = usePathname()

  return (
    <main>
      <div className="relative">
        <button
          onClick={() => router.back()}
          className="absolute top-9 right-5 z-10 bg-white w-10 h-10 rounded-full flexbox-center cursor-pointer"
          style={{ boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }}
        >
          <Close />
        </button>
        <SwiperImageSlide />
      </div>

      <div className="px-7 py-8 flex">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <h2 className="text-heading2 font-bold">종로구청 구내식당</h2>
            <div className="flexbox-center">
              <Star width={18} height={18} className="mt-0.5" />
              <span>4.7</span>
            </div>
          </div>

          <div className="flex gap-2">
            <span className="bg-primary-light text-primary-dark rounded-xl px-2 py-1 text-caption1">
              #구내식당
            </span>
            <span className="bg-primary-light text-primary-dark rounded-xl px-2 py-1 text-caption1">
              #맛집
            </span>
            <span className="bg-primary-light text-primary-dark rounded-xl px-2 py-1 text-caption1">
              #착한가격
            </span>
          </div>
        </div>

        <div className="mt-2">
          <Bookmark />
        </div>
      </div>

      <ul className="grid grid-cols-3 justify-items-center items-center table-wrapper">
        <li
          className={`py-2 w-full text-center ${
            pathname?.includes('information') ? 'bg-primary text-white' : 'bg-white text-black'
          }`}
        >
          <Link href={`/market/${params.slug}/information`}>정보</Link>
        </li>
        <li
          className={`py-2 w-full text-center ${
            pathname?.includes('menu') ? 'bg-primary text-white' : 'bg-white text-black'
          }`}
        >
          <Link href={`/market/${params.slug}/menu`}>메뉴</Link>
        </li>
        <li
          className={`py-2 w-full text-center ${
            pathname?.includes('review') ? 'bg-primary text-white' : 'bg-white text-black'
          }`}
        >
          <Link href={`/market/${params.slug}/review`}>리뷰</Link>
        </li>
      </ul>

      <div className="px-7 py-4">{children}</div>
    </main>
  )
}

export default Layout

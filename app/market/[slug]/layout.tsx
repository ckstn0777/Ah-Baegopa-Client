'use client'

import { Bookmark, Close, Star } from '@components/icons'
import SwiperImageSlide from '@components/SwiperImageSlide'
import Link from 'next/link'

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <div className="relative">
        <Link
          href="/"
          className="absolute top-9 right-5 z-10 bg-white w-10 h-10 rounded-full flexbox-center cursor-pointer"
          style={{ boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25);' }}
        >
          <Close />
        </Link>
        <SwiperImageSlide />
      </div>

      <div className="px-7 py-8 flex">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <h2 className="text-heading2 font-bold">종로구청 구내식당</h2>
            <div className="flexbox-center">
              <Star width={18} height={18} />
              <span>4.7</span>
            </div>
          </div>

          <div className="flex gap-2">
            <span className="bg-primary-light text-primary-dark rounded-xl px-1.5 py-1 text-caption1">
              #구내식당
            </span>
            <span className="bg-primary-light text-primary-dark rounded-xl px-1.5 py-1 text-caption1">
              #맛집
            </span>
            <span className="bg-primary-light text-primary-dark rounded-xl px-1.5 py-1 text-caption1">
              #착한가격
            </span>
          </div>
        </div>

        <div className="mt-2">
          <Bookmark />
        </div>
      </div>

      {children}
    </main>
  )
}

export default Layout

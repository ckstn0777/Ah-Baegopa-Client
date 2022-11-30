import { ArrowLeft, Search } from '@components/icons'
import Link from 'next/link'

function Page() {
  return (
    <>
      <header className="flex items-center gap-4 px-4 py-4 shadow">
        <Link href="/">
          <ArrowLeft />
        </Link>
        <div className="flex items-center gap-2 w-full px-3 py-2 mr-2 bg-gray2 rounded-lg">
          <Search />
          <input
            type="text"
            placeholder="검색어를 입력해주세요"
            className="bg-gray2 placeholder:text-body2"
          />
        </div>
      </header>
      <main>
        <section className="px-5 py-4">
          <h3 className="text-heading3 font-bold">최근 검색어</h3>
        </section>

        <div className="w-full h-2 bg-gray2 drop-shadow-sm"></div>

        <section className="px-5 py-4">
          <h3 className="text-heading3 font-bold">검색어 순위</h3>
        </section>

        <div className="w-full h-2 bg-gray2 drop-shadow-sm"></div>

        <section className="px-5 py-4">
          <h3 className="text-heading3 font-bold">MD 추천 키워드</h3>
        </section>
      </main>
    </>
  )
}

export default Page

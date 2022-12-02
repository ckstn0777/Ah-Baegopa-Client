import { ArrowLeft, Close, Search } from '@components/icons'
import SearchRankRow from '@components/SearchRankRow'
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
          <div className="flexbox-between">
            <h3 className="text-heading3 font-bold mb-3">최근 검색어</h3>
            <button className="text-body2 text-primary">전체삭제</button>
          </div>
          <div className="flex gap-3">
            <button className="flexbox-center bg-primary-light text-primary-dark rounded-xl px-1.5 py-1">
              <span className="text-body2">돈까스</span>
              <Close width={16} height={16} />
            </button>

            <button className="flexbox-center bg-primary-light text-primary-dark rounded-xl px-1.5 py-1">
              <span className="text-body2">도시락</span>
              <Close width={16} height={16} />
            </button>
          </div>
        </section>

        <div className="w-full h-2 bg-gray2 drop-shadow-sm"></div>

        <section className="px-5 py-4">
          <h3 className="text-heading3 font-bold mb-2">검색어 순위</h3>
          <ul className="grid grid-rows-5 grid-cols-2 gap-x-3 gap-y-2">
            <SearchRankRow rank={1} keyword="구내식당" />
            <SearchRankRow rank={6} keyword="돈까스" />
            <SearchRankRow rank={2} keyword="버거킹" />
            <SearchRankRow rank={7} keyword="브리또" />
            <SearchRankRow rank={3} keyword="샐러드" />
            <SearchRankRow rank={8} keyword="순대국밥" />
            <SearchRankRow rank={4} keyword="떡볶이" />
            <SearchRankRow rank={9} keyword="김치찌개" />
            <SearchRankRow rank={5} keyword="맘스터치" />
            <SearchRankRow rank={9} keyword="우동" />
          </ul>
        </section>

        <div className="w-full h-2 bg-gray2 drop-shadow-sm"></div>

        <section className="px-5 py-4">
          <h3 className="text-heading3 font-bold mb-2">MD 추천 키워드</h3>
          <p>날씨도 쌀쌀한 요즘, 시원한 콩국수 어떠신가요~?</p>
        </section>
      </main>
    </>
  )
}

export default Page

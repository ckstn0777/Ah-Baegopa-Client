import { ArrowDownFill, ArrowLeft } from '@components/icons'
import Link from 'next/link'

function Page() {
  return (
    <>
      <header className="relative flexbox-center py-6 border-b">
        <div className="absolute left-4 top-7">
          <Link href="/">
            <ArrowLeft />
          </Link>
        </div>
        <h2 className="text-heading2 font-bold">아티클 작성</h2>
      </header>
      <main className="px-4 py-4 h-4/5">
        <form className="flex flex-col gap-4 h-full">
          <div className="flex flex-col">
            <label htmlFor="title" className="mb-2 font-bold text-heading4">
              제목
            </label>
            <input
              id="title"
              type="text"
              placeholder="제목을 입력하세요."
              className="w-full px-4 py-3 border-solid	border-2 border-gray-2 rounded-lg	input-placeholder"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="hashtag" className="mb-2 font-bold text-heading4">
              해시태그
            </label>
            <div className="flexbox-between border-solid border-2 border-gray-2 rounded-lg">
              <div className="flex-1 px-4 py-3 ">
                <input
                  id="hashtag"
                  type="text"
                  placeholder="해시태그를 골라주세요."
                  className="input-placeholder outline-none"
                />
              </div>

              <div className="flexbox-center gap-2 h-full">
                <span className="w-px self-stretch bg-gray4 my-2"></span>
                <ArrowDownFill className="mr-2 text-gray4" />
              </div>
            </div>
          </div>

          <div className="flex-1 flex flex-col">
            <label htmlFor="content" className="mb-2 font-bold text-heading4">
              내용
            </label>
            <textarea
              id="content"
              placeholder="내용을 입력하세요."
              className="h-full px-4 py-3 border-solid	border-2 border-gray-2 rounded-lg	input-placeholder"
            />
          </div>

          <button className="w-full bg-primary-disabled text-white text-sm rounded-lg	py-3.5">
            등록하기
          </button>
        </form>
      </main>
    </>
  )
}

export default Page

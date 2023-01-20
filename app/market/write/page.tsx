'use client'

import { ArrowLeft, PlusCircle } from '@components/icons'
import { useRouter } from 'next/navigation'

function Page() {
  const router = useRouter()

  return (
    <>
      <header className="relative flexbox-center py-6">
        <div className="absolute left-4 top-7" onClick={() => router.back()}>
          <ArrowLeft />
        </div>
        <h2 className="text-heading2 font-bold">가게 등록</h2>
      </header>
      <main className="px-6 py-6 bg-gray2 min-h-full">
        <form>
          <div className="flex justify-start flex-col gap-4 mb-14">
            <div className="flex gap-4">
              <label htmlFor="name" className="text-heading3 font-bold w-20 flex-none">
                가게 이름
              </label>
              <input
                type="text"
                id="name"
                className="flex-auto rounded-lg drop-shadow-md px-3 py-2 input-placeholder text-body2 min-w-28"
                placeholder="가게명을 입력해주세요."
              />
            </div>
            <div className="flex gap-4">
              <label htmlFor="introduction" className="text-heading3 font-bold w-20">
                가게 소개
              </label>
              <textarea
                id="introduction"
                rows={5}
                className="flex-1 rounded-lg drop-shadow-md px-3 py-2 input-placeholder text-body2"
                placeholder="가게를 짧게 소개해보세요."
              />
            </div>
            <div className="flex gap-4">
              <label htmlFor="time" className="text-heading3 font-bold w-20">
                영업시간
              </label>
              <textarea
                id="time"
                rows={5}
                className="flex-1 rounded-lg drop-shadow-md px-3 py-2 input-placeholder text-body2"
                placeholder={`입력 예시)
평일 오전 10:00~오후 21:00
주말 오전 11:00~오후19:00`}
              />
            </div>
            <div className="flex gap-4">
              <label htmlFor="address" className="text-heading3 font-bold w-20 flex-none">
                위치
              </label>
              <input
                type="text"
                id="address"
                className="flex-auto rounded-lg drop-shadow-md px-3 py-2 input-placeholder text-body2 min-w-28"
                placeholder="주소를 입력해주세요."
              />
            </div>
            <div className="flex gap-4">
              <label htmlFor="phone" className="text-heading3 font-bold w-20 flex-none">
                전화번호
              </label>
              <input
                type="text"
                id="phone"
                className="flex-auto rounded-lg drop-shadow-md px-3 py-2 input-placeholder text-body2 min-w-28"
                placeholder="전화번호를 입력해주세요."
              />
            </div>
          </div>

          <div className="flex flex-col justify-start mb-14">
            <div className="flex items-center gap-2 mb-4">
              <h3 className="text-heading3 font-bold">썸네일 등록</h3>
              <span className="text-caption2 text-primary">*한개 이상 등록 필요</span>
            </div>
            <div className="flex gap-4 mt-4">
              <div className="flex flex-col items-center justify-center w-40 h-40 rounded-lg border border-gray3">
                <img src="/images/plus.png" alt="plus" />
                <span className="text-caption2 text-gray3">이미지 등록</span>
              </div>
              <div className="flex flex-col items-center justify-center w-40 h-40 rounded-lg border border-gray3">
                <img src="/images/plus.png" alt="plus" />
                <span className="text-caption2 text-gray3">이미지 등록</span>
              </div>
              <div className="flex flex-col items-center justify-center w-40 h-40 rounded-lg border border-gray3">
                <img src="/images/plus.png" alt="plus" />
                <span className="text-caption2 text-gray3">이미지 등록</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 justify-start mb-14">
            <div className="flex items-center gap-2">
              <h3 className="text-heading3 font-bold">메뉴 등록</h3>
              <span className="text-caption2 text-primary">*한 가지 이상 등록 필요</span>
            </div>

            <div className="flex flex-col gap-3">
              <div className="flex gap-4 ">
                <div className="flex flex-col items-center justify-center w-28 h-28 rounded-lg border border-gray3">
                  <img src="/images/plus.png" alt="plus" />
                  <span className="text-caption2 text-gray3">이미지 등록</span>
                </div>

                <div className="flex-1 flex flex-col gap-1">
                  <input
                    type="text"
                    id="menu-name"
                    className="rounded-lg drop-shadow-md px-3 py-2 input-placeholder text-body2 "
                    placeholder="메뉴명을 입력해주세요."
                  />
                  <input
                    type="text"
                    id="menu-desc"
                    className="rounded-lg drop-shadow-md px-3 py-2 input-placeholder text-body2 "
                    placeholder="메뉴를 짧게 소개해보세요."
                  />
                  <input
                    type="text"
                    id="menu-price"
                    className="rounded-lg drop-shadow-md px-3 py-2 input-placeholder text-body2"
                    placeholder="가격을 입력해주세요."
                  />
                </div>
              </div>

              <div className="flex gap-2">
                <label>
                  <input type="radio" name="menu-type" className="mr-2" />
                  <span></span>
                  <span>대표</span>
                </label>
                <label>
                  <input type="radio" name="menu-type" className="mr-2" />
                  <span></span>
                  <span>인기</span>
                </label>
                <label>
                  <input type="radio" name="menu-type" className="mr-2" />
                  <span></span>
                  <span>신메뉴</span>
                </label>
                <label>
                  <input type="radio" name="menu-type" className="mr-2" />
                  <span></span>
                  <span>추천</span>
                </label>
              </div>
            </div>

            <div className="mt-4 flexbox-center w-full rounded-lg border border-gray3 bg-white drop-shadow-md py-0.5">
              <button
                disabled
                className="flexbox-center gap-2 text-primary text-sm rounded-lg h-9 "
              >
                <PlusCircle />
                <span>메뉴 추가</span>
              </button>
            </div>
          </div>

          <div className="flex justify-end gap-2">
            <button className="text-primary text-sm w-16 h-9">
              <span>취소</span>
            </button>
            <button
              disabled
              className="flexbox-center bg-primary text-white text-sm rounded-lg w-20 h-9 
              hover:bg-primary-hover active:bg-primary-active disabled:bg-primary-disabled"
            >
              <span>등록하기</span>
            </button>
          </div>
        </form>
      </main>
    </>
  )
}

export default Page

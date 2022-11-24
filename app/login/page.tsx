import { Google, KaKao, Naver } from '@components/icons'
import Image from 'next/image'
import Link from 'next/link'

function Page() {
  return (
    <main className="h-screen flexbox-center flex-col px-10">
      <div className="mb-10">
        <Link href="/">
          <Image src="/images/logo.png" alt="logo" width={148} height={40} />
        </Link>
      </div>
      <form className="w-full flex flex-col gap-5 mb-3">
        <div className="flex flex-col">
          <label htmlFor="email" className="mb-2 font-bold text-heading5">
            이메일
          </label>
          <input
            id="email"
            type="email"
            placeholder="이메일을 입력하세요."
            className="px-4 py-3 border-solid	border-2 border-gray-2 rounded-lg	"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="password" className="mb-2 font-bold text-heading5">
            비밀번호
          </label>
          <input
            id="password"
            type="password"
            placeholder="비밀번호를 입력하세요."
            className="px-4 py-3 border-solid	border-2 border-gray-2 rounded-lg	"
          />
        </div>
        <button disabled className="bg-primary-disabled text-white text-sm rounded-lg	py-3.5">
          로그인
        </button>
      </form>
      <div className="flexbox-center mb-10">
        <span className="text-caption1">아이디(이메일) 찾기</span>
        <span className="text-caption1 mx-1">|</span>
        <span className="text-caption1">비밀번호 찾기</span>
        <span className="text-caption1 mx-1">|</span>
        <span className="text-caption1">회원가입</span>
      </div>

      <div className="w-full relative mb-6">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-500/30"></div>
        </div>
        <div className="relative flex justify-center">
          <span className="bg-white px-2 text-body2">간편 회원가입</span>
        </div>
      </div>

      <div className="w-full flex flex-col gap-3">
        <button
          className="flexbox-center gap-2 text-sm rounded-lg py-3.5"
          style={{ backgroundColor: '#FAE500' }}
        >
          <KaKao />
          카카오톡
        </button>
        <button
          className="flexbox-center gap-2 text-sm text-white rounded-lg py-3.5"
          style={{ backgroundColor: '#19CE60' }}
        >
          <Naver />
          네이버
        </button>
        <button
          className="flexbox-center gap-2 text-sm rounded-lg py-3.5"
          style={{ backgroundColor: '#F4F4F4' }}
        >
          <Google />
          Google
        </button>
      </div>
    </main>
  )
}

export default Page

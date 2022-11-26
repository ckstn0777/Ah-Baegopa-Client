import Link from 'next/link'

function Page() {
  return (
    <>
      <form className="w-full flex flex-col gap-5 mb-3">
        <div className="flex flex-col">
          <label htmlFor="email" className="mb-2 font-bold text-heading5">
            이메일
          </label>
          <input
            id="email"
            type="email"
            placeholder="example@naver.com"
            className="px-4 py-3 border-solid	border-2 border-gray-2 rounded-lg	input-placeholder"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="password" className="mb-2 font-bold text-heading5">
            비밀번호
          </label>
          <input
            id="password"
            type="password"
            placeholder="8자 이상, 영문/숫자/특수문자 중 2가지 이상 입력"
            className="px-4 py-3 border-solid	border-2 border-gray-2 rounded-lg input-placeholder"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="password" className="mb-2 font-bold text-heading5">
            비밀번호 확인
          </label>
          <input
            id="password"
            type="password"
            placeholder="비밀번호를 다시 입력해주세요."
            className="px-4 py-3 border-solid	border-2 border-gray-2 rounded-lg	input-placeholder"
          />
        </div>
        <button disabled className="bg-primary-disabled text-white text-sm rounded-lg	py-3.5">
          회원가입
        </button>
      </form>

      <div className="flexbox-center mb-10">
        <span className="text-caption1">
          계정이 이미 있으신가요?{' '}
          <Link href="/auth/login" className="font-bold">
            로그인
          </Link>
        </span>
      </div>

      <div className="w-full relative mb-6">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-500/30"></div>
        </div>
        <div className="relative flex justify-center">
          <span className="bg-white px-2 text-body2">간편 회원가입</span>
        </div>
      </div>
    </>
  )
}

export default Page

import CafeteriaCard from '@components/CafeteriaCard'
import BasicLayout from '@components/common/BasicLayout'

export default function Page() {
  return (
    <BasicLayout>
      <h2 className="text-heading3 font-bold mb-4">배고파 탐색하기</h2>

      <div className="mb-4">
        <h3 className="text-heading4 font-bold mb-2">카테고리</h3>
        <ul className="flex flex-wrap gap-x-3 gap-y-2 compass-ul">
          <li className="active">전체</li>
          <li>한식</li>
          <li>돈까스</li>
          <li>피자</li>
          <li>치킨</li>
          <li>분식</li>
          <li>햄버거</li>
          <li>샐러드</li>
          <li>브리또</li>
          <li>도시락</li>
          <li>국밥</li>
          <li>카레</li>
          <li>우동</li>
          <li>튀김</li>
        </ul>
      </div>

      <div>
        <h3 className="text-heading4 font-bold mb-2">테마</h3>
        <ul className="flex flex-wrap gap-x-3 gap-y-2 compass-ul">
          <li className="active">전체</li>
          <li>구내식당</li>
          <li>혼밥가능</li>
          <li>회식추천</li>
          <li>쾌적한곳</li>
          <li>줄이 별로 없는 곳</li>
        </ul>
      </div>

      <hr className="my-6" />

      <h2 className="text-heading3 font-bold mb-2">21건의 결과가 있습니다.</h2>
      <div className="flex items-center gap-2 text-body2 mb-4">
        <span className="text-primary">기본순</span>
        <span className="text-caption1">|</span>
        <span className="text-gray4">별점순</span>
        <span className="text-caption1">|</span>
        <span className="text-gray4">리뷰 많은 순</span>
        <span className="text-caption1">|</span>
        <span className="text-gray4">가격순</span>
      </div>

      <div className="flex flex-col gap-2">
        <CafeteriaCard />
        <CafeteriaCard />
      </div>
    </BasicLayout>
  )
}

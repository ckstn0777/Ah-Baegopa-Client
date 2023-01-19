function Page() {
  return (
    <section>
      <article className="px-7 py-6">
        <h3 className="text-heading3 font-bold mb-2">가게소개</h3>
        <p className="text-body2">
          국내 최고의 청정지역 제주에서 길러낸, 가장 맛있는 돼지 국내산 한우 No.9의 숙성 등심까지!
          한라담의 자체적인 숙성 비법으로 에이징 숙성을 통해 돼지고기 및 소고기가 가지고 있는 고유의
          감칠맛을 극대화 시킵니다.
        </p>
      </article>

      <div className="h-2 w-full bg-gray2 drop-shadow"></div>

      <article className="px-7 py-6">
        <h3 className="text-heading3 font-bold mb-2">영업정보</h3>
        <table className="table-auto border w-full text-body2">
          <tbody>
            <tr className="py-1.5 h-10 border-b">
              <th className="px-3 w-18 text-left bg-gray2">상호명</th>
              <td className="px-3">종로구청 구내식당</td>
            </tr>
            <tr className="py-1.5 h-10 border-b">
              <th className="px-3 w-20 text-left bg-gray2">영업시간</th>
              <td className="px-3">매일 오전 11:00 ~ 오후 1:00</td>
            </tr>
            <tr className="py-1.5 h-10 border-b">
              <th className="px-3 w-20 text-left bg-gray2">위치</th>
              <td className="px-3">서울 종로구 종로1길 36 대림빌딩</td>
            </tr>
            <tr className="py-1.5 h-10 border-b">
              <th className="px-3 w-20 text-left bg-gray2">전화번호</th>
              <td className="px-3">0507-1440-4400</td>
            </tr>
          </tbody>
        </table>
      </article>
    </section>
  )
}

export default Page

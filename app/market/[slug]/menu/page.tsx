import Image from 'next/image'

function Page() {
  return (
    <section>
      <article className="flex flex-col divide-y-2">
        <div className="h-32 px-7 py-6 flexbox-between">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-1">
              <span className="bg-primary-light text-primary-dark rounded-xl px-2 py-0.5 text-caption1">
                대표
              </span>
              <h3 className="text-heading3 font-bold">추어탕</h3>
            </div>
            <p className="text-body2">카케우동에 달작지근한 유부를 올린 우동</p>
            <p className="text-body1 text-primary font-bold ">10,000원</p>
          </div>
          <div>
            <Image
              src="http://source.unsplash.com/vdkyWisomns"
              alt="food image"
              width={60}
              height={60}
              className="object-cover"
            />
          </div>
        </div>

        <div className="h-32 px-7 py-6 flexbox-between">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-1">
              <span className="bg-primary-light text-primary-dark rounded-xl px-2 py-0.5 text-caption1">
                인기
              </span>
              <h3 className="text-heading3 font-bold">니꾸우동</h3>
            </div>
            <p className="text-body2">가케우동 달달한 소고기를 올린 우동</p>
            <p className="text-body1 text-primary font-bold ">8,000원</p>
          </div>
          <div>
            <Image
              src="https://images.unsplash.com/photo-1498837167922-ddd27525d352"
              alt="food image"
              width={60}
              height={60}
              className="object-cover"
            />
          </div>
        </div>

        <div className="h-32 px-7 py-6 flexbox-between">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-1">
              <h3 className="text-heading3 font-bold">규동</h3>
            </div>
            <p className="text-body1 text-primary font-bold ">8,800원</p>
          </div>
          <div>
            <Image
              src="https://images.unsplash.com/photo-1498837167922-ddd27525d352"
              alt="food image"
              width={60}
              height={60}
              className="object-cover"
            />
          </div>
        </div>
      </article>

      {/* <div className="h-2 w-full bg-gray2 drop-shadow"></div> */}

      <div className="bg-gray3 px-7 py-3 text-body2">
        메뉴 항목과 가격은 각 매장의 사정에 따라 기재된 내용과 다를 수 있습니다.
      </div>
    </section>
  )
}

export default Page

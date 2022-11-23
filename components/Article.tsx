import Image from 'next/image'

function Article() {
  return (
    <article>
      <div className="mb-2">
        <Image
          src="http://source.unsplash.com/vdkyWisomns"
          alt="article image"
          width={350}
          height={100}
          className="object-cover max-h-40 rounded-lg"
        />
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-heading3 font-bold">종로구청 구내식당을 소개합니다.</h3>
        <p className="text-body2">
          점심값이 두려운 요즘, 종로구청 구내식당을 소개드리려고 합니다. 종로구청은 자율 배식으로
          원하는 양만큼 먹을 수 있다는 장점이 있습니다.
        </p>
        <div className="flexbox-between">
          <div>
            <span className="text-caption1">좋아요 9개</span>
            <span className="text-caption1">댓글 3개</span>
          </div>
          <div>
            <span className="text-caption1">ckstn0777</span>
            <span className="text-caption1">21일전</span>
          </div>
        </div>
      </div>
    </article>
  )
}

export default Article

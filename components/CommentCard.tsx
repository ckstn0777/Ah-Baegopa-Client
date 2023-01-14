import Image from 'next/image'
import { HeartFill } from './icons'

function CommentCard() {
  return (
    <div className="flexbox-between">
      <div className="flex flex-col gap-2">
        <div className="flex justify-start items-center gap-1">
          <Image
            src="http://source.unsplash.com/OekcvtMyjG8"
            alt="article image"
            width={24}
            height={24}
            className="w-7 h-7 rounded-full"
          />
          <span className="text-caption1 text-gray5">ckstn0777</span>
          <span className="text-caption1 text-gray5">3일전</span>
        </div>

        <p className="text-body2">우와 꼭 한번 가봐야겠어요~!</p>

        <div className="flex gap-2 text-caption1 text-gray5">
          <span>답글</span>
          {/* <span>삭제</span> */}
          <span>신고</span>
        </div>
      </div>

      <div className="flex items-center gap-1">
        <HeartFill className="text-primary" />
        <span className="text-caption1">5</span>
      </div>
    </div>
  )
}

export default CommentCard

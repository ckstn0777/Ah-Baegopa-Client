import Image from 'next/image'
import { HeartFill, Heart } from './icons'

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

      <HeartBox isHeart={true}>5</HeartBox>
      {/* <div className="flex items-center gap-1">
        <HeartFill className="text-primary" />
        <span className="text-caption1">5</span>
      </div> */}
    </div>
  )
}

function UserInfo({
  username,
  profile,
  regDate,
}: {
  username: string
  profile: string
  regDate: string | Date
}) {
  return (
    <div className="flex justify-start items-center gap-1">
      <Image
        src="http://source.unsplash.com/OekcvtMyjG8"
        alt="article image"
        width={24}
        height={24}
        className="w-7 h-7 rounded-full"
      />
      <span className="text-caption1 text-gray5">{username}</span>
      <span className="text-caption1 text-gray5">{regDate.toString()}</span>
    </div>
  )
}

function Comment({ children }: { children: React.ReactNode }) {
  return <p className="text-body2">{children}</p>
}

function AddInfo({
  isReply = true,
  isDelete = true,
  isReport = true,
}: {
  isReply: boolean
  isDelete: boolean
  isReport: boolean
}) {
  return (
    <div className="flex gap-2 text-caption1 text-gray5">
      {isReply && <span>답글</span>}
      {isDelete && <span>삭제</span>}
      {isReport && <span>신고</span>}
    </div>
  )
}

function HeartBox({ isHeart, children }: { isHeart: boolean; children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-1">
      {isHeart ? <HeartFill className="text-primary" /> : <Heart />}

      <span className="text-caption1">{children}</span>
    </div>
  )
}

CommentCard.UserInfo = UserInfo
CommentCard.Comment = Comment
CommentCard.AddInfo = AddInfo
CommentCard.HeartBox = HeartBox

export default CommentCard

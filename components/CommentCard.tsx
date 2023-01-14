import Image from 'next/image'
import { HeartFill, Heart, Star } from './icons'

// const ToggleContext = createContext<{ on: boolean; toggle: () => void } | null>(null)

function CommentCard({ children }: { children: React.ReactNode }) {
  return <div className="flexbox-between">{children}</div>
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
        src={profile}
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

function StarScore({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-1">
      <Star width={18} height={18} className="text-primary" />
      <span className="text-caption1">{children}</span>
    </div>
  )
}

function Comment({ children }: { children: React.ReactNode }) {
  return <p className="text-body2">{children}</p>
}

function AddInfo({
  isReply = false,
  isDelete = false,
  isReport = false,
}: {
  isReply?: boolean
  isDelete?: boolean
  isReport?: boolean
}) {
  return (
    <div className="flex gap-2 text-caption1 text-gray5">
      {isReply && <span>답글</span>}
      {isDelete && <span>삭제</span>}
      {isReport && <span>신고</span>}
    </div>
  )
}

function HeartBox({ isHeart = false, children }: { isHeart?: boolean; children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-1">
      {isHeart ? <HeartFill className="text-primary" /> : <Heart />}
      <span className="text-caption1">{children}</span>
    </div>
  )
}

CommentCard.UserInfo = UserInfo
CommentCard.StarScore = StarScore
CommentCard.Comment = Comment
CommentCard.AddInfo = AddInfo
CommentCard.HeartBox = HeartBox

export default CommentCard

import CommentCard from '@components/CommentCard'
import UserInput from '@components/common/UserInput'
import { Bookmark, Close, Heart, Share } from '@components/icons'
import Image from 'next/image'
import Link from 'next/link'

export default function Page() {
  return (
    <main className="relative">
      <div className="relative h-64">
        <Link
          href="/"
          className="absolute top-9 right-5 z-10 bg-white w-10 h-10 rounded-full flexbox-center cursor-pointer"
          style={{ boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25);' }}
        >
          <Close />
        </Link>
        <Image
          src="http://source.unsplash.com/vdkyWisomns"
          alt="article image"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <section className="bg-white absolute left-0 top-56 w-full px-5 py-8 rounded-t-4xl">
        <article>
          <div className="flex gap-1 mb-2">
            <span className="text-primary text-caption1">#구내식당</span>
            <span className="text-primary text-caption1">#종로구</span>
          </div>

          <div className="flex items-center mb-3">
            <h2 className="text-heading1 font-bold break-keep basis-9/12">
              종로구청 구내식당 소개합니다
            </h2>
            <div className="basis-3/12">
              <Bookmark className="ml-auto" />
            </div>
          </div>

          <div className="flex justify-end items-center gap-1 mb-6">
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

          <div className="flex flex-col gap-4 text-body2 mb-4">
            <p>
              점심 값이 두려운 요즘, 종로구청 구내식당을 소개드리려고 합니다. 종로구청은 자율
              배식으로 6000원으로 넉넉하게 먹을 수 있습니다.
            </p>
            <p>
              그렇다고 절대 반찬 질이 떨어지지 않습니다. 항상 메인 반찬은 나오고 서브 반찬 또한
              먹을만 합니다. 다만 저는 회사에서 종로구청 구내식당까지 거리가 있다보니 자주 못가고
              있지만 어쩌다 한번씩 가더라도 항상 만족하고 나옵니다.
            </p>
            <p>가끔씩 가서 돈을 절약하고 한번씩 비싼걸 먹어보는 것도 나쁘지 않다고 생각합니다 :)</p>
          </div>

          <div className="flexbox-between">
            <div className="flexbox-center gap-1">
              <Heart />
              <span className="text-caption1 text-gray5">좋아요 14개</span>
            </div>
            <div className="flexbox-center gap-1">
              <Share />
              <span className="text-caption1 text-gray5">공유하기</span>
            </div>
          </div>
        </article>

        <hr className="my-5" />

        <div>
          <h2 className="text-heading3 font-bold mb-4">댓글 5개</h2>

          <UserInput type="text" placeholder="댓글을 입력해주세요." />

          {/* <input
            id="comment"
            type="text"
            placeholder="댓글을 입력해주세요."
            className="w-full px-4 py-3 border-solid	border-2 border-gray-2 rounded-lg	placeholder:text-caption1 mb-6"
          /> */}

          <div className="flex flex-col gap-6">
            <CommentCard>
              <div className="flex flex-col gap-2">
                <CommentCard.UserInfo
                  username={'기운찬곰'}
                  profile={'http://source.unsplash.com/OekcvtMyjG8'}
                  regDate={'3일전'}
                />
                <CommentCard.Comment>우와 꼭 한번 가봐야겠어요~!</CommentCard.Comment>
                <CommentCard.AddInfo isReply isDelete isReport />
              </div>
              <CommentCard.HeartBox>5</CommentCard.HeartBox>
            </CommentCard>

            <CommentCard>
              <div className="flex flex-col gap-2">
                <CommentCard.UserInfo
                  username={'기운찬곰'}
                  profile={'http://source.unsplash.com/OekcvtMyjG8'}
                  regDate={'3일전'}
                />
                <CommentCard.Comment>우와 꼭 한번 가봐야겠어요~!</CommentCard.Comment>
                <CommentCard.AddInfo isReply isReport />
              </div>
              <CommentCard.HeartBox isHeart>12</CommentCard.HeartBox>
            </CommentCard>
          </div>
        </div>
      </section>
    </main>
  )
}

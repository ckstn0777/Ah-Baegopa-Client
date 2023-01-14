import CommentCard from '@components/CommentCard'
import UserInput from '@components/common/UserInput'

function Page() {
  return (
    <section>
      <article className="px-7 py-6">
        <div className="flex items-center gap-2 mb-4">
          <h3 className="text-heading3 font-bold">4.2점</h3>
          <p className="text-body2 text-gray4">후기 5개</p>
        </div>

        <UserInput type="text" placeholder="후기를 입력해주세요." star={true} />

        <div className="flex flex-col gap-6">
          <CommentCard />
          <CommentCard />
          <CommentCard />
        </div>
      </article>
    </section>
  )
}

export default Page

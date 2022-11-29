import Article from '@components/ArticleCard'
import BasicLayout from '@components/common/BasicLayout'
import Link from 'next/link'
import style from './page.module.scss'

export default function Page() {
  return (
    <BasicLayout>
      <h2 className="text-heading2 font-bold mb-4">최신 아티클</h2>
      <button>
        <Link href="/article/write">신규등록</Link>
      </button>
      <section className={style.section}>
        <Article />
        <Article />
        <Article />
      </section>
    </BasicLayout>
  )
}

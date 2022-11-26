import Article from '@components/ArticleCard'
import BasicLayout from '@components/common/BasicLayout'
import style from './page.module.scss'

export default function Page() {
  return (
    <BasicLayout>
      <main className="px-5 py-4">
        <h2 className="text-heading2 font-bold mb-4">최신 아티클</h2>
        <section className={style.section}>
          <Article />
          <Article />
          <Article />
        </section>
      </main>
    </BasicLayout>
  )
}

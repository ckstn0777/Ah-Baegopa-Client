import Header from './Header'
import FooterNav from './FooterNav'

function BasicLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header />
      <main className="px-5 py-4 pb-20">{children}</main>
      <FooterNav />
    </div>
  )
}

export default BasicLayout

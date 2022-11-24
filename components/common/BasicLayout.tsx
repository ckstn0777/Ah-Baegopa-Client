import Header from './Header'
import FooterNav from './FooterNav'

function BasicLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header />
      {children}
      <FooterNav />
    </div>
  )
}

export default BasicLayout

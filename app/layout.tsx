import '../styles/globals.scss'
import { Noto_Sans_KR } from '@next/font/google'
import AuthContext from 'context/AuthContext'

const notoSansKR = Noto_Sans_KR({
  weight: ['400', '700'],
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className={notoSansKR.className}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Ah-Baegopa</title>
      </head>
      <body>
        <AuthContext>{children} </AuthContext>
      </body>
    </html>
  )
}

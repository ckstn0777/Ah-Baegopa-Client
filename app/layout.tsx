import Header from '../components/common/Header'
import '../styles/globals.scss'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Ah-Baegopa</title>
      </head>
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}

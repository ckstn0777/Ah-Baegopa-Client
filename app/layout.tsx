import '../styles/globals.scss'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head>
        <title>Ah-Baegopa-Client</title>
      </head>
      <body>{children}</body>
    </html>
  )
}

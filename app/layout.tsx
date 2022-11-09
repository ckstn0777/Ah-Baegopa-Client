import React from 'react'
import GlobalStyle from '../styles/GlobalStyle'
import RootStyleRegistry from './emotion'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head>
        <title>Ah-Baegopa-Client</title>
      </head>
      <body>
        {/* <GlobalStyle /> */}
        {children}
      </body>
    </html>
  )
}

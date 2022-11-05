import React from 'react'
import GlobalStyle from '../styles/GlobalStyle'

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

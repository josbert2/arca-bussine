import './globals.css'
import { Inter } from 'next/font/google'
import Providers from './Providers'
import { Suspense } from 'react';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Suspense>
          <Nav />
        </Suspense>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}

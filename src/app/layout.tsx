import './globals.css'
import Header from './components/Header'
import Background from './components/Background'

import { Comic_Neue } from 'next/font/google'

export const metadata = {
  title: 'Amazon Notes',
  description: 'Amazon notes app to demo next13',
}


const sans = Comic_Neue({ subsets: ['latin'], weight: '300'})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={sans.className + ' m-16 flex flex-wrap text-black'}>
        <div className='relative grow' >
          <Header />
          <main> {children} </main>
          <Background />
        </div>
        <div className={' outline outline-black bg-white drop-shadow hover:drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]  rounded-sm m-2 w-[200px] h-[120px] inline p-2 z-100'}>This experience was designed by, and for Liquid Retina XDR Displays</div>
      </body>
    </html>
  )
}
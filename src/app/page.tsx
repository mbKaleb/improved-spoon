import Image from 'next/image'
import { Comic_Neue } from 'next/font/google'

const sans = Comic_Neue({ subsets: ['latin'], weight: '300'})

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className={sans.className + " z-10 w-full max-w-5xl items-center justify-between text-lg lg:flex "}>
        comic sans
      </div>
    </main>
  )
}

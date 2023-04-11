import './globals.css'
import Header from './components/Header'
import Background from './components/Background'

export const metadata = {
  title: 'Amazon Notes',
  description: 'Amazon notes app to demo next13',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-white m-16 relative'>
        <Header />
        <main> {children} </main>
        <Background />
      </body>
    </html>
  )
}
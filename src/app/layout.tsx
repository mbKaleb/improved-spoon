import './globals.css'

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
      <body>{children}</body>
    </html>
  )
}

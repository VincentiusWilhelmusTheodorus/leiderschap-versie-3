import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Leiderschap in de Sport - HBO Sportkunde',
  description: 'Leer over leiderschapstheorieën toegepast op sport - Voor HBO Sportkunde studenten',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl">
      <body className="bg-gray-100 min-h-screen" suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  )
}
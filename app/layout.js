import './styles/main.scss'
import Header from './components/header'
import Footer from './components/footer'


export const metadata = {
  title: 'Emmanuel Ekpo',
  description: 'A software developer who loves to code :)',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  }, 
  // manifest: '/site.webmanifest',
  // themeColor: '#ffffff',
  // colorScheme: 'dark light',
  // openGraph: {
  //   title: 'Emmanuel Ekpo',
  //   description: 'A software developer who loves to code :)',
  //   url: 'https://emmanuel-ekpo.vercel.app',
  //   siteName: 'Emmanuel Ekpo',
  // }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
        </body>
    </html>
  )
}

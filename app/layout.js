import './styles/main.scss'
import Header from './components/header'
import Footer from './components/footer'
import Meta from './meta'



export const metadata = {
  title: 'Emmanuel Ekpo',
  description: 'Welcome to my portfolio website. I am a Software Engineer. Explore my projects, open-source work and contact me for any inquiries or collaborations.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link
        rel="icon"
        href="/assets/images/logo_dark.png"
        type="image/png"
        sizes="32x32"
      />
      {/* <Meta /> */}
      </head>
      <body>
        <Header />
        {children}
        <Footer />
        </body>
    </html>
  )
}

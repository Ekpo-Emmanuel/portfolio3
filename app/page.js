import Link from 'next/link'
import Header from './components/header'
import Footer from './components/footer'
 
export default function Page() {
  return (
    <>
      <Header />
          {/* Hero Section */}
          <section className='hero'>
            <span className='title'>Greetings,</span>
            <p>I’m <span>Emmanuel</span>, a Full Stack <span>Developer</span> </p>
          </section>
      <Footer />
    </>
  )
}
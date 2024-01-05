import Link from 'next/link'
import Header from './components/header'
import Footer from './components/footer'
import { ArrowRight } from 'lucide-react'; 
 

const Hero = () => {
  return (
    <section className='hero'>
      <div className='container'>
        <span className='title'>Hello, I'm Emmanuel ッ</span>
        <p>I am a <span>User Experience Designer</span> <span>Developer</span> <span>Entrepreneur</span>  who enjoys seamlessly bridging the gap between people and digital space by day, and a lofi loving doodler by night.</p>
        <div className='about'>
            <Link href="/about"><span>More About me</span></Link>
            <ArrowRight />
        </div>
      </div>
  </section> 
  )
}

export default function Page() {
  return (
    <>
      <Header />
      <Hero />

      {/* <Footer /> */}
    </>
  )
}
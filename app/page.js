"use client"

import React, { useEffect } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'; 
import ProjectContainer from './(pages)/projects/ProjectContainer';
import projectList from './(pages)/projects/projectList';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ProjectList from './(pages)/about/components/ProjectList';
import Tabs from './(pages)/about/components/Tabs';
import OtherStuff from './(pages)/about/components/OtherStuff';
import Contact from './(pages)/contact/page';


const Hero = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className='hero'>
      <div className='container' data-aos="fade-up">
        <span className='title' >Hello, I'm Emmanuel ッ</span>
        <p >I am a <span>Software Engineer</span><span>Designer</span>  who enjoys seamlessly bridging the gap between people and digital space by day, and a lofi loving doodler by night.</p>
        <div className='about'>
            <Link href="/about"><span>More About me</span></Link>
            <ArrowRight />
        </div>
      </div>
  </section> 
  )
}

export default function Page() {
  const featured = projectList.filter(project => project.featured === 'yes');
  return (
    <>
      <Hero />
        {/* <ProjectList isHomepage={true}/> */}
        <div className='divider'>
          <ProjectContainer 
            isHomepage={true} 
            projects={featured}
          />
          <div className='see-more'>
            <Link href={"/projects"}><span>See More</span></Link>
          </div>
        {/* <Tabs /> */}
        {/* <OtherStuff /> */}
      </div>
     </>
  )
}
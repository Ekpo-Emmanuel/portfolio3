"use client"

import React, { useEffect } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'; 
import ProjectContainer from './(pages)/projects/ProjectContainer';
import projectList from './(pages)/projects/projectList';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Hero = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className='hero'>
      <div className='container' data-aos="fade-up">
        <span className='title' >Hello, I'm Emmanuel ッ</span>
        <p >I am a <span>User Experience Designer</span> <span>Developer</span> <span>Entrepreneur</span>  who enjoys seamlessly bridging the gap between people and digital space by day, and a lofi loving doodler by night.</p>
        <div className='about'>
            <Link href="/about"><span>More About me</span></Link>
            <ArrowRight />
        </div>
      </div>
  </section> 
  )
}

export default function Page() {
  const trimmedProjectList = projectList.slice(0, 3);
  return (
    <>
      <Hero />
      <div className='divider'>
        <ProjectContainer isHomepage={true} projects={trimmedProjectList}/>
        <div className='see-more'>
          <Link href={"/projects"}><span>See all projects</span></Link>
        </div>
      </div>
     </>
  )
}
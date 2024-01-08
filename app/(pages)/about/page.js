import React from 'react'
import Link from 'next/link'
import { MailCheck, Instagram ,Github } from 'lucide-react';

const MyImage = () => {
  return (
    <img src='./assets/images/me.jpg' className='image'/>
  )
}
const Linedln = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><circle cx="4.983" cy="5.009" r="2.188" fill="currentColor"/><path fill="currentColor" d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118c1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783c-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66zm-6.142 0H6.87v12.139H3.095z"/></svg>
  )
}
const About = () => {
  const Links = [
    {
      'title': 'Linkedln',
      'url': 'https://www.linkedin.com/in/emmanuel-ekpo-a2973420b',
      'icon': <Linedln />
    }, 
    {
      'title': 'Mail',
      'url': 'http://ekpoemmanuelsg@gmail.com',
      'icon': <MailCheck />
    }, 
    {
      'title': 'Instagram',
      'url': '/',
      'icon': <Instagram  />
    }, 
    {
      'title': 'Github',
      'url': '/',
      'icon': <Github  />
    }, 
  ]
  return (
    <section className='aboutMe'>
      <div className='container'>
        <div className='sec1'>
          <MyImage />
          <div className='details'>
            <p className='title'>Emmanuel Ekpo is a purpose-driven developer who brings people and teams together.</p>
            <span>Welcome to my corner of the internet.</span>
            <p className='desc'> I'm passionate about design's power to unite people and improve lives. <br /> I'm skilled at solving complex problems through thoughtful design, integrating everyone's insights to find shared solutions, from strategy to refining user experiences. <br /> I've worked on diverse projects, including social media, technology, virtual venue design, R&D, exhibitions, interior, and architecture. I find inspiration in listening to people and sharing their passions.<br /><br /><br /> Currently, I’m pursuing a degree in Computer Science at Alexander College, and <strong> I’m actively looking for 2025 full-time position.</strong></p>
            <span>Feel free to reach out to me below :)</span>
            <div className='stack'>
              {Links.map((link, index) => (
                <Link href={link.url} key={index} target='_blank' className='link'>{link.icon}</Link>
              ))}
            </div>
          </div>
        </div>
        <div className='sec2'>
          <span className='title'>What i do</span>
          <div className='set1'>
            <span>XR Interaction Design</span>
            <span>Prototyping</span>
            <span>User Experience</span>
            <span>Spatial Design and 3D Modeling</span>
            <span>Game Design and Development</span>
          </div>
          <div className='set1'>
            <span>Systems Thinking</span>
            <span>Creative Thinking</span>
            <span>Product Strategy</span>
            <span>Project Management</span>
            <span>Cross-Functional Team Building</span>
          </div>
        </div>
        <div className='sec3'>
        <span className='title'>Tech Stack</span>
          <div className='set1'>
            <span>HTML, CSS</span>
            <span>Typescript React.JS Next.JS</span>
            <span>Express.js - Node.js</span>
            <span>Laravel - PHP </span>
            <span>Java - TestNG, Spring Boot, Python</span>
            <span>Game Design and Development</span>
          </div>
          <div className='set1'>
            <span>MySQL, PostgreSQL</span>
            <span>MongoDB, Redis</span>
            <span>Docker, Kubernetes</span>
            <span>Jenkins</span>
          </div>
          <div className='set1'>
            {/* <span>AWS</span> */}
            <span>Google Cloud Platform</span>
            <span>Wordpress, Joomla</span>
          </div>
        </div>
        <div className='sec5'></div>
      </div>
    </section>
  )
}

export default About
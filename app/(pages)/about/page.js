"use client"

import React, {useState} from 'react'
import Link from 'next/link'
import { MailCheck, Instagram ,Github } from 'lucide-react';
import Tabs from './components/Tabs';
import WhatIdo from './components/WhatIdo';
import ProjectList from './components/ProjectList';
import OtherStuff from './components/OtherStuff';
import allDetails from '@/app/includes/allDetails';

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
  const email = allDetails[0].email;
  const linkedln = allDetails[0].linkedln;
  const github = allDetails[0].github;
  const resume = allDetails[0].resume;

  const Links = [
    {
      'title': 'Linkedln',
      'url': linkedln,
      'icon': <Linedln />
    }, 
    {
      'title': 'Mail',
      'url': email,
      'icon': <MailCheck />
    }, 
    // {
    //   'title': 'Instagram',
    //   'url': '/',
    //   'icon': <Instagram  />
    // }, 
    {
      'title': 'Github',
      'url': github,
      'icon': <Github  />
    }, 
  ];
  return (
    <section className='aboutMe'>
      <div className='container'>
        <div className='sec1'>
          <MyImage />
          <div className='details'>
            <p className='title'>Emmanuel is a purpose-driven Engineer and Desinger  Excited to Innovate and Collaborate!</p>
            <p className='desc'>
              <span>I'm all about creating and designing that brings folks together and makes life better!<br />  I've got a knack for cracking tricky problems with smart design, blending everyone's ideas for kickass solutions—from big-picture strategy to fine-tuning user experiences. <br /> I've dipped my toes in various projects, from social media and tech to virtual venues, R&D, exhibitions, interiors, and even some cool architecture stuff.</span>
              <span>Currently, I’m pursuing a degree in Computer Science at Alexander College, and <strong> I’m actively looking for 2025 full-time position.</strong></span></p>
            <div className='stack'>
              {Links.map((link, index) => (
                <Link href={link.url} key={index} target='_blank' className='link'>{link.icon}</Link>
              ))}
              <Link href={resume} target='_blank' className='link'><span>Resume</span></Link>
            </div>
          </div>
        </div>
        <div className='sec4'>
          <div className='stack'>
            <Tabs />
          </div>
        </div>
        {/* <WhatIdo /> */}
        <ProjectList isHomepage={false}/>
        <OtherStuff />
      </div>
    </section>
  )
}

export default About
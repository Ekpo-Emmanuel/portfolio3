"use client"

import React, { useEffect } from 'react'
import Link from 'next/link'
import { ArrowUpRight, FolderArchive, Text } from 'lucide-react';
import { useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import allDetails from '../includes/allDetails';

/**
 * Header component for navigation menu.
 *
 * @return {JSX.Element} The navigation menu component
 */
function Header() {
  const blog = allDetails[0].blog;
  const resume = allDetails[0].resume;

    const links = [
        { title: 'Home', url: '/' }, 
        { title: 'Projects', url: '/projects' },
        { title: 'About', url: '/about' },
        { title: 'Contact', url: '/contact' },
        // { title: 'My Blog', url: blog },
    ]

    const logo = allDetails[0].logo;
    const [open, setOpen] = useState(false);
    const toggleMenu = () => setOpen(!open);

    useEffect(() => {
      AOS.init();
    }, []);

  return (
    <nav>
      <div className={open ? 'container min' : 'container'}>
        <Link href="/">
          <div className='logo'>
            <img src={logo} alt='logo' height={25} />
          </div>
        </Link>
        <div className='menu-container'>
          <div className='menu' onClick={toggleMenu}>
            <span>{open ? 'Close' : 'Menu'}</span>
            <div className={open ? 'dots rotate' : 'dots'}>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
        {open && (
          <div className='links' data-aos="fade-up">
            <ul>
              {links.map((link, index) => (
                <li key={link.title}>
                  <Link 
                    href={link.url} 
                    onClick={() => setOpen(false)}
                    target={index === links.length - 1 ? '_blank' : '_self'}
                    >
                      {link.title}
                    </Link>
                </li>
              ))}
            </ul>
            <ul>
                <li>
                  <span>
                    <Link href={blog} target={"_blank"}><span>Blog</span></Link>
                  </span>
                  <ArrowUpRight />
                </li>
            </ul>
            <ul>
                <li>
                  <span>
                    <Text />
                    <Link href='/archieve' target={"_blank"}><span>Archieve</span></Link>
                  </span>
                  <FolderArchive />
                </li>
            </ul>
            {/* <ul>
                <li>
                  <span>
                    <Text />
                    <Link href={resume} target={"_blank"}><span>Resume</span></Link>
                  </span>
                  <ArrowUpRight />
                </li>
            </ul> */}
          </div>
        )}
      </div>
    </nav>
  )
}

export default Header
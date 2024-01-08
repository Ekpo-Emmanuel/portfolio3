"use client"

import React from 'react'
import Link from 'next/link'
import { Moon, Sun, UserRound,ArrowUpRight, Send  } from 'lucide-react';
import { useState } from 'react';

function Header() {
    const links = [
        { title: 'Home', url: '/' },
        { title: 'Projects', url: '/projects' },
        { title: 'About', url: '/about' },
        { title: 'Contact', url: '/contact' },
        // { title: 'Resume', url: '/resume' }
    ]

    // toggle menu
    const [open, setOpen] = useState(false);
    const toggleMenu = () => setOpen(!open);

  return (
    <nav>
      <div className={open ? 'container min' : 'container'}>
        <Link href="/">
          <div className='logo'>
            <img src='./assets/images/logo_dark.png' alt='logo' height={25} />
          </div>
        </Link>
        <div className='menu-container'>
          {/* <div className='svg'>
              <Sun /> 
              <Moon />
          </div> */}
          <div className='menu' onClick={toggleMenu}>
            <span>{open ? 'Close' : 'Menu'}</span>
            <div className={open ? 'dots rotate' : 'dots'}>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
        {open && (
          <div className='links'>
            <ul>
              {links.map((link) => (
                <li key={link.title}>
                  <Link href={link.url} onClick={() => setOpen(false)}>{link.title}</Link>
                </li>
              ))}
            </ul>
            <ul>
                <li>
                  <span>
                    <Link href="https://ideavault.000webhostapp.com/Blog/index.php" target={"_blank"}><span>Blog</span></Link>
                  </span>
                  <Send />
                </li>
            </ul>
            <ul>
                <li>
                  <span>
                    <UserRound />
                    <Link href="/contact"><span>Resume</span></Link>
                  </span>
                  <ArrowUpRight />
                </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Header
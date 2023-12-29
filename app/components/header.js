import React from 'react'
import Link from 'next/link'

function Header() {
    const links = [
        { title: 'Home', url: '/' },
        { title: 'About', url: '/about' },
        { title: 'Contact', url: '/contact' },
        { title: 'Blog', url: '/blog' },
        { title: 'Projects', url: '/projects' },
        { title: 'Resume', url: '/resume' }
    ]
  return (
    <nav>
      <div className='logo'>
        <img src='./assets/images/logo_dark.png' alt='logo' height={25} />
      </div>
      <div className='links'>
        <ul>
          {links.map((link) => (
            <li key={link.title}>
              <Link href={link.url}>{link.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Header
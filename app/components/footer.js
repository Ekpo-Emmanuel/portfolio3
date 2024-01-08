import React from 'react'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react';

function Footer() {
  return (
    <footer>
      <div className='container'>
        <span className='title'>
          <img src="./assets/images/logo_dark.png" alt="logo" height={25}/>
        </span>
        <div className='links'>
          <div className='link'>
            <Link href={'https://github.com/Ekpo-Emmanuel'} target="_blank"><p><ArrowUpRight />github </p></Link>
            <Link href={'https://www.linkedin.com/in/emmanuel-ekpo-a2973420b'} target="_blank"><p><ArrowUpRight />Linkedln </p></Link>
            <Link href={'https://ekpoemmanuelsg@gmail.com'} target="_blank"><p><ArrowUpRight />Email </p></Link>
          </div>
          <span>Designed by Me ❤️</span>
        </div>
      </div>
    </footer>
    )
}

export default Footer
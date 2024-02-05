import React from 'react'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react';
import allDetails from '../includes/allDetails';

function Footer() {
  const logo = '../assets/images/logo_dark.png';
  const email = allDetails[0].email;
  const linkedln = allDetails[0].linkedln;
  const github = allDetails[0].github;
  const resume = allDetails[0].resume;

  return (
    <footer>
      <div className='container'>
        <span className='title'>
          {/* <img src={logo} alt="logo" height={25}/> */}
        </span>
        <div className='links'>
          <div className='link'>
            <Link href={github} target="_blank"><p><ArrowUpRight />github </p></Link>
            <Link href={linkedln} target="_blank"><p><ArrowUpRight />Linkedln </p></Link>
            <Link href={email} target="_blank"><p><ArrowUpRight />Email </p></Link>
          </div>
          <span>Designed by Me ❤️</span>
        </div>
      </div>
    </footer>
    )
}

export default Footer
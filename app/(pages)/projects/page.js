"use client"

import {React, useEffect, useState} from 'react'
import { ArrowDownRight } from 'lucide-react';
import gsap from 'gsap';
import Link from 'next/link';
import project from './projectList';
import {ArrowUpRight} from 'lucide-react'

import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);


const Tags = () => {
    const tags = ['All', 'FrontEnd', 'BackEnd', 'Website', 'FullStack'];
    const [activeTag, setActiveTag] = useState(0);

    const handleTag = (index) => {
      setActiveTag(index === activeTag ? null : index);
    };
    return (
        <div className='tags'>
            <p className='title'>Tags:</p>
            <ul>
                {tags.map((tag, index) => (
                    <li 
                    key={index}
                    onClick={() => handleTag(index)}
                    className={index === activeTag ? 'active' : ''}
                    >{tag}</li>
                ))}
            </ul>
        </div>
    )
}
const Project = () => {
  return (
    <>
    <section className="project">
        <div className='container'>
            <div className='section1'>  
                <p className='title-fade'>Portfolio<span>({project.length})</span></p>
            </div>
            <div className='section2'>
            <Tags />
                <div className='project-container' >
                    {project.map((project) => (
                        <div className='item' key={project.id}>
                            <div className='image'>
                                <img src={project.displa_img} alt={project.title}/>
                                <div className='redirects'>
                                    <Link href={project.redirects[0].github} target="_blank"><span>Source code</span></Link>
                                    <Link href={project.redirects[0].website} target="_blank"><ArrowUpRight /></Link>
                                </div>
                            </div>
                            <Link href="/projects">
                                <div className='details'>
                                    <div className='stack'>
                                        <ul>
                                            {project.technologies.split(', ').map((technology, index) => (
                                            <li key={index}>{technology}</li>
                                            ))}

                                        </ul>
                                    </div>  
                                    <div className='title'>
                                        <p> {project.title} </p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
    </>
  )
}


export default Project
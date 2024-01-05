"use client"

import {React, useEffect} from 'react'
import { ArrowDownRight } from 'lucide-react';
import gsap from 'gsap';
import Link from 'next/link';
import project from './projectList';

import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);


const Tags = () => {
    return (
        <div className='tags'>
            <p className='title'>Tags:</p>
            <ul>
                <li>All</li>
                <li>FrontEnd</li>
                <li>BackEnd</li>
                <li>Website</li>
                <li>FullStack</li>
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
                <p className='title-fade'>Portfolio<span>(11)</span></p>
            </div>
            <div className='section2'>
            <Tags />
                <div className='project-container' >
                    <Link href="/projects">
                        <div className='item'>
                            <div className='image'>
                                <img src='https://img.freepik.com/free-vector/realistic-black-background-with-realistic-elements_52683-76757.jpg?w=740&t=st=1703571412~exp=1703572012~hmac=a6833105ca83e813cecea2cf45e403ca5148c3f4ace9b58a22546e4bcd77d6d8' alt='img'/>
                            </div>
                            <div className='details'>
                                <div className='stack'>
                                    <ul>
                                        <li>HTML</li>
                                        <li>CSS</li>
                                        <li>JavaScript</li>
                                        <li>React</li>
                                        <li>Next.Js</li>
                                    </ul>
                                </div>
                                <div className='title'>
                                    <p> Porshe: Dream Machine </p>
                                </div>
                            </div>
                        </div>
                    </Link>
                    {project.map((project) => (
                        <div className='item' key={project.id}>
                            <div className='image'>
                                <img src={project.displa_img} alt={project.title}/>
                            </div>
                        <div className='details'>
                            <div className='stack'>
                                <ul>
                                    {project.technologies.split(', ').map((technology, index) => (
                                     <li key={index}>{technology}</li>
                                    ))}
                                    {/* <li>HTML</li>
                                    <li>CSS</li>
                                    <li>JavaScript</li>
                                    <li>React</li>
                                    <li>Next.Js</li> */}
                                </ul>
                            </div>
                            <div className='title'>
                                <p> {project.title  } </p>
                            </div>
                        </div>
                    </div>
                    ))}
                    {/* <div className='item'>
                        <div className='image'>
                            <img src='https://img.freepik.com/free-vector/abstract-3d-effect-textured-shapes-background_52683-29712.jpg?size=626&ext=jpg&ga=GA1.1.111424278.1703571385&semt=ais' alt='img'/>
                        </div>
                        <div className='details'>
                            <div className='stack'>
                                <ul>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>JavaScript</li>
                                    <li>React</li>
                                    <li>Next.Js</li>
                                </ul>
                            </div>
                            <div className='title'>
                                <p> Porshe: Dream Machine </p>
                            </div>
                        </div>
                    </div>
                    <div className='item'>
                        <div className='image'>
                            <img src='https://porfolio-prev44.000webhostapp.com/Ea%20Dev/assets/images/works/work-1/11.jpg' alt='img'/>
                        </div>
                        <div className='details'>
                            <div className='stack'>
                                <ul>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>JavaScript</li>
                                    <li>React</li>
                                    <li>Next.Js</li>
                                </ul>
                            </div>
                            <div className='title'>
                                <p> Porshe: Dream Machine </p>
                            </div>
                        </div>
                    </div>
                    <Link href="/projects">
                        <div className='item'>
                            <div className='image'>
                                <img src='https://img.freepik.com/free-vector/realistic-black-background-with-realistic-elements_52683-76757.jpg?w=740&t=st=1703571412~exp=1703572012~hmac=a6833105ca83e813cecea2cf45e403ca5148c3f4ace9b58a22546e4bcd77d6d8' alt='img'/>
                            </div>
                            <div className='details'>
                                <div className='stack'>
                                    <ul>
                                        <li>HTML</li>
                                        <li>CSS</li>
                                        <li>JavaScript</li>
                                        <li>React</li>
                                        <li>Next.Js</li>
                                    </ul>
                                </div>
                                <div className='title'>
                                    <p> Porshe: Dream Machine </p>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <div className='item'>
                        <div className='image'>
                            <img src='https://img.freepik.com/free-vector/abstract-3d-effect-textured-shapes-background_52683-29712.jpg?size=626&ext=jpg&ga=GA1.1.111424278.1703571385&semt=ais' alt='img'/>
                        </div>
                        <div className='details'>
                            <div className='stack'>
                                <ul>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>JavaScript</li>
                                    <li>React</li>
                                    <li>Next.Js</li>
                                </ul>
                            </div>
                            <div className='title'>
                                <p> Porshe: Dream Machine </p>
                            </div>
                        </div>
                    </div>
                    <div className='item'>
                        <div className='image'>
                            <img src='https://porfolio-prev44.000webhostapp.com/Ea%20Dev/assets/images/works/work-1/11.jpg' alt='img'/>
                        </div>
                        <div className='details'>
                            <div className='stack'>
                                <ul>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>JavaScript</li>
                                    <li>React</li>
                                    <li>Next.Js</li>
                                </ul>
                            </div>
                            <div className='title'>
                                <p> Porshe: Dream Machine </p>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    </section>
    </>
  )
}


export default Project
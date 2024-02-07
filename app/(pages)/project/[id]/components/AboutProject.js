import Link from 'next/link'
import { ArrowUpRight, Github } from 'lucide-react';


export default function AboutProject({ project }) {
  return (
    <div className='details'>
        <div className='about'>
            <p>Description</p>
            <span>{project.short_description}</span>
            <div className='link'>
                {
                    project.redirects[0].website === '/' ? (
                        <>
                        <Link href={project.redirects[0].github} target="_blank">
                            <p>View Project<Github /></p>
                        </Link>
                        </>
                    ) 
                    : 
                    <>
                    <Link href={project.redirects[0].website} target="_blank">
                        <p>View Live <ArrowUpRight /></p>
                    </Link>
                    <Link href={project.redirects[0].github} target="_blank"><Github /></Link>
                    </>
                }
            </div>
        </div>
        <div className='tech'>
            <div>
                <p>Role</p>
                <span>{project.role}</span>
            </div>
            <div>
                <p>Timeline</p>
                <span>{project.timeline}</span>
            </div>
            <div>
                <p>Platform</p>
                <span>{project.platform}</span>
            </div>
            <div>
                <p>Tools</p>
                <span>{project.technologies}</span>
            </div>
        </div>
    </div>
  )
}

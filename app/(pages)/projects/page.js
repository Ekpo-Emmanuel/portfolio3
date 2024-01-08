"use client"

import projectList from './projectList';
import ProjectContainer from './ProjectContainer';





const Project = () => {
    const numberOfProjects = projectList.length;

  return (
    <>
    <section className="project">
        <div className='container'>
            <div className='section1'>  
                <p className='title-fade'>Portfolio<span>({numberOfProjects})</span></p>
            </div>
            <ProjectContainer projects={projectList}/>
        </div>
    </section>
    </>
  )
}


export default Project
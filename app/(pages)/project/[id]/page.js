'use client'

import projectList from '../../projects/projectList';
import ImageGallery from './components/ImageGallery';
import MoreProjects from './components/MoreProjects';
import AboutProject from './components/AboutProject';

import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import Process from './components/Process';


const ProjectDetail = ({ params }) => {
  const id = params.id;
  const project = projectList[id];

  const nextProjectIndex = (Number(id) + 1) % projectList.length;
  const previousProjectIndex = (Number(id) - 1 + projectList.length) % projectList.length;

  
  return (
    <div className='Single-project'>
        {project ? 
        (
          <div className='container'>
            <div className='title'>
              <div className='sec1'>
                <p>{project.title}</p>
                <span>{project.headline}</span>
              </div>
              {project.redirects[0].website === '/' ? '' :
                <div className='line'>
                  <Link href={project.redirects[0].website} target="_blank" className='live'>View Live <ArrowUpRight /></Link>
                </div>
              }
            </div>
            {project.displa_img === '' ? '' : <div className='image'>
              <img src={`/assets/images/projects/${project.id == 0 ? project.images[0] : project.displa_img}`} alt={project.title}/>
            </div>}
    
            <AboutProject project={project}/>
            <ImageGallery 
              images={project.images} 
              projectTitle={project.title}
            />
            <Process process={project.process}/> 
            <MoreProjects 
              id={id} 
              previousProjectIndex={previousProjectIndex} 
              nextProjectIndex={nextProjectIndex} 
              projectList={projectList}
            />
          </div>
        ) : (
          <div  className='error'>
            <p className='title'>Project not found</p>
          </div>
        )}
    </div>
  );
};

export default ProjectDetail;

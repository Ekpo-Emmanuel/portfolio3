'use client'

import Link from 'next/link';
import projectList from '../../projects/projectList';
import { ArrowUpRight, Github } from 'lucide-react';
import { useState } from 'react';

const ProjectDetail = ({ params }) => {
  const id = params.id;
  const project = projectList[id];


  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);


  const nextProjectIndex = (Number(id) + 1) % projectList.length;
  const previousProjectIndex = (Number(id) - 1 + projectList.length) % projectList.length;

  
  return (
    <div className='Single-project'>
        {project ? (
          <div className='container'>
            <div className='title'>
              <p>{project.title}</p>
              {/* <span>{project.description}</span> */}
            </div>
            <div className='image'>
              <img src={project.displa_img} alt={project.title}/>
            </div>
            <div className='details'>
              <div className='about'>
                <p>About the project</p>
                <span>{project.short_description}</span>
                <div className='link'>
                      <Link href={project.redirects[0].website}>
                          <p>Live Website <ArrowUpRight /></p>
                      </Link>
                      <Link href={project.redirects[0].github} target="_blank"><Github /></Link>
                  </div>
              </div>
              <div className='tech'>
                <div>
                  <p>Role</p>
                  <span>Ux Design Intern</span>
                </div>
                <div>
                  <p>Timeline</p>
                  <span>Jun - Sep 2019</span>
                </div>
                <div>
                  <p>Platform</p>
                  <span>Web </span>
                </div>
              </div>
            </div>
            {/* <div className='process'>
              <p>Process</p>
              <span>The design system was treated on par with a product by defining a similar process that helps in continuously maintaining it and building over it. I could not disclose the detailed comprehensive process due to the NDA, but the brief version of the process followed is as shown below.</span>
            </div>
            <div className='accomplishments'>
              <p>Accomplishments</p>
              <ol>
                <li>Performed an audit of the components across the product to design and implement it in the library.</li>
                <li>Performed an audit of the components across the product to design and implement it in the library.</li>
                <li>Performed an audit of the components across the product to design and implement it in the library.</li>
                <li>Performed an audit of the components across the product to design and implement it in the library.</li>
                <li>Performed an audit of the components across the product to design and implement it in the library.</li>
                <li>Performed an audit of the components across the product to design and implement it in the library.</li>
                <li>Performed an audit of the components across the product to design and implement it in the library.</li>
              </ol>
            </div> */}
            <div className='images'>
                {project.images.map((image, index) => (
                  <div className='image' key={index}>
                      <img key={index} src={image} alt={index + 1} />
                  </div>
                ))}
            </div>
            <div className='seeMore'>
            {Number(id) !== 0 ? (
              <Link href={`/project/${previousProjectIndex}`}>
                  <p>Previous</p>
              </Link>
            ) : null}

            {Number(id) !== projectList.length - 1 ? (
              <Link href={`/project/${nextProjectIndex}`}>
                  <p>Next</p>
              </Link>
            ) : null}
              {/* <div className='seperate'>
                <span>Previous</span>
                <span>Next</span>
              </div> */}
            </div>
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

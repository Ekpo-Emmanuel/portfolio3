'use client'

import Link from 'next/link';
import projectList from '../../projects/projectList';
import { useEffect, useState } from 'react';

const ProjectDetail = ({ params }) => {
  const id = params.id;
  var project = projectList[id];

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
            <div className='process'>
              <p>Process</p>
              <span>The design system was treated on par with a product by defining a similar process that helps in continuously maintaining it and building over it. I could not disclose the detailed comprehensive process due to the NDA, but the brief version of the process followed is as shown below.</span>
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

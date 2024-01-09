import {React, useEffect, useState} from 'react'
import Link from 'next/link';
import projectList from './projectList';
import {ArrowUpRight} from 'lucide-react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const projectContainer = ({ projects, isHomepage = false}) => {
    useEffect(() => {
        AOS.init();
      }, []);
  const tags = ['All', 'FrontEnd', 'BackEnd', 'Website', 'FullStack'];
  const [activeTag, setActiveTag] = useState(0);
  const [filteredProjects, setFilteredProjects] = useState(projects);

  useEffect(() => {
    if (activeTag === 0) {
      setFilteredProjects(projects); 
    } else {
      const filtered = projects.filter((project) => project.tags && project.tags.includes(tags[activeTag]));
      setFilteredProjects(filtered);
    }
  }, [activeTag]);

  const handleTag = (index) => {
    setActiveTag(index === activeTag ? null : index);
  };
  return (
    <>
    <div className='section2'>
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
      <div className='project-container' >
          {filteredProjects.map((project) => (
              <div className='item' key={project.id} >
                  <div className='image'>
                      <img src={project.displa_img} alt={project.title}/>
                      <div className='redirects'>
                          <Link href={project.redirects[0].github} target="_blank"><span>Source code</span></Link>
                          <Link href={project.redirects[0].website} target="_blank"><ArrowUpRight /></Link>
                      </div>
                  </div>
                  <Link href={`Single-Project?id=${project.id}`}>
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
  </>
  )
}

export default projectContainer
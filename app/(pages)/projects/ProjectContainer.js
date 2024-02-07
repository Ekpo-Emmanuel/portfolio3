
import {React, useEffect, useState} from 'react'
import Link from 'next/link';
import {ArrowUpRight, Github} from 'lucide-react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const projectContainer = ({ projects}) => {
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

    const description = (project) => {
        const description = project.short_description;
        description.trim();

        const positionOfFullStop = description.indexOf('.');
        // const positionOfFullStop = description.indexOf('.', description.indexOf('.') + 1);

        return description.substring(0, positionOfFullStop) + ".";
    }
  return (
    <>
    <div className='section2'>
      {/* <div className='tags'>
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
      </div> */}
        <div className='selectWork-title'>
            {/* <h2 className="h2" id="work">Featured Works</h2> */}
            <p className="title">Selected Works</p>
        </div>
      <div className='project-container' >
          {filteredProjects.map((project) => (
            <div className='item' key={project.id} >
                <div className='image'>
                    <Link href={`/project/${project.id}`}> 
                        <img src={`/assets/images/projects/${project.displa_img}`} alt={project.title}/>
                    </Link>
                    <div className='redirects'>
                        <Link href={project.redirects[0].github} target="_blank"><span>Source code</span></Link>
                        <Link href={project.redirects[0].website} target="_blank"><ArrowUpRight /></Link>
                    </div>
                </div>
                {/* <Link href={`Single-Project?id=${project.id}`}> */}
                    <div className='details'>
                        <div className='stack'>
                            <ul>
                                {project.technologies.split(', ').map((technology, index) => (
                                <li key={index}>{technology}</li>
                                ))}
                            </ul>
                        </div>  
                        <Link href={`/project/${project.id}`}> 
                            <div className='title'>
                                <p> {project.title} <ArrowUpRight /></p>
                                <span>{project.headline}</span>
                            </div>
                        </Link>
                        <div className='desc'>
                            <p> {(description(project))} </p>
                        </div>
                        <div className='link'>
                            <Link href={`/project/${project.id}`}>
                                <p>Open Project</p>
                            </Link>
                            {project.redirects[0].website === '/' ? 
                            <>
                                <Link href={project.redirects[0].github} target="_blank"><Github /></Link>
                            </>
                            : 
                            <>
                                <Link href={project.redirects[0].github} target="_blank"><Github /></Link>
                                <Link href={project.redirects[0].website} target="_blank"><ArrowUpRight /></Link>
                            </>                            
                            }
                        </div>
                    </div>
                {/* </Link> */}
            </div>
          ))}
      </div>
  </div>
  </>
  )
}

export default projectContainer
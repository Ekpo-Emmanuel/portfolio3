'use client'

import projectList from "../projects/projectList";
import Link from "next/link";
import { useState } from "react";

const Tabs = () => {
    const [activeTab, setActiveTab] = useState(1);
  
    const handleTabClick = (tabNumber) => {
      setActiveTab(tabNumber);
    };
  
    return (
      <div>
        <div className="tab-buttons">
          <p
            onClick={() => handleTabClick(1)}
            className={activeTab === 1 ? 'active' : ''}
          >
            Languages
          </p>
          <p
            onClick={() => handleTabClick(2)}
            className={activeTab === 2 ? 'active' : ''}
          >
            Web
          </p>
          <p
            onClick={() => handleTabClick(3)}
            className={activeTab === 3 ? 'active' : ''}
          >
            Design
          </p>
          <p
            onClick={() => handleTabClick(4)}
            className={activeTab === 4 ? 'active' : ''}
          >
            Others
          </p>
        </div>
  
        <div className="tab-content">
          {activeTab === 1 && 
          <div className='languages container-icon'>
            <div className='each'>
              <img src='./assets/icons/typescript.png' alt='ddsa' />
              <span>TypeScript</span>
            </div>
            <div className='each'>
              <img src='./assets/icons/js.png' alt='Javascript' />
              <span>JavaScript</span>
            </div>
            <div className='each'>
              <img src='./assets/icons/java.png' alt='java' />
              <span>java</span>
            </div>
            <div className='each'>
              <img src='./assets/icons/python.png' alt='python' />
              <span>python</span>
            </div>
            <div className='each'>
              <img src='./assets/icons/php.png' alt='php' />
              <span>PHP</span>
            </div>
            <div className='each'>
              <img src='./assets/icons/sql.png' alt='sql' />
              <span>SQL</span>
            </div>
            <div className='each'>
                <img src='./assets/icons/html.png' alt='html' />
                <span>HTML</span>
              </div>
              <div className='each'>
                <img src='./assets/icons/css.png' alt='CSS' />
                <span>CSS</span>
              </div>
          </div>
          }
          {activeTab === 2 && <div className='web container-icon'>
              <div className='each'>
                <img src='./assets/icons/reactjs.png' alt='React JS' />
                <span>React JS</span>
              </div>
              <div className='each'>
                <img src='./assets/icons/nextjs.png' alt='nextjs' />
                <span>Next JS</span>
              </div>
              <div className='each'>
                <img src='./assets/icons/node-js.png' alt='Node JS' />
                <span>Node JS</span>
              </div>
              <div className='each'>
                <img src='./assets/icons/express.png' alt='express' />
                <span>express</span>
              </div>
              <div className='each'>
                <img src='./assets/icons/firebase.png' alt='firebase' />
                <span>firebase</span>
              </div>
              <div className='each'>
                <img src='./assets/icons/mongodb.png' alt='mongodb' />
                <span>mongoDB</span>
              </div>
              <div className='each'>
                <img src='./assets/icons/sass.png' alt='sass' />
                <span>SASS</span>
              </div>
              <div className='each'>
                <img src='./assets/icons/tailwind.png' alt='tailwind' />
                <span>tailwind</span>
              </div>
              <div className='each'>
                <img src='./assets/icons/gcp.png' alt='gcp' />
                <span>GCP</span>
              </div>
              <div className='each'>
                <img src='./assets/icons/postgres.png' alt='postgres' />
                <span>postgres</span>
              </div>
          </div>}
          {activeTab === 3 && <div className='design container-icon'>
              <div className='each'>
                <img src='./assets/icons/photoshop.png' alt='photoshop' />
                <span>photoshop</span>
              </div>
              <div className='each'>
                <img src='./assets/icons/figma.png' alt='figma' />
                <span>figma</span>
              </div>
          </div>}
          {activeTab === 4 && <div className='ohers container-icon'>
            <div className='each'>
                <img src='./assets/icons/docker.png' alt='docker' />
                <span>docker</span>
              </div>
              <div className='each'>
                <img src='./assets/icons/github.png' alt='github' />
                <span>github</span>
              </div>
              <div className='each'>
                <img src='./assets/icons/jenkins.png' alt='jenkins' />
                <span>jenkins</span>
              </div>
              <div className='each'>
                <img src='./assets/icons/kubernetes.png' alt='kubernetes' />
                <span>kubernetes</span>
              </div>
              <div className='each'>
                <img src='./assets/icons/wordpress.png' alt='wordpress' />
                <span>wordpress</span>
              </div>
              <div className='each'>
                <img src='./assets/icons/joomla.png' alt='joomla' />
                <span>joomla</span>
              </div>
          </div>}
        </div>
      </div>
    );
};

const page = () => {
    const project = projectList[0];

    return (
    <section>
        <div className="containerP">
            <div className="image">
                <div className="logo">
                    <p>(logo) {project.title}</p>
                    <Link href={"/"} target="_blank"><span>Explore</span></Link>
                </div>
                <div className="img">
                    <img src={project.displa_img} alt="img"/>
                </div>
            </div>
            <div className="overview">
                <p className="title">overview</p>
                <span>{project.description}</span>
            </div>
            <div className="stack">
                <p className="title">Stack/Technologies</p>
                <ul>
                    {project.technologies.split(', ').map((technology, index) => (
                        <li key={index}>
                            <img src={`./assets/icons/${technology}.png`} />
                            <span>{technology}</span>
                        </li>
                    ))}
                </ul>
            </div>
        {/* <Tabs /> */}
        </div>
    </section>
    )
}


export default page;
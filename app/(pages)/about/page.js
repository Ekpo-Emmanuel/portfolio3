"use client"

import React, {useState} from 'react'
import Link from 'next/link'
import { MailCheck, Instagram ,Github } from 'lucide-react';

const MyImage = () => {
  return (
    <img src='./assets/images/me.jpg' className='image'/>
  )
}
const Linedln = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><circle cx="4.983" cy="5.009" r="2.188" fill="currentColor"/><path fill="currentColor" d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118c1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783c-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66zm-6.142 0H6.87v12.139H3.095z"/></svg>
  )
}
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
            <img src='./assets/icons/javascript.png' alt='Javascript' />
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
const About = () => {
  const Links = [
    {
      'title': 'Linkedln',
      'url': 'https://www.linkedin.com/in/emmanuel-ekpo-a2973420b',
      'icon': <Linedln />
    }, 
    {
      'title': 'Mail',
      'url': 'http://ekpoemmanuelsg@gmail.com',
      'icon': <MailCheck />
    }, 
    {
      'title': 'Instagram',
      'url': '/',
      'icon': <Instagram  />
    }, 
    {
      'title': 'Github',
      'url': '/',
      'icon': <Github  />
    }, 
  ];
  return (
    <section className='aboutMe'>
      <div className='container'>
        <div className='sec1'>
          <MyImage />
          <div className='details'>
            <p className='title'>Emmanuel Ekpo is a purpose-driven developer who brings people and teams together.</p>
            <span>Welcome to my corner of the internet.</span>
            <p className='desc'> I'm passionate about design's power to unite people and improve lives. <br /> I'm skilled at solving complex problems through thoughtful design, integrating everyone's insights to find shared solutions, from strategy to refining user experiences. <br /> I've worked on diverse projects, including social media, technology, virtual venue design, R&D, exhibitions, interior, and architecture. I find inspiration in listening to people and sharing their passions.<br /><br /><br /> Currently, I’m pursuing a degree in Computer Science at Alexander College, and <strong> I’m actively looking for 2025 full-time position.</strong></p>
            <span>Feel free to reach out to me below :)</span>
            <div className='stack'>
              {Links.map((link, index) => (
                <Link href={link.url} key={index} target='_blank' className='link'>{link.icon}</Link>
              ))}
            </div>
          </div>
        </div>
        <div className='sec4'>
          <div className='stack'>
          <Tabs />
          </div>
        </div>
        <div className='sec2'>
          <span className='title'>What i do</span>
          <div className='set1'>
            <span>XR Interaction Design</span>
            <span>Prototyping</span>
            <span>User Experience</span>
            <span>Spatial Design and 3D Modeling</span>
            <span>Game Design and Development</span>
          </div>
          <div className='set1'>
            <span>Systems Thinking</span>
            <span>Creative Thinking</span>
            <span>Product Strategy</span>
            <span>Project Management</span>
            <span>Cross-Functional Team Building</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
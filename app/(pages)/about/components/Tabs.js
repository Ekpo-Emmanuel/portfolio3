import { useState } from "react";
// import typescriptImage from "../../public/assets/icons/typescript.png";


export default function Tabs() {
    const [activeTab, setActiveTab] = useState(1);

    const handleTabClick = (tabNumber) => {
      setActiveTab(tabNumber);
    };
  
    return (
      <div className="tab-container">
        <div className='details'>
            <p className='title'>Tools I use Daily <span>We learn new things everyday</span></p>
          </div>
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
            Stacks
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
            Tools
          </p>
        </div>
  
        <div className="tab-content">
          {activeTab === 1 && 
          <div className='languages container-icon'>
            <div className='each'>
              <img src='/assets/icons/typescript.png' alt='ddsa' />
              <span>TypeScript</span>
            </div>
            <div className='each'>
              <img src='/assets/icons/javascript.png' alt='Javascript' />
              <span>JavaScript</span>
            </div>
            <div className='each'>
              <img src='/assets/icons/java.png' alt='java' />
              <span>java</span>
            </div>
            <div className='each'>
              <img src='/assets/icons/python.png' alt='python' />
              <span>python</span>
            </div>
            <div className='each'>
              <img src='/assets/icons/php.png' alt='php' />
              <span>PHP</span>
            </div>
            <div className='each'>
              <img src='/assets/icons/sql.png' alt='sql' />
              <span>SQL</span>
            </div>
            <div className='each'>
                <img src='/assets/icons/html.png' alt='html' />
                <span>HTML</span>
              </div>
              <div className='each'>
                <img src='/assets/icons/css.png' alt='CSS' />
                <span>CSS</span>
              </div>
          </div>
          }
          {activeTab === 2 && <div className='web container-icon'>
              <div className='each'>
                <img src='./assets/icons/reactjs.png' alt='React JS' />
                <span>React</span>
              </div>
              <div className='each'>
                <img src='./assets/icons/nextjs.png' alt='nextjs' />
                <span>Next JS</span>
              </div>
              <div className='each'>
                <img src='./assets/icons/sass.png' alt='sass' />
                <span>SCSS</span>
              </div>
              <div className='each'>
                <img src='./assets/icons/tailwind.png' alt='tailwind' />
                <span>tailwind</span>
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
}

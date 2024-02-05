import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import projectList from "../../projects/projectList";

export default function ProjectList({ isHomepage }) {
  return (
    <div className='projects-container'>
        {!isHomepage ? <p>Some Cool Projects</p> : null}
        <div className="projects">
            <ul>
                {projectList.map((project, index) => (
                    <Link href={`/project/${project.id}`} key={index}>
                        <li>
                            {project.title} <ArrowUpRight />
                            <img src={`/assets/images/projects/${[project.displa_img]}`} alt={project.title} />
                        </li>
                    </Link>
                ))}
            </ul>
        </div>
    </div>
  )
}

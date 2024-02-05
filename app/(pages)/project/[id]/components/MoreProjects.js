
import Link from "next/link"
export default function MoreProjects({ id, nextProjectIndex, previousProjectIndex, projectList }) {
  return (
    <div className='seeMore'>
        {Number(id) !== 0 ? (
        <Link href={`/project/${previousProjectIndex}`}>
            <p>Previous</p>
            <span>{projectList[previousProjectIndex].title}</span>
        </Link>
        ) : null}

        {Number(id) !== projectList.length - 1 ? (
          <Link href={`/project/${nextProjectIndex}`}>
              <p>Next</p>
              <span>{projectList[nextProjectIndex].title}</span>
          </Link>
        ) : 
          <Link href={`/archieve`}>
            <p className="archieve">Archieve </p>
            <span>You're at the end of the list. See my Archieve :)</span>
          </Link>
        }
    </div>
  )
}

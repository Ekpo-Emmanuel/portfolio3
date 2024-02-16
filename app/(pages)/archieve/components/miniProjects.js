
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"


export default function miniProjects() {
    const list = [
        {
            title: "Beat Blog",
            description: "A blogging platform",
            image: "old Portfolios/beatbeat.png",
            link: "https://github.com/Ekpo-Emmanuel/ByteBeat"
        },
        {
            title: "Link Save",
            description: "A link bookmarker",
            image: "old Portfolios/linksave.png",
            link: "https://github.com/Ekpo-Emmanuel/LInks_Saver"
        },
    ]
  return (
    <div className="archieve-container">
    <p className="title">Mini Projects</p>
    <div className="container">
        {list.map((project, index) => (
            <div className="each" key={index}>
                <div className="image">
                    <img src={`/assets/images/${project.image}`} alt="portfolio1" />
                </div>
                <div>
                    <Link href={project.link} target="_blank"><span>{project.title} <ArrowUpRight /></span></Link>
                    <p>{project.description}</p>
                </div>
            </div>
        ))}
    </div>
</div>
  )
}

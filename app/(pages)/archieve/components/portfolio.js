
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"
export default function OldPorfolio() {
  return (
    <div className="archieve-container">
    <p className="title">Old Portfolios</p>
    <div className="container">
        <div className="each">
            <div className="image">
                <img src="/assets/images/old Portfolios/portfolio1.png" alt="portfolio1" />
            </div>
            <div>
                <Link href="https://porfolio-prev44.000webhostapp.com/Ea%20Dev/" target="_blank"><span>Visit <ArrowUpRight /></span></Link>
                {/* <p>Date</p> */}
            </div>
        </div>
        <div className="each">
            <div className="image">
                <img src="/assets/images/old Portfolios/portfolio2.png" alt="portfolio2" />
            </div>
            <div>
                <Link href="https://emmanuelea.netlify.app/" target="_blank"><span>Visit <ArrowUpRight /></span></Link>
                {/* <p>Date</p> */}
            </div>
        </div>
    </div>
</div>
  )
}

import Instagram from "./components/instagram"
import OldPorfolio from "./components/portfolio"
import MiniProjects from "./components/miniProjects"

export default function page() {
  return (
    <section className="archieve">
        <OldPorfolio />
        <MiniProjects />
        <Instagram />
    </section>
  )
}

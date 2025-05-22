import "../../main.css"
import "./Projects.css"
import Swiper4 from "../../component/swiper4/swiper4"

export default function Projects() {
    return (
        <>
            <section className="projects__section">
                <div className="container">
                    <h1>Наши крупные проекты</h1>
                    <Swiper4/>
                </div>
            </section>
        </>
    )
}
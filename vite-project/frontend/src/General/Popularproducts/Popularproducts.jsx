import "../../main.css"
import "./Popularproducts.css"
import Swiper2 from "../../component/swiper2/swiper2"



export default function Popularproducts() {
    return (
        <>
            <section className="popularproducts__section">
                <div className="container">
                    <h3>
                        Наши популярные продукты
                    </h3>
                    <Swiper2/>
                </div>
            </section>
        </>
    )
}
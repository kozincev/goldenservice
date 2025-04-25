import "../../main.css"
import Swiper3 from "../../component/swiper3/swiper3"



export default function Catalogswiper(){
    return(
        <>
        <section className="catalogswiper__section">
            <div className="container">
                <h3>Вы недавно просмотрели</h3>
                <Swiper3/>
            </div>
        </section>
        </>
    )
}
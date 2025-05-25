import "./Aboutusmain.css"
import "../../main.css"
import play from "./imgs/play.png"


export default function Aboutusmain() {
    return (
        <>
            <section className="aboutusmain__section">
                <div className="container">
                    <p className="text__navigation">Главная / <span>О нас</span></p>
                    <div className="aboutus__wrapper">
                        <div className="aboutus__first__content">
                            <img src={play} alt="" />
                        </div>
                        <div className="aboutus__second__content">
                            <div><p>О нас</p></div>
                            <h2>Компания <span>Golden Soft</span></h2>
                            <p>Sit tempor ante justo amet duis. Ultricies cras eleifend elit, posuere et risus non.
                                Id et ut pellentesque consequat, amet erat gravida euismod pharetra.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
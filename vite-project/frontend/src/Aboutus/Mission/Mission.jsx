import "./Mission.css"
import "../../main.css"
import missionvectors from "./imgs/missionvectors.png"
import missionimg from "./imgs/missionimg.png"


export default function Mission() {
    return (
        <>
            <section className="mission__section">
                <div className="container">
                    <div className="mission__wrapper">
                        <div className="mission__first__content">
                            <div className="mission__block"><p>Наша миссия</p></div>
                            <img src={missionvectors} alt="" />
                            <p>Sit tempor ante justo amet duis. Ultricies cras eleifend elit, posuere et risus non. Id et ut pellentesque consequat,
                                amet erat gravida euismod pharetra.</p>
                        </div>
                        <div className="mission__second__content">
                            <img src={missionimg} alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
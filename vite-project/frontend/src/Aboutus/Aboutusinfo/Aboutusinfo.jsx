import "./Aboutusinfo.css"
import "../../main.css"


export default function Aboutusinfo() {
    return (
        <>
            <section className="aboutusinfo__section">
                <div className="container">
                    <div className="aboutusinfo__wrapper">
                        <div className="aboutusinfo">
                            <p className="aboutusinfo__number">5,567</p>
                            <p className="aboutusinfo__text">Счастливых клиентов</p>
                        </div>
                        <div className="aboutusinfo">
                            <p className="aboutusinfo__number">1245</p>
                            <p className="aboutusinfo__text">Продуктов на выбор</p>
                        </div>
                        <div className="aboutusinfo">
                            <p className="aboutusinfo__number">372</p>
                            <p className="aboutusinfo__text">Продаж в день</p>
                        </div>
                        <div className="aboutusinfo">
                            <p className="aboutusinfo__number">20</p>
                            <p className="aboutusinfo__text">Лет на рынке</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
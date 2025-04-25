import "../../main.css"
import "./Infocompany.css"


export default function Infocompany() {
    return (
        <>
            <section className="infocompany__section">
                <div className="container">
                    <div className="info__wrapper">
                        <div className="info">
                            <p className="info__number">5,567</p>
                            <p className="info__text">Счастливых клиентов</p>
                        </div>
                        <div className="info">
                            <p className="info__number">1245</p>
                            <p className="info__text">Продуктов на выбор</p>
                        </div>
                        <div className="info">
                            <p className="info__number">372</p>
                            <p className="info__text">Продаж в день</p>
                        </div>
                        <div className="info">
                            <p className="info__number">20</p>
                            <p className="info__text">Лет на рынке</p>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}
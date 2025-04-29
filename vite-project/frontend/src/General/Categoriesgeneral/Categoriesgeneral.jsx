import "../../main.css"
import "./Categoriesgeneral.css"
import { Link } from "react-router-dom"


export default function Categoriesgeneral() {
    return (
        <>
            <section className="section__categoriesgeneral">
                <div className="container">
                    <div className="categoriesgeneral_wrapper">
                        <div className="categoriesgeneral__card1">
                            <div className="card__content">
                                <p>Для отелей</p>
                                <button>Перейти</button>
                            </div>
                        </div>
                        <div className="categoriesgeneral__card2">
                            <div className="card__content">
                                <p>Для шкафчиков</p>
                                <button>Перейти</button>
                            </div>
                        </div>
                        <div className="categoriesgeneral__card3">
                            <div className="card__content">
                                <p>Для офисов</p>
                                <button>Перейти</button>
                            </div>
                        </div>
                        <div className="categoriesgeneral__card4">
                            <div className="card__content">
                                <p>Замки для дома</p>
                                <button>Перейти</button>
                            </div>
                        </div>
                    </div>
                    <Link to="/Categories"><button className="all__categ">Все категории</button></Link>
                </div>
            </section>
        </>
    )
}
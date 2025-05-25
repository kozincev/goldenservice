import "./NavComponent.css"
import "../../main.css"
import logo from "../NavComponent/imgs/logo.png"
import arrow from "../NavComponent/imgs/arrow.png"
import navphone from "../NavComponent/imgs/navphone.png"
import navlike from "../NavComponent/imgs/navlike.png"
import navbasket from "../NavComponent/imgs/navbasket.png"
import popupimg from "../NavComponent/imgs/popupimg.png"
import { useState } from "react"
import { Link } from "react-router-dom"


export default function NavComponent() {
    const [isCatalogOpen, setIsCatalogOpen] = useState(false)

    const toggleCatalog = () => {
        setIsCatalogOpen(!isCatalogOpen)
    }
    return (
        <>
            <nav>
                <div className="top__nav">
                    <p>Скидка 10% по промокоду “ZAMOK” на все заказы до 10.09</p>
                    <a href="">Обратный звонок</a>
                </div>
                <div className="bottom__nav">
                <Link to="/"><img src={logo} alt="" /></Link>

                    <div className="nav__links">
                    <Link to="/">Главная</Link>
                        <div className="catalog__nav" onClick={(e) => {
                            e.preventDefault()
                            toggleCatalog()
                        }}>
                            <a href="" >Каталог</a>
                            <img src={arrow} alt="" className="arrow" />
                        </div>

                        <Link to="/Wholesale">Оптовая продажа</Link>

                       <Link to="/Aboutus">О нас</Link>
                    </div>

                    <div className="number__nav">
                        <img src={navphone} alt="" />
                        <p>+7 (966) 55 88 499</p>
                        <img src={navlike} alt="" />
                        <img src={navbasket} alt="" className="basket" />
                    </div>
                </div>
                <div className="line"></div>

                {isCatalogOpen && (
                    <div className="catalog-popup">
                        <div className="catalog-popup-content">
                            <ul className="popup__list__general">
                                <ul>
                                    <li>Накладные электронные замки</li>
                                    <li>Врезные электронные замки</li>
                                    <li>Замки для квартиры</li>
                                    <li>Замки для дома</li>
                                    <li>Замки для отелей</li>
                                    <li>Замки для офиса</li>
                                    <li>Замки для шкафчиков</li>
                                    <li>Замки для раздевалок</li>
                                    <Link to="/Categories"><li><button className="popup__more">Смотреть все</button></li></Link>
                                </ul>
                                <ul>
                                    <li><img src={popupimg} alt="" /></li>
                                </ul>
                            </ul>
                        </div>
                    </div>
                )}
            </nav>
        </>
    )
}
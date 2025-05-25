import "../../main.css"
import "./Footer.css"
import logofooter from "./imgs/logofooter.png"
import vk from "./imgs/vk.png"
import twitter from "./imgs/twitter.png"
import facebook from "./imgs/facebook.png"
import { Link } from "react-router-dom"


export default function Footer() {
    return (
        <>
            <footer>
                <div className="container">
                    <div className="footer__wrapper">
                        <div className="footer__logos">
                            <ul className="logos__list">
                                <li className="general__logo"><img src={logofooter} alt="" /></li>
                                <div className="logos__wrapper">
                                    <li className="logo__item"><img src={vk} alt="" /> </li>
                                    <li className="logo__item2"><img src={twitter} alt="" /> </li>
                                    <li className="logo__item3"><img src={facebook} alt="" /> </li>
                                </div>
                            </ul>
                        </div>
                        <div className="footer__nav">
                            <ul className="footer__list">
                                <li className="footer__list__tittle">Навигация
                                    <ul className="footer__inner__list">
                                        <Link to="/"><li className="footer__list__item">Главная</li></Link>
                                        <Link to="/Catalog"><li className="footer__list__item">Каталог</li></Link>
                                        <Link to="/Wholesale"><li className="footer__list__item">Оптовая продажа</li></Link>
                                        <Link to="/Aboutus"><li className="footer__list__item">О нас</li></Link>
                                    </ul>
                                </li>
                                <li className="footer__list__tittle">Наши контакты
                                    <ul className="footer__inner__list">
                                        <li className="footer__list__item">Телефоны</li>
                                        <li className="footer__list__item">+7 (988) 565 00 38</li>
                                        <li className="footer__list__item">+375 33 662 82 56</li>
                                        <li className="footer__list__item">Email</li>
                                        <li className="footer__list__item">vladpertcev@mail.ru</li>
                                        <li className="footer__list__item">korobko416@gmail.com</li>
                                    </ul>
                                </li>
                                <li className="footer__list__tittle">Наш адрес
                                    <ul className="footer__inner__list">
                                        <li className="footer__list__item">Россия, <br /> Ростов-на-Дону ул. <br /> Богачева, 16</li>
                                    </ul>
                                </li>
                                <li className="footer__list__tittle">Информация
                                    <ul className="footer__inner__list">
                                        <li className="footer__list__item">Доставка и оплата</li>
                                        <li className="footer__list__item">Гарантии</li>
                                        <li className="footer__list__item">Возврат товара</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer__line"></div>
                    <p>© 2021 Golden Soft All rights reserved.</p>
                </div>
            </footer>
        </>
    )
}
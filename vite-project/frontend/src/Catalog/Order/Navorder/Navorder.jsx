import "../../../main.css"
import "./Navorder.css"
import logo from "../../../General/NavComponent/imgs/logo.png"
import navphone from "../../../General/NavComponent/imgs/navphone.png"
import { Link } from "react-router-dom"


export default function Navorder() {
    return (
        <>
            <nav className="nav__order">
                <div className="nav__order__container">
                    <div className="navorder__content">
                        <Link to='/'><img src={logo} alt="" /></Link>
                        <div className="nav__order__phone__container">
                            <img src={navphone} alt="" />
                            <p>+7 (966) 55 88 499</p>
                        </div>
                    </div>
                </div>
                <div className="nav__order__line"></div>
            </nav>
        </>
    )
}
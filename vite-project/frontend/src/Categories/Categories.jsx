import "../main.css"
import './Categories.css'
import { Link } from "react-router-dom"


export default function Categories() {
    return (
        <>
            <section className="categories">
                <div className="container">
                    <p className="text__navigation">Главная / <span>Категории</span></p>
                    <h2>Категории</h2>
                    <div className="categ__wrapper">
                        <div className="categ__card">
                            <div className="categ__img1"></div>
                            <p className="categ__tittle">Накладные электронные замки</p>
                        </div>

                        <div className="categ__card">
                            <div className="categ__img2"></div>
                            <p className="categ__tittle">Накладные электронные замки</p>
                        </div>
                        <div className="categ__card">
                            <div className="categ__img3"></div>
                            <p className="categ__tittle">Накладные электронные замки</p>
                        </div>
                        <div className="categ__card">
                            <div className="categ__img4"></div>
                            <p className="categ__tittle">Накладные электронные замки</p>
                        </div>
                        <div className="categ__card">
                            <div className="categ__img5"></div>
                            <p className="categ__tittle">Накладные электронные замки</p>
                        </div>
                        <div className="categ__card">
                            <div className="categ__img6"></div>
                            <p className="categ__tittle">Накладные электронные замки</p>
                        </div>
                        <div className="categ__card">
                            <div className="categ__img7"></div>
                            <p className="categ__tittle">Накладные электронные замки</p>
                        </div>
                        <div className="categ__card">
                            <div className="categ__img8"></div>
                            <p className="categ__tittle">Накладные электронные замки</p>
                        </div>
                    </div>
                    <Link to="/Catalog"><button className="all__categs">Смотреть все</button></Link>
                </div>
            </section>
        </>
    )
}
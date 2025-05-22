import "./Howwework.css"
import "../../main.css"
import hwwimg1 from "./imgs/hwwimg1.png"
import hwwimg2 from "./imgs/hwwimg2.png"
import hwwimg3 from "./imgs/hwwimg3.png"



export default function Howwework() {
    return (
        <>
            <section className="hww__section">
                <div className="container">
                    <h1>Как мы работаем</h1>
                    <div className="hww__wrapper">
                        <div className="hww__content">
                            <div className="hww__img__container">
                                <div className="number__of__step"><p>1</p></div>
                                <img src={hwwimg1} alt="" />
                            </div>
                            <div className="hww__span__container">
                                <span>Оформление заявки</span>
                            </div>
                            <p>Вы оставляете заявку на сайте или связываетесь с нами по указанному на сайте номеру телефона</p>
                        </div>

                        <div className="hww__content">
                            <div className="hww__img__container">
                                <div className="number__of__step"><p>2</p></div>
                                <img src={hwwimg2} alt="" />
                            </div>
                            <div className="hww__span__container">
                                <span>Согласование</span>
                            </div>
                            <p>Мы консультируем Вас, согласовываем стоимость и точное время приезда нашего специалиста</p>
                        </div>


                        <div className="hww__content">
                            <div className="hww__img__container">
                                <div className="number__of__step"><p>3</p></div>
                                <img src={hwwimg3} alt="" />
                            </div>
                            <div className="hww__span__container">
                                <span>Отправка товара и установка</span>
                            </div>
                            <p>Наш специалист по монтажу замков выезжает к Вам в точно зазначеное время по согласованному адресу</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
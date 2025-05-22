import "./Whychooseus.css"
import "../../main.css"
import wcumainimg from "./imgs/wcumainimg.png"
import wcuimg1 from "./imgs/wcuimg1.png"
import wcuimg2 from "./imgs/wcuimg2.png"
import wcuimg3 from "./imgs/wcuimg3.png"
import wcuimg4 from "./imgs/wcuimg4.png"

export default function Whychooseus() {
    return (
        <>
            <section className="wcu__section">
                <div className="container">
                    <h3>Почему стоит выбрать нас</h3>
                    <div className="wcu__content__wrapper">
                        <div className="wcu__first__content">
                            <img src={wcumainimg} alt="" />
                        </div>
                        <div className="wcu__second__content">
                            <div className="wcu__reason">
                                <div className="wcu__line__wrapper"><div className="wcu__img__circle"><img src={wcuimg1} alt="" /></div>
                                    <div className="reason__line"></div>
                                </div>
                                <p><span>Возврат удвоенной стоимости</span>За каждый отправленый товар который окажеться бракованным, мы вернем вам двойную стоимость.</p>
                            </div>
                            <div className="wcu__reason">
                                <div className="wcu__line__wrapper"><div className="wcu__img__circle"><img src={wcuimg2} alt="" /></div>
                                    <div className="reason__line"></div>
                                </div>
                                <p><span>Монтаж</span>Проводим монтажные работы любой сложности и в любое удобное для Вас время</p>
                            </div>
                            <div className="wcu__reason">
                                <div className="wcu__line__wrapper"><div className="wcu__img__circle"><img src={wcuimg3} alt="" /></div>
                                    <div className="reason__line"></div>
                                </div>
                                <p><span>Брендирование продукта</span>Мы нанесем Ваш логотип любой сложности на свою продукцию, чтобы прибавить ей эксклюзивности </p>
                            </div>
                            <div className="wcu__reason">
                                <div className="wcu__img__circle"><img src={wcuimg4} alt="" /></div>
                                <p><span>Брендирование продукта</span>Мы нанесем Ваш логотип любой сложности на свою продукцию, чтобы прибавить ей эксклюзивности </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
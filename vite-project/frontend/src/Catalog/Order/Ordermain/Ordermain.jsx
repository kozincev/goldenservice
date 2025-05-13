import "../../../main.css"
import "./Ordermain.css"


export default function Ordermain() {
    return (
        <>
            <section className="ordermain__section">
                <div className="container">
                    <h3>Оформление заказа</h3>
                    <div className="ordermain__form__container">
                        <form action="" className="ordermain__first__form">
                            <legend>1. Контактные данные</legend>
                            <div className="form__top__first__content">
                                <div className="form__content">
                                <label htmlFor="">Фамилия</label>
                                <input type="text" name="" id="" placeholder="Зайцев" />
                                </div>  
                                <div className="form__content">
                                <label htmlFor="">Имя</label>
                                <input type="text" name="" id="" placeholder="Михаил" />
                                </div>
                            </div>
                            <div className="form__top__second__content">
                                <div className="form__content">
                                <label htmlFor="">Телефон</label>
                                <input type="text" name="" id="" placeholder="+7 (_ _ _) _ _  _ _  _ _ _" />
                                </div>
                                <div className="form__content">
                                <label htmlFor="">E-mail</label>
                                <input type="text" name="" id="" placeholder="example@mail.ru" />
                                </div>
                            </div>
                            <legend>2. Доставка</legend>
                            <div className="form__middle__content">
                                <div className="form__radio__container">
                                    <div className="middle__radio"><input type="radio" className="radio__middle"/><label htmlFor="">Сдек</label></div>
                                    <div className="middle__radio"><input type="radio" className="radio__middle"/><label htmlFor="">Почта России</label></div>
                                    <div className="middle__radio"><input type="radio" className="radio__middle"/><label htmlFor="">Деловые линии</label></div>
                                </div>
                            </div>
                            <legend>3. Оплата</legend>
                            <div className="form__bottom__content">
                                <div className="form__radio__container">
                                    <div className="bottom__radio"><input type="radio" className="radio__bottom"/><label htmlFor="">Оплата при получении товара</label></div>
                                    <div className="bottom__radio"><input type="radio" className="radio__bottom"/><label htmlFor="">Банковская карта</label></div>
                                </div>
                            </div>
                            <div className="form__comment__content">
                                <legend>Комментарий</legend>
                                <textarea name="" id="" placeholder="Напишите комментарий"></textarea>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}
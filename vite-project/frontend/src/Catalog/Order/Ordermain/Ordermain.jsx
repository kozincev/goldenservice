import "../../../main.css"
import "./Ordermain.css"


export default function Ordermain() {
    return (
        <>
            <section className="ordermain__section">
                <div className="container">
                    <h3>Оформление заказа</h3>
                    <div className="ordermain__form__container">
                        <form action="">
                            <legend>1. Контактные данные</legend>
                            <div className="form__top__first__content">
                                <label htmlFor="">Фамилия</label>
                                <input type="text" name="" id="" placeholder="Зайцев" />
                                <label htmlFor="">Имя</label>
                                <input type="text" name="" id="" placeholder="Михаил" />
                            </div>
                            <div className="form__top__second__content">
                                <label htmlFor="">Телефон</label>
                                <input type="text" name="" id="" placeholder="+7 (_ _ _) _ _  _ _  _ _ _" />
                                <label htmlFor="">E-mail</label>
                                <input type="text" name="" id="" placeholder="example@mail.ru" />
                            </div>
                            <legend>2. Доставка</legend>
                            <div className="form__middle__content">
                                <div className="form__radio__container">
                                    <input type="radio" /><label htmlFor="">Сдек</label>
                                    <input type="radio" /><label htmlFor="">Почта России</label>
                                    <input type="radio" /><label htmlFor="">Деловые линии</label>
                                </div>
                            </div>
                            <legend>3. Оплата</legend>
                            <div className="form__bottom__content">
                                <div className="form__radio__container">
                                    <input type="radio" /><label htmlFor="">Оплата при получении товара</label>
                                    <input type="radio" /><label htmlFor="">Банковская карта</label>
                                </div>
                            </div>
                            <div>
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
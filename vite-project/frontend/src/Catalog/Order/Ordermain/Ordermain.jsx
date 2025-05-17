import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import "../../../main.css";
import "./Ordermain.css";

export default function Ordermain() {
    const location = useLocation();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        lastName: '',
        firstName: '',
        phone: '',
        email: '',
        delivery: '',
        payment: '',
        comment: ''
    });


    const { product, quantity } = location.state || {};

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!product || !quantity) {
            alert('Ошибка: товар не выбран');
            return;
        }

        const orderData = {
            ...formData,
            product_id: product.id,
            quantity: quantity,
            total_price: quantity * parsePrice(product.price)
        };

        try {
            const response = await fetch('http://localhost:3010/api/orders', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(orderData),
            });

            if (!response.ok) throw new Error('Ошибка отправки заказа');

            navigate('/order-confirmation');
        } catch (error) {
            console.error('Error:', error);
            alert('Ошибка при оформлении заказа');
        }
    };

    const parsePrice = (priceString) => {
        return parseInt(priceString.replace(/\D/g, ''), 10) || 0;
    };
    return (
        <>
            <section className="ordermain__section">
                <div className="container">
                    <h3>Оформление заказа</h3>
                    <div className="ordermain__form__container">
                        <form onSubmit={handleSubmit} className="ordermain__first__form">
                            <legend>1. Контактные данные</legend>
                            <div className="form__top__first__content">
                                <div className="form__content">
                                    <label htmlFor="">Фамилия</label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleInputChange}
                                        placeholder="Зайцев"
                                    />
                                </div>
                                <div className="form__content">
                                    <label htmlFor="">Имя</label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleInputChange}
                                        placeholder="Михаил"
                                    />
                                </div>
                            </div>
                            <div className="form__top__second__content">
                                <div className="form__content">
                                    <label htmlFor="">Телефон</label>
                                    <input
                                        type="number"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        placeholder="+7 (_ _ _) _ _  _ _  _ _ _" />
                                </div>
                                <div className="form__content">
                                    <label htmlFor="">E-mail</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        placeholder="example@mail.ru" />
                                </div>
                            </div>
                            <legend>2. Доставка</legend>
                            <div className="form__middle__content">
                                <div className="form__radio__container">
                                    <div className="middle__radio">
                                        <input
                                            type="radio" 
                                            className="radio__middle"
                                            name="delivery"
                                            value={formData.email}
                                             onChange={handleInputChange} /><label htmlFor="">Сдек</label></div>
                                    <div className="middle__radio">
                                        <input
                                            type="radio"
                                            className="radio__middle"
                                            name="delivery"
                                            value={formData.email}
                                             onChange={handleInputChange} /><label htmlFor="">Почта России</label></div>
                                    <div className="middle__radio">
                                        <input
                                            type="radio"
                                            className="radio__middle"
                                            name="delivery"
                                            value={formData.email}
                                             onChange={handleInputChange} /><label htmlFor="">Деловые линии</label></div>
                                </div>
                            </div>
                            <legend>3. Оплата</legend>
                            <div className="form__bottom__content">
                                <div className="form__radio__container">
                                    <div className="bottom__radio"><input type="radio" className="radio__bottom" /><label htmlFor="">Оплата при получении товара</label></div>
                                    <div className="bottom__radio"><input type="radio" className="radio__bottom" /><label htmlFor="">Банковская карта</label></div>
                                </div>
                            </div>
                            <div className="form__comment__content">
                                <legend>Комментарий</legend>
                                <textarea name="" id="" placeholder="Напишите комментарий"></textarea>
                            </div>
                        </form>
                        <form className="ordermain__second__form">
                            <h3>Итого</h3>
                            {product && (
                                <div className="order-summary">
                                    <div className="product-info">
                                        <img
                                            src={product.thumbnails?.[0]?.image_url}
                                            alt={product.product_name}
                                            className="product-image"
                                        />
                                        <div className="product-details">
                                            <h4>{product.product_name}</h4>
                                            <p>Количество: {quantity}</p>
                                            <p>Цена: {product.price}</p>
                                        </div>
                                    </div>
                                    <div className="total-price">
                                        <p>Общая сумма:
                                            {(quantity * parsePrice(product.price)).toLocaleString('ru-RU')}₽
                                        </p>
                                    </div>
                                    <button
                                        type="submit"
                                        className="confirm-button"
                                        onClick={handleSubmit}
                                    >
                                        Подтвердить заказ
                                    </button>
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}
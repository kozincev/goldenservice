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
    const [isLoading, setIsLoading] = useState(true);
    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [images, setImages] = useState([]);
    const validateForm = () => {
        const nameRegex = /^[А-Яа-яA-Za-z\s-]+$/;
        const phoneRegex = /^\+7\s?\(?\d{3}\)?\s?\d{3}[\s-]?\d{2}[\s-]?\d{2}$/;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!nameRegex.test(formData.lastName)) {
            alert("Пожалуйста, введите корректную фамилию (только буквы и дефис).");
            return false;
        }
        if (!nameRegex.test(formData.firstName)) {
            alert("Пожалуйста, введите корректное имя (только буквы и дефис).");
            return false;
        }
        if (!phoneRegex.test(formData.phone)) {
            alert("Пожалуйста, введите корректный номер телефона в формате +7 (XXX) XXX-XX-XX.");
            return false;
        }
        if (!emailRegex.test(formData.email)) {
            alert("Пожалуйста, введите корректный email.");
            return false;
        }
        if (!formData.delivery) {
            alert("Пожалуйста, выберите способ доставки.");
            return false;
        }
        if (!formData.payment) {
            alert("Пожалуйста, выберите способ оплаты.");
            return false;
        }

        return true;
    };

    useEffect(() => {
        const state = location.state;
        if (state?.product && state.quantity) {
            setProduct(state.product);
            setQuantity(state.quantity);
            localStorage.setItem('orderProduct', JSON.stringify(state.product));
            localStorage.setItem('orderQuantity', String(state.quantity));
        } else {
            const storedProduct = localStorage.getItem('orderProduct');
            const storedQuantity = localStorage.getItem('orderQuantity');
            if (storedProduct && storedQuantity) {
                try {
                    setProduct(JSON.parse(storedProduct));
                    setQuantity(parseInt(storedQuantity, 10));
                } catch (err) {
                    console.error("Ошибка парсинга localStorage:", err);
                }
            }
        }
        setIsLoading(false);
    }, []);


    useEffect(() => {
        if (!product) return;

        fetch(`http://localhost:3010/api/slider/${product.id}`)
            .then(res => {
                if (!res.ok) throw new Error('Не удалось загрузить изображения');
                return res.json();
            })
            .then(data => {
                setImages(data);
            })
            .catch(err => {
                console.error(err);
            });
    }, [product]);

    const handleInputChange = e => {
        const { name, value } = e.target;
        setFormData(f => ({ ...f, [name]: value }));
    };

    const parsePrice = priceString => {
        return parseInt(priceString.replace(/\D/g, ''), 10) || 0;
    };

    const handleSubmit = async e => {
        e.preventDefault();
        if (!product || !quantity) {
            alert('Ошибка: товар не выбран');
            return;
        }

        if (!validateForm()) return; // ← добавили проверку

        const orderData = {
            ...formData,
            product_id: product.id,
            quantity,
            total_price: quantity * parsePrice(product.price),
        };

        try {
            const res = await fetch('http://localhost:3010/api/orders', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(orderData),
            });
            if (!res.ok) throw new Error('Ошибка сервера');
            localStorage.removeItem('orderProduct');
            localStorage.removeItem('orderQuantity');
            navigate('/order-confirmation');
        } catch (err) {
            console.error(err);
            alert('Ошибка при оформлении заказа');
        }
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
                                    <label>Фамилия</label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleInputChange}
                                        placeholder="Зайцев"
                                        required
                                    />
                                </div>
                                <div className="form__content">
                                    <label>Имя</label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleInputChange}
                                        placeholder="Михаил"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="form__top__second__content">
                                <div className="form__content">
                                    <label>Телефон</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        placeholder="+7 (_ _ _) _ _  _ _  _ _ _"
                                        required
                                    />
                                </div>
                                <div className="form__content">
                                    <label>E-mail</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        placeholder="example@mail.ru"
                                        required
                                    />
                                </div>
                            </div>
                            <legend>2. Доставка</legend>
                            <div className="form__middle__content">
                                <div className="form__radio__container">
                                    <div className="middle__radio">
                                        <input
                                            type="radio"
                                            name="delivery"
                                            value="Сдек"
                                            checked={formData.delivery === "Сдек"}
                                            onChange={handleInputChange}
                                            required
                                        />
                                        <label>Сдек</label>
                                    </div>
                                    <div className="middle__radio">
                                        <input
                                            type="radio"
                                            name="delivery"
                                            value="Почта России"
                                            checked={formData.delivery === "Почта России"}
                                            onChange={handleInputChange}
                                        />
                                        <label>Почта России</label>
                                    </div>
                                    <div className="middle__radio">
                                        <input
                                            type="radio"
                                            name="delivery"
                                            value="Деловые линии"
                                            checked={formData.delivery === "Деловые линии"}
                                            onChange={handleInputChange}
                                        />
                                        <label>Деловые линии</label>
                                    </div>
                                </div>
                            </div>
                            <legend>3. Оплата</legend>
                            <div className="form__bottom__content">
                                <div className="form__radio__container">
                                    <div className="bottom__radio">
                                        <input
                                            type="radio"
                                            name="payment"
                                            value="Оплата при получении товара"
                                            checked={formData.payment === "Оплата при получении товара"}
                                            onChange={handleInputChange}
                                            required
                                        />
                                        <label>Оплата при получении товара</label>
                                    </div>
                                    <div className="bottom__radio">
                                        <input
                                            type="radio"
                                            name="payment"
                                            value="Банковская карта"
                                            checked={formData.payment === "Банковская карта"}
                                            onChange={handleInputChange}
                                        />
                                        <label>Банковская карта</label>
                                    </div>
                                </div>
                            </div>
                            <div className="form__comment__content">
                                <legend>Комментарий</legend>
                                <textarea
                                    name="comment"
                                    value={formData.comment}
                                    onChange={handleInputChange}
                                    placeholder="Напишите комментарий"
                                ></textarea>
                            </div>
                        </form>
                        <form className="ordermain__second__form" onSubmit={handleSubmit}>
                            <h3>Итого</h3>
                            {isLoading ? (
                                <p>Загрузка...</p>
                            ) : product ? (
                                <div className="order-summary">
                                    <div className="product-info">
                                        {images[0]?.image_url ? (
                                            <img
                                                src={images[0].image_url}
                                                alt={product.product_name}
                                                className="product-image"
                                            />
                                        ) : (
                                            <div className="no-image">Изображение отсутствует</div>
                                        )}
                                        <div className="product-details">
                                            <h4>{product.product_name}</h4>
                                            <p>+ Подарок: <br /><span>“Приложение к замкам Golden Service”</span></p>
                                            <div className='order__product__main__info'>
                                                <p>Количество: {quantity}</p>
                                                <p>Цена (за шт.) : {product.price}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="total-price">
                                        <p>
                                            К оплате:{' '}
                                            {(
                                                quantity *
                                                parsePrice(product.price)
                                            ).toLocaleString('ru-RU')}
                                            ₽
                                        </p>
                                    </div>
                                    <button type="submit" className="confirm-button">
                                        Подтвердить заказ
                                    </button>
                                </div>
                            ) : (
                                <p>Ошибка: товар не выбран</p>
                            )}
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
}

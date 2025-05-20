import { useState, useRef, useEffect } from 'react';
import './Wholesalemain.css';
import '../../main.css';
import successfully from "./imgs/successfully.png"


export default function Wholesalemain() {
    const [formData, setFormData] = useState({
        customer_name: '',
        company_name: '',
        phone: '',
        product_name: '',
        quantity: '',
        logo: false,
        installation: false
    });
    const [suggestions, setSuggestions] = useState([]);
    const [showSug, setShowSug] = useState(false);
    const sugRef = useRef();
    const [submitting, setSubmitting] = useState(false);
    const [approxCost, setApproxCost] = useState(0);
    const [showModal, setShowModal] = useState(false);


    useEffect(() => {
        const handler = e => {
            if (sugRef.current && !sugRef.current.contains(e.target)) {
                setShowSug(false);
            }
        };
        document.addEventListener('click', handler);
        return () => document.removeEventListener('click', handler);
    }, []);
    useEffect(() => {
        const { product_name, quantity } = formData;
        if (!product_name || !/^\d+$/.test(quantity)) {
            setApproxCost(0);
            return;
        }

        fetch(`http://localhost:3010/api/product/price?model=${encodeURIComponent(product_name)}`)
            .then(r => {
                if (!r.ok) throw new Error('Не удалось получить цену');
                return r.json();
            })
            .then(data => {
                const unit = parseInt(data.price, 10) || 0;
                setApproxCost(unit * parseInt(quantity, 10));
            })
            .catch(err => {
                console.error('Ошибка получения цены:', err);
                setApproxCost(0);
            });
    }, [formData.product_name, formData.quantity]);

    const handleChange = e => {
        const { name, value, type, checked } = e.target;
        setFormData(fd => ({
            ...fd,
            [name]: type === 'checkbox' ? checked : value
        }));


        if (name === 'product_name') {
            if (value.trim().length >= 1) {
                fetch(`http://localhost:3010/api/models?q=${encodeURIComponent(value)}`)
                    .then(res => res.json())
                    .then(data => {
                        setSuggestions(data);
                        setShowSug(true);
                    })
                    .catch(console.error);
            } else {
                setSuggestions([]);
                setShowSug(false);
            }
        }
    };

    const pickSuggestion = model => {
        setFormData(fd => ({ ...fd, product_name: model }));
        setSuggestions([]);
        setShowSug(false);
    };

    const nameRegex = /^[А-Яа-яA-Za-z\s-]+$/;
    const phoneRegex = /^\+7\s?\(?\d{3}\)?\s?\d{3}[\s-]?\d{2}[\s-]?\d{2}$/;

    const isValid = () => {
        const {
            customer_name, company_name, phone,
            product_name, quantity
        } = formData;
        if (!nameRegex.test(customer_name.trim())) return false;
        if (!company_name.trim()) return false;
        if (!phoneRegex.test(phone.trim())) return false;
        if (!product_name.trim()) return false;
        if (!/^\d+$/.test(quantity.trim()) || parseInt(quantity, 10) <= 0) return false;
        return true;
    };

    const handleSubmit = async e => {
        e.preventDefault();
        if (!isValid() || submitting) return;
        setSubmitting(true);

        try {
            const res = await fetch('http://localhost:3010/api/wholesale', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });
            if (!res.ok) throw new Error('Ошибка сервера');
            setShowModal(true);
            setFormData({
                customer_name: '',
                company_name: '',
                phone: '',
                product_name: '',
                quantity: '',
                logo: false,
                installation: false
            });
        } catch (err) {
            console.error(err);
            alert('Ошибка при отправке заявки');
        } finally {
            setSubmitting(false);
        }
    };

    // утилита для подсветки
    const filled = val => val && val.toString().trim() !== '';

    return (
        <section className="wholesalemain__section">
            <div className="container">
                <div className="wholesalemain__application__wrapper">
                    <div className="application__text__container">
                        <h3>Оформите заявку и мы вам перезвоним</h3>
                        <p>
                            Vitae, urna, massa dictumst morbi ut id dui nulla. Purus a velit sem viverra.
                            Nunc ac quis donec nunc eu blandit ante nibh. Sit felis nulla donec mauris quis nulla velit.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="application__form">
                        <h3>Оформление заявки</h3>

                        <div className="application__form__top__content">
                            <div className="application__input__container">
                                <label>Имя</label>
                                <input
                                    type="text"
                                    name="customer_name"
                                    placeholder="Ваше имя"
                                    value={formData.customer_name}
                                    onChange={handleChange}
                                    className={filled(formData.customer_name) ? 'filled' : ''}
                                    required
                                />
                            </div>
                            <div className="application__input__container">
                                <label>Название компании</label>
                                <input
                                    type="text"
                                    name="company_name"
                                    placeholder="Имя Вашей компании"
                                    value={formData.company_name}
                                    onChange={handleChange}
                                    className={filled(formData.company_name) ? 'filled' : ''}
                                    required
                                />
                            </div>
                            <div className="application__input__container">
                                <label>Номер телефона</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="+7 (___) ___-__-__"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className={filled(formData.phone) ? 'filled' : ''}
                                    required
                                />
                            </div>
                        </div>

                        <div className="application__form__middle__content" ref={sugRef}>
                            <div className="application__input__container">
                                <label>Название товара</label>
                                <input
                                    type="text"
                                    name="product_name"
                                    placeholder="Начните вводить модель..."
                                    value={formData.product_name}
                                    onChange={handleChange}
                                    className={formData.product_name ? 'filled' : ''}
                                    autoComplete="off"
                                    required
                                />

                                {showSug && suggestions.length > 0 && (
                                    <ul className="autocomplete-list">
                                        {suggestions.map((m, i) => (
                                            <li key={i} onClick={() => pickSuggestion(m)}>
                                                {m}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                            <div className="application__input__container">
                                <label>Количество</label>
                                <input
                                    type="text"
                                    name="quantity"
                                    placeholder="Количество товара"
                                    value={formData.quantity}
                                    onChange={handleChange}
                                    className={formData.quantity ? 'filled' : ''}
                                    required
                                />
                            </div>
                        </div>

                        <div className="application__form__functions">
                            <label className="application__function">
                                <input
                                    type="checkbox"
                                    name="logo"
                                    checked={formData.logo}
                                    onChange={handleChange}
                                />
                                <span className="application__checkmark">

                                </span>
                                <p>Нанесение персонального логотипа (бесплатно)</p>
                            </label>
                            <label className="application__function">
                                <input
                                    type="checkbox"
                                    name="installation"
                                    checked={formData.installation}
                                    onChange={handleChange}
                                />
                                <span className="application__checkmark">

                                </span>
                                <p>Помощь в монтажных работах (бесплатно)</p>
                            </label>
                        </div>

                        <div className="application__form__bottom__content">
                            <p>
                                Приблизительная стоимость:{' '}
                                <strong>{approxCost.toLocaleString('ru-RU')} ₽</strong>
                            </p>
                            <button
                                type="submit"
                                disabled={!isValid() || submitting}
                            >
                                {submitting ? 'Отправка...' : 'Отправить заявку'}
                            </button>
                        </div>
                    </form>
                    {showModal && (
                        <div className="modal-overlay">
                            <div className="modal">
                                <img src={successfully} alt="" />
                                <h2>Ваша заявка успешно принята</h2>
                                <p>Porttitor vitae ornare aliquet euismod nunc, tincidunt. In non elementum, ornare elementum nisi egestas vel ut. </p>
                                <button onClick={() => setShowModal(false)}>Хорошо</button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}

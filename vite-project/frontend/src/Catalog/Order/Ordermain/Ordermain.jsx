import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../../../main.css';
import './Ordermain.css';

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
    comment: '',
    city: '',
    branch: ''
  });
  const [isLoading, setIsLoading] = useState(true);
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [images, setImages] = useState([]);

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
          console.error('Ошибка парсинга localStorage:', err);
        }
      }
    }
    setIsLoading(false);
  }, []);


  useEffect(() => {
    if (!product) return;
    fetch(`http://localhost:3010/api/slider/${product.id}`)
      .then(res => res.ok ? res.json() : Promise.reject('Failed to load'))
      .then(data => setImages(data))
      .catch(err => console.error(err));
  }, [product]);


  const handleInputChange = e => {
    const { name, value } = e.target;
    setFormData(f => ({ ...f, [name]: value }));
  };

const isFormValid = () => {
  const { lastName, firstName, phone, email, delivery, payment, city, branch } = formData;
  return (
    lastName.trim() &&
    firstName.trim() &&
    phone.trim() &&
    email.trim() &&
    delivery &&
    payment &&
    city &&
    branch
  );
};


  const parsePrice = priceString => parseInt(priceString.replace(/\D/g, ''), 10) || 0;

  const handleSubmit = async e => {
    e.preventDefault();
    if (!product || !quantity) {
      alert('Ошибка: товар не выбран');
      return;
    }
    if (!isFormValid()) return;

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
    <section className="ordermain__section">
      <div className="container">
        <h3>Оформление заказа</h3>
        <div className="ordermain__form__container">
          <form onSubmit={handleSubmit} className="ordermain__form--combined">
            <div className="ordermain__first__form">
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
                    className={formData.lastName ? 'filled' : ''}
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
                    className={formData.firstName ? 'filled' : ''}
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
                    placeholder="+7 (___) ___-__-__"
                    required
                    className={formData.phone ? 'filled' : ''}
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
                    className={formData.email ? 'filled' : ''}
                  />
                </div>
              </div>

              <legend>2. Доставка</legend>
              <div className="form__middle__content">
                <div className="form__radio__container">
                  {['Сдек', 'Почта России', 'Деловые линии'].map(opt => (
                    <div key={opt} className="middle__radio">
                      <input
                        type="radio"
                        name="delivery"
                        value={opt}
                        checked={formData.delivery === opt}
                        onChange={handleInputChange}
                        required
                      />
                      <label>{opt}</label>
                    </div>
                  ))}
                </div>
              </div>
              {formData.delivery && (
                <div className="delivery-extra">
                  <div className="form__content">
                    <label>Город</label>
                    <select
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      required
                      className={formData.city ? 'filled' : ''}
                    >
                      <option value="">— Выберите город —</option>
                      <option value="Москва">Москва</option>
                      <option value="Санкт-Петербург">Санкт-Петербург</option>
                      <option value="Калининград">Калининград</option>
                    </select>
                  </div>
                  <div className="form__content">
                    <label>Отделение</label>
                    <select
                      name="branch"
                      value={formData.branch}
                      onChange={handleInputChange}
                      required
                      className={formData.branch ? 'filled' : ''}
                    >
                      <option value="">— Выберите отделение —</option>
                      <option value="Отделение №1">Отделение №1</option>
                      <option value="Отделение №2">Отделение №2</option>
                      <option value="Отделение №3">Отделение №3</option>
                    </select>
                  </div>
                </div>
              )}
              <legend>3. Оплата</legend>
              <div className="form__bottom__content">
                <div className="form__radio__container">
                  {['Оплата при получении товара', 'Банковская карта'].map(opt => (
                    <div key={opt} className="bottom__radio">
                      <input
                        type="radio"
                        name="payment"
                        value={opt}
                        checked={formData.payment === opt}
                        onChange={handleInputChange}
                        required
                      />
                      <label>{opt}</label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="form__comment__content">
                <legend>Комментарий</legend>
                <textarea
                  name="comment"
                  value={formData.comment}
                  onChange={handleInputChange}
                  placeholder="Напишите комментарий"
                  className={formData.comment ? 'filled' : 'mainform__textarea'}
                />
              </div>
            </div>

            <div className="ordermain__second__form">
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
                      <p>+ Подарок: <span>“Приложение к замкам Golden Service”</span></p>
                      <div className="order__product__main__info">
                        <p>Количество: {quantity}</p>
                        <p>Цена (за шт.): {product.price}</p>
                      </div>
                    </div>
                  </div>

                  <div className="total-price">
                    <p>
                      К оплате: {(quantity * parsePrice(product.price)).toLocaleString('ru-RU')}₽
                    </p>
                  </div>

                  <button
                    type="submit"
                    className="confirm-button"
                    disabled={!isFormValid()}
                  >
                    Подтвердить заказ
                  </button>
                </div>
              ) : (
                <p>Ошибка: товар не выбран</p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

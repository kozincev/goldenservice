import "../../../main.css"
import "../Goldenlock/Goldenlock.css"
import React, { useState, useEffect } from 'react';
import btnproductslider from "./imgs/btnproductslider.png";
import sliderimg1 from "./imgs/sliderimg1.png";
// import sliderimg2 from "./imgs/sliderimg2.png";
// import sliderimg3 from "./imgs/sliderimg3.png";
// import sliderimg4 from "./imgs/sliderimg4.png";
// import sliderimg5 from "./imgs/sliderimg5.png";
import like from "./imgs/like.png";
import popupclose from './imgs/popupclose.png';
import yellowstar from './imgs/yellowstar.png';
import whitestar from './imgs/whitestar.png';
import arrow from "../../Catalogmain/imgs/arrow.png";
import firstcolor from "./imgs/firstcolor.png";
import secondcolor from "./imgs/secondcolor.png";
import thirdcolor from "./imgs/thirdcolor.png";
import descriptionimg from "./imgs/descriptionimg.png"
import repost from "./imgs/repost.png"
import comment from "./imgs/comment.png"
import more from "./imgs/more.png"
import rlcwhitestar from "./imgs/rlcwhitestar.png"



export default function Yellowlock() {
    const images = [sliderimg1, sliderimg1, sliderimg1, sliderimg1, sliderimg1];
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    const [data, setData] = useState([]);
    const [isActive, setIsActive] = useState(false);
    const [isActive2, setIsActive2] = useState(false);
    const [isActive3, setIsActive3] = useState(false);
    const [activeTab, setActiveTab] = useState('characteristics');

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const openPopup = (index) => {
        setCurrentIndex(index);
        setIsOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const closePopup = () => {
        setIsOpen(false);
        document.body.style.overflow = 'auto';
    };

    useEffect(() => {
        fetch('http://localhost:3010/api/iphone')
            .then((response) => response.json())
            .then(response => setData(response))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <section className="goldenlock__section">
            <div className="container">
                <p className="text__navigation">Главная / Каталог /<span>Дверной Замок Golden Soft Yellow для офиса</span></p>
                <div className="goldenlock__wrapper">
                    {data.length > 0 ? data.map((iphone) => (
                        <div className="selectedproduct-inner" key={iphone.id}>
                            <div className='selectedproduct-main-content'>
                                <div className="produc-photo-characteristics">
                                    <div className='card-product-slider'>
                                        <img
                                            className='card-product-slider-btnproductslider'
                                            onClick={prevImage}
                                            src={btnproductslider}
                                            alt="Previous"
                                        />
                                        <img
                                            className='card-product-slider-iphonemain'
                                            src={images[currentIndex]}
                                            alt=""
                                            onClick={() => openPopup(currentIndex)}
                                        />
                                        <img
                                            className='card-product-slider-btnproductslider card-produc-slider-btnproductslider-next'
                                            onClick={nextImage}
                                            src={btnproductslider}
                                            alt="Next"
                                        />
                                    </div>

                                    <ul className='card-product-slider-choice'>
                                        {images.map((image, index) => (
                                            <li key={index} onClick={() => openPopup(index)}>
                                                <img src={image} alt="" />
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    )) : (
                        <li>Загрузка...</li>
                    )}

                    <div className="goldenlock__right__cont">
                        <ul className="grc__head__list">
                            <ul>
                                <li className="number__model">JA182765</li>
                            </ul>
                            <ul className="grc__stars__list">
                                <li className="yellow__star"><img src={yellowstar} alt="" /></li>
                                <li className="yellow__star"><img src={yellowstar} alt="" /></li>
                                <li className="yellow__star"><img src={yellowstar} alt="" /></li>
                                <li className="white__star"><img src={whitestar} alt="" /></li>
                                <li className="white__star"><img src={whitestar} alt="" /></li>
                            </ul>
                            <ul>
                                <li className="rw__count">(12) отзывов</li>
                            </ul>
                        </ul>
                        <h3>Дверной Замок Golden Soft для офиса</h3>
                        <span>Подходит для установки на:</span>
                        <div className="product__checkboxes">
                            <ul className="product__checkboxes__list">
                                <li className="checkbox__li">
                                    <input type="checkbox" id="customCheckbox16" />
                                    <label htmlFor="customCheckbox16">Деревянную дверь</label>
                                </li>
                                <li className="checkbox__li">
                                    <input type="checkbox" id="customCheckbox17" />
                                    <label htmlFor="customCheckbox17">Межкомнатую дверь</label>
                                </li>
                            </ul>
                        </div>
                        <div className="product__eqp__price__color">
                            <div className="product__equipment">
                                <span>Комплектация</span>
                                <button>Smart замок без приложения <img src={arrow} alt="" /></button>
                            </div>
                            <div className="product__color">
                                <span>Цвет</span>
                                <ul className="product__checkboxes__list">
                                    <li className="color__li"><img src={firstcolor} alt="" /></li>
                                    <li className="color__li"><img src={secondcolor} alt="" /></li>
                                    <li className="color__li"><img src={thirdcolor} alt="" /></li>
                                </ul>
                            </div>
                        </div>
                        <div className="price__container">
                            <p className="thirty__three">23 000₽</p>
                            <p className="thirty__seven">30 000₽</p>
                        </div>
                        <div className="buy__container">
                            <button>Купить</button>
                            <div className="favourites__container">
                                <img src={like} alt="" />
                                <span>В избранное</span>
                            </div>
                        </div>
                        <div>
                            <div className="product__other__container">
                                <div className={`product__other__block__one ${isActive ? "active" : ""}`}
                                    onClick={() => setIsActive(!isActive)}>
                                    <div className="product__other__block__one__main__content"><span>Оплата</span><img src={arrow} alt="" /></div>
                                    <p>Оплата при получении товара, Картой онлайн, Google Pay, Акционная оплата картой Visa, Безналичными для юридических лиц, Безналичными для физических лиц, Apple Pay, PrivatPay, Оплата картой в отделении</p>
                                </div>
                                <div className={`product__other__block__two ${isActive2 ? "active" : ""}`}
                                    onClick={() => setIsActive2(!isActive2)}>
                                    <div className="product__other__block__two__main__content"><span>Монтаж и доставка</span><img src={arrow} alt="" /></div>
                                    <p>Доставим отвечаю</p>
                                </div>
                                <div className={`product__other__block__three ${isActive3 ? "active" : ""}`}
                                    onClick={() => setIsActive3(!isActive3)}>
                                    <div className="product__other__block__three__main__content"><span>Гарантии и выгода</span><img src={arrow} alt="" /></div>
                                    <p>Разберемся</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="goldenlock__bottom__wrapper">
                    <ul className="tittles__description__product">
                        <li className={`tittle__choice ${activeTab === 'characteristics' ? 'active' : ''}`}
                            onClick={() => setActiveTab('characteristics')}><span className={activeTab === 'characteristics' ? 'active-text' : ''}>Характеристики</span></li>
                        <li className={`tittle__choice ${activeTab === 'description' ? 'active' : ''}`}
                            onClick={() => setActiveTab('description')}><span className={activeTab === 'description' ? 'active-text' : ''}>Описание</span></li>
                        <li className={`tittle__choice ${activeTab === 'reviews' ? 'active' : ''}`}
                            onClick={() => setActiveTab('reviews')}><span className={activeTab === 'reviews' ? 'active-text' : ''}>Отзывы</span></li>
                    </ul>
                    {activeTab === 'characteristics' && (
                        <div className="goldenlock__table__product">
                            <div className="table__wrapper">
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>Память на количество карт</td>
                                            <th>2033</th>
                                        </tr>
                                        <tr>
                                            <td>Приложение</td>
                                            <th>Нет</th>
                                        </tr>
                                        <tr>
                                            <td>Материал</td>
                                            <th>Сталь, силиконовые вставки</th>
                                        </tr>
                                        <tr>
                                            <td>Цвет</td>
                                            <th>Черный, хром</th>
                                        </tr>
                                        <tr>
                                            <td>Питание</td>
                                            <th>DC 6V, 4 AAA</th>
                                        </tr>
                                        <tr>
                                            <td>Разблокировка</td>
                                            <th>Пин-код, карта или браслет Mifaire, ключ, приложение, отпечаток пальца</th>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="table__wrapper">
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>Тип двери</td>
                                            <th>Деревянная, металлическая</th>
                                        </tr>
                                        <tr>
                                            <td>Толщина двери</td>
                                            <th>38-55 мм</th>
                                        </tr>
                                        <tr>
                                            <td>Размеры</td>
                                            <th>302мм * 43мм * 22.55мм</th>
                                        </tr>
                                        <tr>
                                            <td>Вес</td>
                                            <th>2.5 кг</th>
                                        </tr>
                                        <tr>
                                            <td>Комплектация</td>
                                            <th>Без мартизы, с мартизой</th>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}

                    {activeTab === 'description' && (
                        <div className="description__content">
                            <div className="description__first__content">
                                <p>Замок дверной электронный Golden Soft GS-200Z-5
                                    имеет роскошный глянцевый блеск, четкие линии,
                                    красивые формы – этот замок сразу заявляет о своем высоком статусе.
                                    Изысканный черный цвет корпуса в обрамлении из золота мгновенно
                                    притягивает взгляды. Функционален, удобен в работе и легок в уходе:
                                    для сохранения блеска достаточно лишь протереть поверхность салфеткой.</p>
                                <p>Подходит для установки на деревянную/межкомнатную дверь.</p>
                                <h3>Преимущества умного замка от Golden Soft с приложением:</h3>
                                <ul className="description__checkboxes__list">
                                    <li className="checkbox__li">
                                        <input type="checkbox" id="customCheckbox18" />
                                        <label htmlFor="customCheckbox18">Минимизирует кражи среди персонала</label>
                                    </li>
                                    <li className="checkbox__li">
                                        <input type="checkbox" id="customCheckbox19" />
                                        <label htmlFor="customCheckbox19">Сложно взломать, высокая надежность</label>
                                    </li>
                                    <li className="checkbox__li">
                                        <input type="checkbox" id="customCheckbox20" />
                                        <label htmlFor="customCheckbox20">Можно отказаться от создания физических карт или ключей</label>
                                    </li>
                                    <li className="checkbox__li">
                                        <input type="checkbox" id="customCheckbox21" />
                                        <label htmlFor="customCheckbox21">Отслеживание статистики открытий с информацией </label>
                                    </li>
                                </ul>
                                <p>Каждый ключ записывается в память замка с уникальным токеном, что делает почти невозможным подделку цифрового ключа.
                                    Замки программируются с помощью Bluetooth-соединения с приложением на вашем устройстве или
                                    с помощью мастер – карты, которая переводит замок в режим программирования,
                                    а после получения ключа вы сможете выставить для себя уникальный пин-код или
                                    настроить отпечаток пальца прямо через приложение.
                                    Также, вы всегда можете выписывать карты или браслеты стандарта Mifare
                                    с помощью Энкодера в связке с приложением на ПК либо Android</p>
                            </div>
                            <div className="description__last__content">
                                <img src={descriptionimg} alt="" />
                            </div>
                        </div>
                    )}

                    {activeTab === 'reviews' && (
                        <div className="reviews__content">
                            <div className="reviews__wrapper">
                                <div className="reviews__first__content">
                                    <div className="reviews__first__content__top__inner">
                                        <ul className="rfct__inner__list">
                                            <li>Андрей Попенко</li>
                                            <li>20 августа, 2021</li>
                                            <li className="rw__stars__list__main">
                                                <ul className="rw__stars__list">
                                                    <li className="yellow__star"><img src={yellowstar} alt="" /></li>
                                                    <li className="yellow__star"><img src={yellowstar} alt="" /></li>
                                                    <li className="yellow__star"><img src={yellowstar} alt="" /></li>
                                                    <li className="yellow__star"><img src={whitestar} alt="" /></li>
                                                    <li className="yellow__star"><img src={whitestar} alt="" /></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="review__text__container">
                                        <p>Et feugiat eu scelerisque nulla mattis. At et enim dui mauris.
                                            Nisi, hendrerit dictum consequat tristique sed. Est ultrices etiam in lorem nulla a.Et feugiat eu scelerisque nulla mattis. At et enim dui mauris. Nisi</p>
                                    </div>
                                    <div className="rw__inner__bottom">
                                        <div className="rw__inner__bottom__first">
                                            <img src={repost} alt="" />
                                            <p>Ответить</p>
                                        </div>
                                        <div className="rw__inner__bottom__second">
                                            <img src={comment} alt="" />
                                            <p>1 комментарий</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="reviews__first__content">
                                    <div className="reviews__first__content__top__inner">
                                        <ul className="rfct__inner__list">
                                            <li>Андрей Попенко</li>
                                            <li>20 августа, 2021</li>
                                            <li className="rw__stars__list__main">
                                                <ul className="rw__stars__list">
                                                    <li className="yellow__star"><img src={yellowstar} alt="" /></li>
                                                    <li className="yellow__star"><img src={yellowstar} alt="" /></li>
                                                    <li className="yellow__star"><img src={yellowstar} alt="" /></li>
                                                    <li className="yellow__star"><img src={whitestar} alt="" /></li>
                                                    <li className="yellow__star"><img src={whitestar} alt="" /></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="review__text__container">
                                        <p>Et feugiat eu scelerisque nulla mattis. At et enim dui mauris.
                                            Nisi, hendrerit dictum consequat tristique sed. Est ultrices etiam in lorem nulla a.Et feugiat eu scelerisque nulla mattis. At et enim dui mauris. Nisi</p>
                                    </div>
                                    <div className="rw__inner__bottom">
                                        <div className="rw__inner__bottom__first">
                                            <img src={repost} alt="" />
                                            <p>Ответить</p>
                                        </div>
                                        <div className="rw__inner__bottom__second">
                                            <img src={comment} alt="" />
                                            <p>1 комментарий</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="reviews__first__content">
                                    <div className="reviews__first__content__top__inner">
                                        <ul className="rfct__inner__list">
                                            <li>Андрей Попенко</li>
                                            <li>20 августа, 2021</li>
                                            <li className="rw__stars__list__main">
                                                <ul className="rw__stars__list">
                                                    <li className="yellow__star"><img src={yellowstar} alt="" /></li>
                                                    <li className="yellow__star"><img src={yellowstar} alt="" /></li>
                                                    <li className="yellow__star"><img src={yellowstar} alt="" /></li>
                                                    <li className="yellow__star"><img src={whitestar} alt="" /></li>
                                                    <li className="yellow__star"><img src={whitestar} alt="" /></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="review__text__container">
                                        <p>Et feugiat eu scelerisque nulla mattis. At et enim dui mauris.
                                            Nisi, hendrerit dictum consequat tristique sed. Est ultrices etiam in lorem nulla a.Et feugiat eu scelerisque nulla mattis. At et enim dui mauris. Nisi</p>
                                    </div>
                                    <div className="rw__inner__bottom">
                                        <div className="rw__inner__bottom__first">
                                            <img src={repost} alt="" />
                                            <p>Ответить</p>
                                        </div>
                                        <div className="rw__inner__bottom__second">
                                            <img src={comment} alt="" />
                                            <p>1 комментарий</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="see__more">
                                    <img src={more} alt="" /><span>Показать еще</span>
                                </div>
                            </div>

                            <div className="reviews__last__content">
                                <form action="" className="rlc__form">
                                    <label htmlFor="">Ваша оценка
                                        <ul className="rlc__form__stars__list">
                                            <li className="rlc__white__star"><img src={rlcwhitestar} alt="" /></li>
                                            <li className="rlc__white__star"><img src={rlcwhitestar} alt="" /></li>
                                            <li className="rlc__white__star"><img src={rlcwhitestar} alt="" /></li>
                                            <li className="rlc__white__star"><img src={rlcwhitestar} alt="" /></li>
                                            <li className="rlc__white__star"><img src={rlcwhitestar} alt="" /></li>
                                        </ul>
                                    </label>
                                    <label htmlFor="">Ваше имя
                                        <input type="text" name="" id="" placeholder="Введите Ваше имя" />
                                    </label>
                                    <label htmlFor="">Ваше Email
                                        <input type="text" name="" id="" placeholder="Введите Ваш email" />
                                    </label>
                                    <label htmlFor="">Ваш комментарий
                                        <textarea name="" id="" placeholder="Введите Ваш комментарий"></textarea>
                                    </label>
                                    <button>Оставить отзыв</button>
                                </form>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Попап */}
            {isOpen && (
                <div className='popup-overlay' onClick={closePopup}>
                    <div className='popup-content' onClick={(e) => e.stopPropagation()}>
                        <button className='close-popup' onClick={closePopup}>
                            <img src={popupclose} alt="" />
                        </button>
                        <div className='card-product-slider card-product-slider-popup'>
                            <img
                                className='card-product-slider-btnproductslider'
                                onClick={prevImage}
                                src={btnproductslider}
                                alt="Previous"
                            />
                            <img
                                className='card-product-slider-iphonemain'
                                src={images[currentIndex]}
                                alt=""
                            />
                            <img
                                className='card-product-slider-btnproductslider card-produc-slider-btnproductslider-next'
                                onClick={nextImage}
                                src={btnproductslider}
                                alt="Next"
                            />
                        </div>
                        <ul className='card-product-slider-choice'>
                            {images.map((image, index) => (
                                <li key={index} onClick={() => setCurrentIndex(index)}>
                                    <img src={image} alt="" />
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </section>
    );
}
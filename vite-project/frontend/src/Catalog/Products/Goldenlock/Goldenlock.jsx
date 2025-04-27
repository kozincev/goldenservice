import "../../../main.css"
import "./Goldenlock.css"
import React, { useState, useEffect } from 'react'
import btnproductslider from "./imgs/btnproductslider.png"
import sliderimg1 from "./imgs/sliderimg1.png"
import sliderimg2 from "./imgs/sliderimg2.png"
import sliderimg3 from "./imgs/sliderimg3.png"
import sliderimg4 from "./imgs/sliderimg4.png"
import sliderimg5 from "./imgs/sliderimg5.png"
import iphone2 from "./imgs/iphone2.jpg"
import iphone3 from "./imgs/iphone3.jpg"
import iphone4 from "./imgs/iphone1.jpg"
import iphonemain from "./imgs/iphonemain.jpg"
import like from "./imgs/like.png"
import popupclose from './imgs/popupclose.png'
import yellowstar from './imgs/yellowstar.png'
import whitestar from './imgs/whitestar.png'
import arrow from "../../Catalogmain/imgs/arrow.png"
import firstcolor from "./imgs/firstcolor.png"
import secondcolor from "./imgs/secondcolor.png"
import thirdcolor from "./imgs/thirdcolor.png"



export default function Goldenlock() {
    const images = [sliderimg1, sliderimg2, sliderimg3, sliderimg4, sliderimg5];
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isOpen, setIsOpen] = useState(false);

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const openPopup = (index) => {
        setCurrentIndex(index);
        setIsOpen(true);
        document.body.style.overflow = 'hidden'; // Запретить скролл
    };

    const closePopup = () => {
        setIsOpen(false);
        document.body.style.overflow = 'auto'; // Вернуть возможность скролла
    };
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3010/api/iphone')
            .then((response) => response.json())
            .then(response => setData(response))
            .catch(error => console.error('Error fetching data:', error));
    }, []);


    return (
        <>
            <section className="goldenlock__section">
                <div className="container">
                    <p className="text__navigation">Главная / Каталог /<span>Дверной Замок Golden Soft для офиса</span></p>
                    <div className="goldenlock__wrapper">
                        {data.length > 0 ? data.map((iphone) => (
                            <div className="selectedproduct-inner">
                                <div className='selectedproduct-main-content'>
                                    <div className="produc-photo-characteristics">
                                        <div className='card-product-slider'>
                                            <img className='card-product-slider-btnproductslider' onClick={prevImage} src={btnproductslider} alt="Previous" />
                                            <img
                                                className='card-product-slider-iphonemain'
                                                src={images[currentIndex]}
                                                alt=""
                                                onClick={() => openPopup(currentIndex)}
                                            />
                                            <img className='card-product-slider-btnproductslider card-produc-slider-btnproductslider-next' onClick={nextImage} src={btnproductslider} alt="Next" />
                                        </div>

                                        <ul className='card-product-slider-choice'>

                                            {images.map((image, index) => (
                                                <li key={index} onClick={() => openPopup(index)}>
                                                    <img src={image} alt="" />
                                                </li>
                                            ))}
                                        </ul>
                                        {isOpen && (
                                            <div className='popup-overlay' onClick={closePopup}>
                                                <div className='popup-content' onClick={(e) => e.stopPropagation()}>
                                                    <button className='close-popup' onClick={closePopup}><img src={popupclose} alt="" /></button>

                                                    <div className='card-product-slider card-product-slider-popup'>
                                                        <img className='card-product-slider-btnproductslider' onClick={prevImage} src={btnproductslider} alt="Previous" />
                                                        <img
                                                            className='card-product-slider-iphonemain'
                                                            src={images[currentIndex]}
                                                            alt=""
                                                            onClick={() => openPopup(currentIndex)}
                                                        />
                                                        <img className='card-product-slider-btnproductslider card-produc-slider-btnproductslider-next' onClick={nextImage} src={btnproductslider} alt="Next" />
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
                                        )}
                                    </div>
                                </div>
                            </div>

                        )) : (
                            <li>Загрузка...</li>
                        )}

                        <div className="goldenlock__right__cont">
                            <ul className="grc__head__list">
                                <ul>
                                    <li className="number__model">
                                        JA182765
                                    </li>
                                </ul>
                                <ul className="grc__stars__list">
                                    <li className="yellow__star"><img src={yellowstar} alt="" /></li>
                                    <li className="yellow__star"><img src={yellowstar} alt="" /></li>
                                    <li className="yellow__star"><img src={yellowstar} alt="" /></li>
                                    <li className="white__star"><img src={whitestar} alt="" /></li>
                                    <li className="white__star"><img src={whitestar} alt="" /></li>
                                </ul>
                                <ul>
                                    <li className="rw__count">
                                        (12) отзывов
                                    </li>
                                </ul>
                            </ul>
                            <h3>Дверной Замок Golden Soft для офиса</h3>
                            <span>Подходит для установки на:</span>
                            <div className="product__checkboxes">
                                <ul className="product__checkboxes__list">
                                    <li className="checkbox__li"><input type="checkbox" id="customCheckbox16" /><label htmlFor="customCheckbox16">Деревянную дверь</label></li>
                                    <li className="checkbox__li"><input type="checkbox" id="customCheckbox17" /><label htmlFor="customCheckbox17">Межкомнатую дверь</label></li>
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
                                <p className="thirty__three">33 000₽</p>
                                <p className="thirty__seven">37 000₽</p>
                            </div>
                            <div className="buy__container">
                                <button>Купить</button>
                                <div className="favourites__container"><img src={like} alt="" /><span>В избранное</span></div>
                            </div>
                            <div>
                                <div className="product__other__container">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
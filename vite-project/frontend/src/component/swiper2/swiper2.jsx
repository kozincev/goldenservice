import "../../main.css"
import "./swiper2.css"
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import cm from "../../General/Popularproducts/imgs/cm.png"
import gift from "../../General/Popularproducts/imgs/gift.png"
import cross from "../../General/Popularproducts/imgs/cross.png"
import { Link } from "react-router-dom";


export default function Swiper2() {
    return (
        <>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiperr">
                <SwiperSlide>
                    <div className="pp__card__wrapper">
                        <Link to="/Золотой замок">
                            <div className="pp__card1">
                                <p className="sale">SALE</p>
                                <div className="card__top">
                                    <div className="card__top__first">
                                        <img src={cm} alt="" />
                                        <p>В наличии</p>
                                    </div>
                                    <div className="card__top__second">
                                        <img src={gift} alt="" />
                                        <p>Подарок</p>
                                    </div>
                                </div>
                                <p className="card__info">Дверной Замок Golden Soft для отеля</p>
                                <div className="price__container">
                                    <p className="thirty__three">33 000₽</p>
                                    <p className="thirty__seven">37 000₽</p>
                                </div>
                            </div>
                        </Link>
                        <Link to="/Золотой замок">
                            <div className="pp__card2">
                                <p className="sale">SALE</p>
                                <div className="card__top">
                                    <div className="card__top__first">
                                        <img src={cross} alt="" />
                                        <p>Нет в наличии</p>
                                    </div>
                                    <div className="card__top__second">
                                        <img src={gift} alt="" />
                                        <p>Подарок</p>
                                    </div>
                                </div>
                                <p className="card__info">Вариативный замок Golden Soft для отеля</p>
                                <div className="price__container">
                                    <p className="thirty__three">7 000₽</p>
                                    <p className="thirty__seven">8 000₽</p>
                                </div>
                            </div>
                        </Link>
                        <Link to="/Золотой замок">
                            <div className="pp__card3">
                                <p className="sale">SALE</p>
                                <div className="card__top">
                                    <div className="card__top__first">
                                        <img src={cm} alt="" />
                                        <p>В наличии</p>
                                    </div>
                                    <div className="card__top__second">
                                        <img src={gift} alt="" />
                                        <p>Подарок</p>
                                    </div>
                                </div>
                                <p className="card__info">Дверной Замок Golden Soft для офиса</p>
                                <div className="price__container">
                                    <p className="thirty__three">33 000₽</p>
                                    <p className="thirty__seven">39 000₽</p>
                                </div>
                            </div>
                        </Link>
                        <Link to="/Золотой замок">
                            <div className="pp__card4">
                                <p className="sale">SALE</p>
                                <div className="card__top">
                                    <div className="card__top__first">
                                        <img src={cm} alt="" />
                                        <p>В наличии</p>
                                    </div>
                                    <div className="card__top__second">
                                        <img src={gift} alt="" />
                                        <p>Подарок</p>
                                    </div>
                                </div>
                                <p className="card__info">Дверной Замок Golden Soft для офиса</p>
                                <div className="price__container">
                                    <p className="thirty__three">9 000₽</p>
                                    <p className="thirty__seven">12 000₽</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="pp__card__wrapper">
                        <Link to="/Золотой замок">
                            <div className="pp__card1">
                                <p className="sale">SALE</p>
                                <div className="card__top">
                                    <div className="card__top__first">
                                        <img src={cm} alt="" />
                                        <p>В наличии</p>
                                    </div>
                                    <div className="card__top__second">
                                        <img src={gift} alt="" />
                                        <p>Подарок</p>
                                    </div>
                                </div>
                                <p className="card__info">Дверной Замок Golden Soft для отеля</p>
                                <div className="price__container">
                                    <p className="thirty__three">33 000₽</p>
                                    <p className="thirty__seven">37 000₽</p>
                                </div>
                            </div>
                        </Link>
                        <Link to="/Золотой замок">
                            <div className="pp__card2">
                                <p className="sale">SALE</p>
                                <div className="card__top">
                                    <div className="card__top__first">
                                        <img src={cross} alt="" />
                                        <p>Нет в наличии</p>
                                    </div>
                                    <div className="card__top__second">
                                        <img src={gift} alt="" />
                                        <p>Подарок</p>
                                    </div>
                                </div>
                                <p className="card__info">Вариативный замок Golden Soft для отеля</p>
                                <div className="price__container">
                                    <p className="thirty__three">7 000₽</p>
                                    <p className="thirty__seven">8 000₽</p>
                                </div>
                            </div>
                        </Link>
                        <Link to="/Золотой замок">
                            <div className="pp__card3">
                                <p className="sale">SALE</p>
                                <div className="card__top">
                                    <div className="card__top__first">
                                        <img src={cm} alt="" />
                                        <p>В наличии</p>
                                    </div>
                                    <div className="card__top__second">
                                        <img src={gift} alt="" />
                                        <p>Подарок</p>
                                    </div>
                                </div>
                                <p className="card__info">Дверной Замок Golden Soft для офиса</p>
                                <div className="price__container">
                                    <p className="thirty__three">33 000₽</p>
                                    <p className="thirty__seven">39 000₽</p>
                                </div>
                            </div>
                        </Link>
                        <Link to="/Золотой замок">
                            <div className="pp__card4">
                                <p className="sale">SALE</p>
                                <div className="card__top">
                                    <div className="card__top__first">
                                        <img src={cm} alt="" />
                                        <p>В наличии</p>
                                    </div>
                                    <div className="card__top__second">
                                        <img src={gift} alt="" />
                                        <p>Подарок</p>
                                    </div>
                                </div>
                                <p className="card__info">Дверной Замок Golden Soft для офиса</p>
                                <div className="price__container">
                                    <p className="thirty__three">9 000₽</p>
                                    <p className="thirty__seven">12 000₽</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    )
}
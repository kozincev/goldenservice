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
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 9;

    const allItems = Array.from({ length: 4 }, (_, index) => ({
        id: index + 1,
        sale: true,
        inStock: true,
        hasGift: true,
        rating: 3,
        reviews: 12,
        title: "Дверной Замок Golden Soft для отеля",
        price: 33000,
        oldPrice: 37000,
    }));

    const totalPages = Math.ceil(allItems.length / itemsPerPage);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = allItems.slice(indexOfFirstItem, indexOfLastItem);

    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }
    const cardImages = {
        1: 'url(../../General/Popularproducts/imgs/card1.png)',
        2: 'url(../../General/Popularproducts/imgs/card2.png)',
        3: 'url(../../General/Popularproducts/imgs/card3.png)',
        4: 'url(../../General/Popularproducts/imgs/card4.png)'
    };
    return (
        <>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiperr">
                <SwiperSlide>

                    <div className="catalog__items__wrapper">
                        <div className="catalog__items__container" >
                            {currentItems.map((item, index) => (
                                <Link
                                    to={`/Lock/${item.id}`}
                                    key={item.id}
                                    className="card-link-wrapper"
                                >
                                    <div
                                        className="pp__card"
                                        data-card-type={(index % 4) + 1}
                                        key={item.id}
                                    >
                                        {item.sale && <p className="sale">SALE</p>}
                                        <div className="card__top">
                                            <div className="card__top__first">
                                                <img src={cm} alt="В наличии" />
                                                <p>В наличии</p>
                                            </div>
                                            {item.hasGift && (
                                                <div className="card__top__second">
                                                    <img src={gift} alt="Подарок" />
                                                    <p>Подарок</p>
                                                </div>
                                            )}
                                        </div>
                                        <div className="btm__card__wrapper">
                                            <ul className="general__list__reviews">
                                                <ul className="stars__list">
                                                    {[...Array(5)].map((_, starIndex) => (
                                                        <li
                                                            key={starIndex}
                                                            className={starIndex < item.rating ? 'yellow__stars' : 'white__stars'}
                                                        ></li>
                                                    ))}
                                                </ul>
                                                <ul className="rw">
                                                    <li>({item.reviews}) отзывов</li>
                                                </ul>
                                            </ul>
                                            <p className="card__info">{item.title}</p>
                                        </div>
                                        <div className="price__container">
                                            <p className="thirty__three">{item.price.toLocaleString()}₽</p>
                                            <p className="thirty__seven">{item.oldPrice.toLocaleString()}₽</p>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>

                    <div className="catalog__items__wrapper">
                        <div className="catalog__items__container">
                            {currentItems.map((item, index) => (
                                <Link
                                    to={`/Lock/${item.id}`}
                                    key={item.id}
                                    className="card-link-wrapper"
                                >
                                    <div className={`pp__card${(index % 4) + 1}`}>
                                        {item.sale && <p className="sale">SALE</p>}
                                        <div className="card__top">
                                            <div className="card__top__first">
                                                <img src={cm} alt="В наличии" />
                                                <p>В наличии</p>
                                            </div>
                                            {item.hasGift && (
                                                <div className="card__top__second">
                                                    <img src={gift} alt="Подарок" />
                                                    <p>Подарок</p>
                                                </div>
                                            )}
                                        </div>
                                        <div className="btm__card__wrapper">
                                            <ul className="general__list__reviews">
                                                <ul className="stars__list">
                                                    {[...Array(5)].map((_, starIndex) => (
                                                        <li
                                                            key={starIndex}
                                                            className={starIndex < item.rating ? 'yellow__stars' : 'white__stars'}
                                                        ></li>
                                                    ))}
                                                </ul>
                                                <ul className="rw">
                                                    <li>({item.reviews}) отзывов</li>
                                                </ul>
                                            </ul>
                                            <p className="card__info">{item.title}</p>
                                        </div>
                                        <div className="price__container">
                                            <p className="thirty__three">{item.price.toLocaleString()}₽</p>
                                            <p className="thirty__seven">{item.oldPrice.toLocaleString()}₽</p>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>

        </>
    )
}
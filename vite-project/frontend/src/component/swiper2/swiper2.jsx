import "../../main.css"
import "./swiper2.css"
import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import cm from "../../General/Popularproducts/imgs/cm.png"
import gift from "../../General/Popularproducts/imgs/gift.png"
import { Link } from "react-router-dom";

export default function Swiper2() {
    const [currentPage, setCurrentPage] = useState(1);
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const itemsPerPage = 4;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    `http://localhost:3010/api/catalog-items?page=${currentPage}&itemsPerPage=${itemsPerPage}`
                );

                if (!response.ok) {
                    const errorData = await response.json();
                    throw new Error(errorData.error || 'Ошибка загрузки данных');
                }

                const data = await response.json();

              
                if (!data.items || !Array.isArray(data.items)) {
                    throw new Error('Некорректный формат данных');
                }

                setItems(data.items);
                setError(null);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [currentPage, itemsPerPage]);

 
    const groupedItems = items.reduce((acc, item, index) => {
        const chunkIndex = Math.floor(index / 4);
        if (!acc[chunkIndex]) acc[chunkIndex] = [];
        acc[chunkIndex].push(item);
        return acc;
    }, []);

    if (loading) return <div className="loading">Загрузка...</div>;
    if (error) return <div className="error">Ошибка: {error}</div>;

    return (
        <Swiper
            navigation={true}
            modules={[Navigation]}
            className="mySwiperr"
            onSlideChange={(swiper) => setCurrentPage(swiper.activeIndex + 1)}
        >
            {groupedItems.map((slideItems, index) => (
                <SwiperSlide key={index}>
                    <div className="catalog__items__wrapper">
                        <div className="catalog__items__container">
                            {slideItems.map((item) => (
                                <Link
                                    to={`/Lock/${item.id}`}
                                    key={item.id}
                                    className="card-link-wrapper"
                                >
                                    <div
                                        className="pp__card"
                                        data-card-type={item.card_type}
                                    >
                                        {item.sale && <p className="sale">SALE</p>}
                                        <div className="card__top">
                                            {item.in_stock && (
                                                <div className="card__top__first">
                                                    <img src={cm} alt="В наличии" />
                                                    <p>В наличии</p>
                                                </div>
                                            )}
                                            {item.has_gift && (
                                                <div className="card__top__second">
                                                    <img src={gift} alt="Подарок" />
                                                    <p>Подарок</p>
                                                </div>
                                            )}
                                        </div>
                                        <div className="btm__card__wrapper">
                                            <div className="general__list__reviews">
                                                <div className="stars__list">
                                                    {[...Array(5)].map((_, starIndex) => (
                                                        <li
                                                            key={starIndex}
                                                            className={starIndex < item.rating ? 'yellow__stars' : 'white__stars'}
                                                        />
                                                    ))}
                                                </div>
                                                <div className="rw">
                                                    ({item.reviews_count}) отзывов
                                                </div>
                                            </div>
                                            <p className="card__info">{item.title}</p>
                                        </div>
                                        <div className="price__container">
                                            <p className="thirty__three">
                                                {item.price?.toLocaleString()}₽
                                            </p>
                                            {item.old_price && (
                                                <p className="thirty__seven">
                                                    {item.old_price.toLocaleString()}₽
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </SwiperSlide>
            ))}
            {groupedItems.map((slideItems, index) => (
                <SwiperSlide key={index}>
                    <div className="catalog__items__wrapper">
                        <div className="catalog__items__container">
                            {slideItems.map((item) => (
                                <Link
                                    to={`/Lock/${item.id}`}
                                    key={item.id}
                                    className="card-link-wrapper"
                                >
                                    <div
                                        className="pp__card"
                                        data-card-type={item.card_type}
                                    >
                                        {item.sale && <p className="sale">SALE</p>}
                                        <div className="card__top">
                                            {item.in_stock && (
                                                <div className="card__top__first">
                                                    <img src={cm} alt="В наличии" />
                                                    <p>В наличии</p>
                                                </div>
                                            )}
                                            {item.has_gift && (
                                                <div className="card__top__second">
                                                    <img src={gift} alt="Подарок" />
                                                    <p>Подарок</p>
                                                </div>
                                            )}
                                        </div>
                                        <div className="btm__card__wrapper">
                                            <div className="general__list__reviews">
                                                <div className="stars__list">
                                                    {[...Array(5)].map((_, starIndex) => (
                                                        <li
                                                            key={starIndex}
                                                            className={starIndex < item.rating ? 'yellow__stars' : 'white__stars'}
                                                        />
                                                    ))}
                                                </div>
                                                <div className="rw">
                                                    ({item.reviews_count}) отзывов
                                                </div>
                                            </div>
                                            <p className="card__info">{item.title}</p>
                                        </div>
                                        <div className="price__container">
                                            <p className="thirty__three">
                                                {item.price?.toLocaleString()}₽
                                            </p>
                                            {item.old_price && (
                                                <p className="thirty__seven">
                                                    {item.old_price.toLocaleString()}₽
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
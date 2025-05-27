import "./Catalog.css"
import "../../main.css"
import arrow from "./imgs/arrow.png"
import React, { useState, useEffect } from 'react';
import { Slider } from '@mui/material';
import cm from "../../General/Popularproducts/imgs/cm.png"
import gift from "../../General/Popularproducts/imgs/gift.png"
import { Link } from "react-router-dom"

export default function Catalog() {
    const [priceFrom, setPriceFrom] = useState(0);
    const [priceTo, setPriceTo] = useState(40000);
    const [sliderValue, setSliderValue] = useState([priceFrom, priceTo]);
    const [currentPage, setCurrentPage] = useState(1);
    const [items, setItems] = useState([]);
    const [totalItems, setTotalItems] = useState(0);
    const [selectedCategories, setSelectedCategories] = useState([]);


    const itemsPerPage = 9;

    useEffect(() => {
        setCurrentPage(1);
    }, [priceFrom, priceTo, selectedCategories]);

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await fetch(
                    `http://localhost:3010/api/catalog-items?page=${currentPage}&itemsPerPage=9&priceFrom=${priceFrom}&priceTo=${priceTo}&categories=${encodeURIComponent(selectedCategories.join(','))}`
                );
                const data = await response.json();
                setItems(data.items);
                setTotalItems(data.total);
            } catch (error) {
                console.error('Error fetching catalog items:', error);
            }
        };

        fetchItems();
    }, [currentPage, priceFrom, priceTo, selectedCategories]);


    const handleCategoryChange = (categoryTitle) => {
        setSelectedCategories(prev =>
            prev.includes(categoryTitle)
                ? prev.filter(c => c !== categoryTitle)
                : [...prev, categoryTitle]
        );
    };

    const handleSliderChange = (event, newValue) => {
        setSliderValue(newValue);
        setPriceFrom(newValue[0]);
        setPriceTo(newValue[1]);
    };

    const handlePriceFromChange = (event) => {
        const value = Math.min(Number(event.target.value), priceTo);
        setPriceFrom(value);
        setSliderValue([value, priceTo]);
    };

    const handlePriceToChange = (event) => {
        const value = Math.max(Number(event.target.value), priceFrom);
        setPriceTo(value);
        setSliderValue([priceFrom, value]);
    };

    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

    return (
        <>
            <section className="catalog__section">
                <div className="container">
                    <p className="text__navigation">Главная / <span>Каталог</span></p>
                    <h5>Накладные электронные замки <span className="eight__hungred__span">({totalItems})</span></h5>
                    <div className="catalog__top__btns">
                        <button className="drop__filters">Сбросить фильтры</button>
                        <button className="sortirovka">Популярности <img src={arrow} alt="" /></button>
                    </div>
                    <div className="page__container">
                        <div className="catalog__filter">
                            <legend>Фильтр</legend>
                            <form action="">
                                <div className="form__top__price">
                                    <label htmlFor="">Цена</label>
                                    <button><img src={arrow} alt="" /></button>
                                </div>
                                <div className="categoryleftbar-inner-sorting" >
                                    <div className="categoryleftbar-inner-sorting-price" >
                                        <div className='categoryleftbar-inner-sorting-input'>
                                            <input
                                                type="number"
                                                value={priceFrom}
                                                onChange={handlePriceFromChange}
                                                placeholder="от"
                                            />
                                            <input
                                                type="number"
                                                value={priceTo}
                                                onChange={handlePriceToChange}
                                                placeholder="до"
                                            />
                                        </div>
                                        <Slider
                                            value={sliderValue}
                                            onChange={handleSliderChange}
                                            valueLabelDisplay="auto"
                                            min={0}
                                            max={40000}
                                        />
                                    </div>
                                </div>
                                <div className="bottom__first__line"></div>

                                <form action="" className="second__form">
                                    <div className="form__middle__tittle">
                                        <label>Особенности</label>
                                        <button><img src={arrow} alt="" /></button>
                                    </div>
                                    <div className="second__form__checkbox__contaier">
                                        <ul className="checkbox__list">
                                            <li className="checkbox__li">
                                                <input
                                                    type="checkbox"
                                                    id="customCheckbox"
                                                    checked={selectedCategories.includes('Дверной Замок Golden Soft для офиса')}
                                                    onChange={() => handleCategoryChange('Дверной Замок Golden Soft для офиса')}
                                                />
                                                <label htmlFor="customCheckbox">Дверной Замок Golden Soft для офиса<span>(5)</span></label>
                                            </li>
                                            <li className="checkbox__li">
                                                <input
                                                    type="checkbox"
                                                    id="customCheckbox2"
                                                    checked={selectedCategories.includes('Дверной Замок Golden Soft для отеля')}
                                                    onChange={() => handleCategoryChange('Дверной Замок Golden Soft для отеля')}
                                                />
                                                <label htmlFor="customCheckbox2">Дверной Замок Golden Soft для отеля<span>(3)</span></label>
                                            </li>
                                            <li className="checkbox__li">
                                                <input
                                                    type="checkbox"
                                                    id="customCheckbox3"
                                                    checked={selectedCategories.includes('Дверной Замок Golden Soft для комнаты')}
                                                    onChange={() => handleCategoryChange('Дверной Замок Golden Soft для комнаты')}
                                                />
                                                <label htmlFor="customCheckbox3">Дверной Замок Golden Soft для комнаты<span>(3)</span></label>
                                            </li>
                                            <li className="checkbox__li">
                                                <input
                                                    type="checkbox"
                                                    id="customCheckbox4"
                                                    checked={selectedCategories.includes('Дверной Замок Golden Soft для бани')}
                                                    onChange={() => handleCategoryChange('Дверной Замок Golden Soft для бани')}
                                                />
                                                <label htmlFor="customCheckbox4">Дверной Замок Golden Soft для бани<span>(3)</span></label>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="bottom__first__line"></div>
                                </form>
                                <form action="" className="second__form">
                                    <div className="form__middle__tittle">
                                        <label>Цвет</label>
                                        <button><img src={arrow} alt="" /></button>
                                    </div>
                                    <div className="bottom__first__line"></div>
                                </form>
                                <form action="" className="second__form">
                                    <div className="form__middle__tittle">
                                        <label>Материал</label>
                                        <button><img src={arrow} alt="" /></button>
                                    </div>
                                    <div className="bottom__first__line"></div>
                                </form>
                                <form action="" className="second__form">
                                    <div className="form__middle__tittle">
                                        <label>Размеры</label>
                                        <button><img src={arrow} alt="" /></button>
                                    </div>
                                    <div className="bottom__first__line"></div>
                                </form>
                            </form>
                        </div>

                        <div className="catalog__items__wrapper">
                            <div className="catalog__items__container">
                                {items.map((item) => (
                                    <Link
                                        to={`/Lock/${item.id}`}
                                        key={item.id}
                                        className="card-link-wrapper"
                                    >
                                        <div className="pp__card"
                                            data-card-type={item.card_type}
                                            key={item.id}>
                                            {item.sale && <p className="sale">SALE</p>}
                                            <div className="card__top">
                                                <div className="card__top__first">
                                                    <img src={cm} alt="В наличии" />
                                                    <p>{item.in_stock ? 'В наличии' : 'Нет в наличии'}</p>
                                                </div>
                                                {item.has_gift && (
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
                                                        <li>({item.reviews_count}) отзывов</li>
                                                    </ul>
                                                </ul>
                                                <p className="card__info">{item.title}</p>
                                            </div>
                                            <div className="price__container">
                                                <p className="thirty__three">{item.price.toLocaleString()}₽</p>
                                                {item.sale && (
                                                    <p className="thirty__seven">{item.old_price.toLocaleString()}₽</p>
                                                )}
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                            {totalPages > 1 && (
                                <div className="pagination">
                                    <button
                                        onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                                        disabled={currentPage === 1}
                                    >
                                        Назад
                                    </button>

                                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(number => (
                                        <button
                                            key={number}
                                            onClick={() => setCurrentPage(number)}
                                            className={currentPage === number ? 'active' : ''}
                                        >
                                            {number}
                                        </button>
                                    ))}

                                    <button
                                        onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                                        disabled={currentPage === totalPages}
                                    >
                                        Вперед
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
};
import "./Catalog.css"
import "../../main.css"
import arrow from "./imgs/arrow.png"
import React, { useState } from 'react';
import { Slider } from '@mui/material';
import cm from "../../General/Popularproducts/imgs/cm.png"
import gift from "../../General/Popularproducts/imgs/gift.png"
import { Link } from "react-router-dom"


export default function Catalog() {

    const [priceFrom, setPriceFrom] = useState(0);
    const [priceTo, setPriceTo] = useState(100);
    const [sliderValue, setSliderValue] = useState([priceFrom, priceTo]);


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

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 9;

    const allItems = Array.from({ length: 14 }, (_, index) => ({
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


    return (
        <>
            <section className="catalog__section">
                <div className="container">
                    <p className="text__navigation">Главная / <span>Каталог</span></p>
                    <h5>Накладные электронные замки <span className="eight__hungred__span">(854)</span></h5>
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
                                <div className="categoryleftbar-inner-sorting">
                                    <div className="categoryleftbar-inner-sorting-price">
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
                                            min={7900}
                                            max={180000}
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
                                            <li className="checkbox__li"><input type="checkbox" id="customCheckbox" /><label htmlFor="customCheckbox">Электронные кодовые замки<span>(65)</span></label></li>
                                            <li className="checkbox__li"><input type="checkbox" id="customCheckbox2" /><label htmlFor="customCheckbox2">Биометрические замки<span>(15)</span></label></li>
                                            <li className="checkbox__li"><input type="checkbox" id="customCheckbox3" /><label htmlFor="customCheckbox3">Замок с отппечатком<span>(28)</span></label></li>
                                            <li className="checkbox__li"><input type="checkbox" id="customCheckbox4" /><label htmlFor="customCheckbox4">Замок с бесконтактной картой<span>(45)</span></label></li>
                                            <li className="checkbox__li"><input type="checkbox" id="customCheckbox5" /><label htmlFor="customCheckbox5">Программируемые замки<span>(8)</span></label></li>
                                            <li className="checkbox__li"><input type="checkbox" id="customCheckbox6" /><label htmlFor="customCheckbox6">Замки на батарейках<span>(4)</span></label></li>
                                            <li className="checkbox__li"><input type="checkbox" id="customCheckbox7" /><label htmlFor="customCheckbox7">Замки с удаленным доступом<span>(31)</span></label></li>
                                            <li className="checkbox__li"><input type="checkbox" id="customCheckbox8" /><label htmlFor="customCheckbox8">Bluetooth замки<span>(6)</span></label></li>
                                            <li className="checkbox__li"><input type="checkbox" id="customCheckbox9" /><label htmlFor="customCheckbox9">Электронные замки для квартиры<span>(17)</span></label></li>
                                            <li className="checkbox__li"><input type="checkbox" id="customCheckbox10" /><label htmlFor="customCheckbox10">Замки для стеклянных дверей<span>(24)</span></label></li>
                                            <li className="checkbox__li"><input type="checkbox" id="customCheckbox11" /><label htmlFor="customCheckbox11">Электронные цилиндры<span>(3)</span></label></li>
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
            </section >
        </>
    )
}
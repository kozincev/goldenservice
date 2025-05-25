import projectimg1 from "../../Wholesale/Projects/imgs/projectimg1.png"
import radissonlogo from "../../Wholesale/Projects/imgs/radissonlogo.png"
import "../../main.css"
import "./swiper4.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';


export default function Swiper4() {
    return (
        <>
            <Swiper
                navigation={true}
                pagination={true}
                keyboard={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]} className="swiper__projects">
                <SwiperSlide>
                    <div className="projects__wrapper">
                        <div className="projects__first__content">
                            <img src={projectimg1} alt="" />
                        </div>

                        <div className="projects__second__content">
                            <img src={radissonlogo} alt="" />
                            <p>Проект для гостинницы Radisson Hotels</p>

                            <div className="projects__text">
                                <div className="projects__cm__container"><div className="projects__cm"></div><p>Установлено 123 Вариативных замка Golden Soft для отеля</p></div>
                                <div className="projects__cm__container"><div className="projects__cm"></div><p>Было нанесено личный брендинг на все замки</p></div>
                                <div className="projects__cm__container"><div className="projects__cm"></div><p>Были проведны монтажные работы, также была произведена помощь в пкделючении замков к системе</p></div>
                            </div>
                            <div className="budget">
                                <p >Бюджет - <span>$5000</span></p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="projects__wrapper">
                        <div className="projects__first__content">
                            <img src={projectimg1} alt="" />
                        </div>

                        <div className="projects__second__content">
                            <img src={radissonlogo} alt="" />
                            <p>Проект для гостинницы Radisson Hotels</p>

                            <div className="projects__text">
                                <div className="projects__cm__container"><div className="projects__cm"></div><p>Установлено 123 Вариативных замка Golden Soft для отеля</p></div>
                                <div className="projects__cm__container"><div className="projects__cm"></div><p>Было нанесено личный брендинг на все замки</p></div>
                                <div className="projects__cm__container"><div className="projects__cm"></div><p>Были проведны монтажные работы, также была произведена помощь в пкделючении замков к системе</p></div>
                            </div>
                            <div className="budget">
                                <p >Бюджет - <span>$5000</span></p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="projects__wrapper">
                        <div className="projects__first__content">
                            <img src={projectimg1} alt="" />
                        </div>

                        <div className="projects__second__content">
                            <img src={radissonlogo} alt="" />
                            <p>Проект для гостинницы Radisson Hotels</p>

                            <div className="projects__text">
                                <div className="projects__cm__container"><div className="projects__cm"></div><p>Установлено 123 Вариативных замка Golden Soft для отеля</p></div>
                                <div className="projects__cm__container"><div className="projects__cm"></div><p>Было нанесено личный брендинг на все замки</p></div>
                                <div className="projects__cm__container"><div className="projects__cm"></div><p>Были проведны монтажные работы, также была произведена помощь в пкделючении замков к системе</p></div>
                            </div>
                            <div className="budget">
                                <p >Бюджет - <span>$5000</span></p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>

        </>
    )
}
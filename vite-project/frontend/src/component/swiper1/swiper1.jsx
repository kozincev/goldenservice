import "../swiper1/swiper1.css"
import "../../General/Header/Header.css"
import "../../main.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import headerimg1 from "../../General/Header/imgs/headerimg1.png"
// import headerimg2 from "../../General/Header/imgs/headerimg2.png"
// import headerimg3 from "../../General/Header/imgs/headerimg3.png"


export default function Swiper1(){
    return(
        <>
        <Swiper
            cssMode={true}
            navigation={true}
            pagination={true}
            mousewheel={true}
            keyboard={true}
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="swiper__wrapper">
                <div className="swiper__img">
                  <img src={headerimg1} alt="" />
                </div>
                <div className="swiper__content">
                  <h1>Golden Soft <br />
                    GS-200Z-5 для офиса</h1>
                  <p>Замок дверной электронный Golden Soft GS-200Z-5 имеет роскошный глянцевый блеск, четкие линии, красивые формы.</p>
                  <p className="last__p">Подходит для установки на деревянную/межкомнатную дверь.</p>


                  <p className="price">Цена</p>
                  <div className="price__container">
                    <p className="thirty__three">33 000₽</p>
                    <p className="thirty__seven">37 000₽</p>
                  </div>
                  <button><a href="">Добавить в корзину</a></button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper__wrapper">
                <div className="swiper__img">
                  <img src={headerimg1} alt="" />
                </div>
                <div className="swiper__content">
                  <h1>Golden Soft <br />
                    GS-200Z-5 для офиса</h1>
                  <p>Замок дверной электронный Golden Soft GS-200Z-5 имеет роскошный глянцевый блеск, четкие линии, красивые формы.</p>
                  <p className="last__p">Подходит для установки на деревянную/межкомнатную дверь.</p>


                  <p className="price">Цена</p>
                  <div className="price__container">
                    <p className="thirty__three">33 000₽</p>
                    <p className="thirty__seven">37 000₽</p>
                  </div>
                  <button><a href="">Добавить в корзину</a></button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper__wrapper">
                <div className="swiper__img">
                  <img src={headerimg1} alt="" />
                </div>
                <div className="swiper__content">
                  <h1>Golden Soft <br />
                    GS-200Z-5 для офиса</h1>
                  <p>Замок дверной электронный Golden Soft GS-200Z-5 имеет роскошный глянцевый блеск, четкие линии, красивые формы.</p>
                  <p className="last__p">Подходит для установки на деревянную/межкомнатную дверь.</p>


                  <p className="price">Цена</p>
                  <div className="price__container">
                    <p className="thirty__three">33 000₽</p>
                    <p className="thirty__seven">37 000₽</p>
                  </div>
                  <button><a href="">Добавить в корзину</a></button>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </>
    )
}
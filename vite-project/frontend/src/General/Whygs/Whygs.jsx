import "../../main.css"
import "./Whygs.css"
import pr from "../Whygs/imgs/pr.png"
import like from "../Whygs/imgs/like.png"


export default function Whygs(){
    return(
        <>
        <section className="section__whygs">
            <div className="container">
                <h2>Почему GoldenService? </h2>
                <div className="whygs__wrapper">
                    <div className="whygs__block">
                        <img src={pr} alt="" />
                        <p className="whygs__text">Возврат удвоенной стоимости каждого замка в случае брака.</p>
                    </div>
                    <div className="whygs__block">
                        <img src={like} alt="" />
                        <p className="whygs__text">Наносим ваш логотип компании на наш продукт</p>
                    </div>
                    <div className="whygs__block">
                        <img src={pr} alt="" />
                        <p className="whygs__text">Возврат удвоенной стоимости каждого замка в случае брака.</p>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
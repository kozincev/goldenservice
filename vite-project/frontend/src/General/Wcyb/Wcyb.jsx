import "../../main.css"
import "./Wcyb.css"


export default function Wcyb() {
    return (
        <>
            <section className="whcyb__section">
                <div className="container">
                    <h4>Мы Вам перезвоним</h4>
                    <p>Если у вас возникли какие-то вопросы или проблемы, заполните форму и мы Вам перезвоним.</p>
                    <div className="wcyb__form">
                        <input type="text" placeholder="Ваше имя"/>
                        <input type="email" placeholder="Ваш email"/>
                        <button>Отправить</button>
                    </div>
                </div>
            </section>
        </>
    )
}
import "./Contacts.css"
import "../../main.css"
import contactsimg1 from "./imgs/contactsimg1.png"
import contactsimg2 from "./imgs/contactsimg2.png"
import contactsimg3 from "./imgs/contactsimg3.png"
import { useState } from "react";
import successfully from "../../Wholesale/Wholesalemain/imgs/successfully.png"


export default function Contacts() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [modalVisible, setModalVisible] = useState(false);

    const handleSubmit = async () => {
        if (!name.trim() || !email.trim()) {
            alert("Пожалуйста, заполните все поля.");
            return;
        }

        try {
            const response = await fetch("http://localhost:3010/api/wcyb", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    wcyb_name: name,
                    wcyb_email: email,
                })
            });

            if (!response.ok) throw new Error("Ошибка при отправке");


            setModalVisible(true);
        } catch (err) {
            console.error("Ошибка при отправке формы:", err);
            alert("Произошла ошибка. Попробуйте позже.");
        }
    };
    return (
        <>
            <section className="contacts__section">
                <div className="container">
                    <div className="contacts__wrapper">
                        <div className="contacts__first__content">
                            <h3>Остались вопросы?</h3>
                            <p>Если у вас возникли какие-то вопросы по поводу оптовых заказов, заполните форму и мы Вам перезвоним.</p>
                            <input
                                type="text"
                                placeholder="Ваше имя"
                                value={name}
                                onChange={(e) => setName(e.target.value)} />
                            <input
                                type="email"
                                placeholder="Ваш email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)} />
                            <button onClick={handleSubmit}>Отправить</button>
                        </div>
                        <div className="contacts__second__content">
                            <h3>Контакты</h3>
                            <div className="contacts__list__wrapper">
                                <ul className="contacts__list">
                                    <li className="contacts__list__tittle">Наш адрес</li>
                                    <li className="contacts__list__main">Россия, Ростов-на-<br />Дону ул. Богачева, 16</li>
                                    <li><img src={contactsimg1} alt="" /></li>
                                </ul>
                                <ul className="contacts__list">
                                    <li className="contacts__list__tittle">Телефоны</li>
                                    <li className="contacts__list__main">+7 (988) 565 00 38 <br />+375 33 662 82 56</li>
                                    <li><img src={contactsimg2} alt="" /></li>
                                </ul>
                                <ul className="contacts__list">
                                    <li className="contacts__list__tittle">Email</li>
                                    <li className="contacts__list__main">vladpertcev@mail.ru <br />korobko416@gmail.com</li>
                                    <li><img src={contactsimg3} alt="" /></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {modalVisible && (
                        <div className="modal-overlay">
                            <div className="modal">
                                <img src={successfully} alt="" />
                                <h2>Мы вам перезвоним!</h2>
                                <p>Porttitor vitae ornare aliquet euismod nunc, tincidunt. In non elementum, ornare elementum nisi egestas vel ut. </p>
                                <button onClick={() => { setModalVisible(false); window.location.reload() }}>Хорошо</button>
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </>
    )
}
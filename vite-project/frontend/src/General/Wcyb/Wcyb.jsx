import { useState } from "react";
import "../../main.css";
import "./Wcyb.css";
import "../../Wholesale/Wholesalemain/Wholesalemain.css"
import successfully from "../../Wholesale/Wholesalemain/imgs/successfully.png"

export default function Wcyb() {
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
            <section className="whcyb__section">
                <div className="container">
                    <h4>Мы Вам перезвоним</h4>
                    <p>Если у вас возникли какие-то вопросы или проблемы, заполните форму и мы Вам перезвоним.</p>
                    <div className="wcyb__form">
                        <input
                            type="text"
                            placeholder="Ваше имя"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <input
                            type="email"
                            placeholder="Ваш email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <button onClick={handleSubmit}>Отправить</button>
                    </div>
                </div>
            </section>
            {modalVisible && (
                <div className="modal-overlay">
                    <div className="modal">
                        <img src={successfully} alt="" />
                        <h2>Мы вам перезвоним!</h2>
                        <p>Porttitor vitae ornare aliquet euismod nunc, tincidunt. In non elementum, ornare elementum nisi egestas vel ut. </p>
                        <button onClick={() => {setModalVisible(false); window.location.reload()}}>Хорошо</button>
                    </div>
                </div>
            )}
        </>
    );
}

import "./Orderconfirmation.css"
import successfully from "./imgs/successfully.png"
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


export default function Orderconfirmation() {
    const navigate = useNavigate();
    const [countdown, setCountdown] = useState(10);

    useEffect(() => {
        const interval = setInterval(() => {
            setCountdown(prev => prev - 1);
        }, 1000);

        const timeout = setTimeout(() => {
            navigate('/');
        }, 10000);

        return () => {
            clearInterval(interval);
            clearTimeout(timeout);
        };
    }, [navigate]);
    return (
        <>
            <section className="orderconfirmation__section">
                <div className="container">
                    <div className="successfully__content">
                        <img src={successfully} alt="" />
                        <h3>Успешное подтверждение заказа</h3>
                        {/* <button>Вы можете вернуться на главную страницу по этой кнопке</button> */}
                        <p className="countdown">Вы будете перенаправлены на главную страницу через {countdown} секунд...</p>
                    </div>
                </div>
            </section>
        </>
    )
}
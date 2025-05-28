import "../../main.css"
import "./Categoriesgeneral.css"
import { Link } from "react-router-dom"


export default function Categoriesgeneral() {
    const categories = [
        { id: 1, title: "Для отелей", class: "categoriesgeneral__card1" },
        { id: 2, title: "Для шкафчиков", class: "categoriesgeneral__card2" },
        { id: 3, title: "Для офисов", class: "categoriesgeneral__card3" },
        { id: 4, title: "Замки для дома", class: "categoriesgeneral__card4" },
    ];

    return (
        <section className="section__categoriesgeneral">
            <div className="container">
                <div className="categoriesgeneral_wrapper">
                    {categories.map((category) => (
                        <div key={category.id} className={category.class}>
                            <div className="card__content">
                                <p>{category.title}</p>
                                <Link to="/Catalog">
                                    <button>Перейти</button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
                <Link to="/Categories">
                    <button className="all__categ">Все категории</button>
                </Link>
            </div>
        </section>
    );
}
import "../../main.css"
import "./Cataloginfo.css"


export default function Cataloginfo() {
    return (
        <>
            <section className="cataloginfo__section">
                <div className="container">
                    <div className="cataloginfo__top__wrapper">
                        <div className="cataloginfo__left__content">
                            <h6>Eget quis quam metus, scelerisque.</h6>
                            <p>Odio felis sit leo, massa, mauris, at pulvinar ultrices. Eu porttitor molestie massa porttitor.
                                Quisque at turpis ut proin eu et magna etiam rhoncus.</p>
                            <ul className="cataloginfo__list">
                                <ul>
                                    <li className="checkbox__li"><input type="checkbox" id="customCheckbox12" /><label htmlFor="customCheckbox12">Межкомнатую дверь</label></li>
                                    <li className="checkbox__li"><input type="checkbox" id="customCheckbox13" /><label htmlFor="customCheckbox13">Деревянную дверь</label></li>
                                </ul>
                                <ul>
                                    <li className="checkbox__li"><input type="checkbox" id="customCheckbox14" /><label htmlFor="customCheckbox14">Межкомнатую дверь</label></li>
                                    <li className="checkbox__li"><input type="checkbox" id="customCheckbox15" /><label htmlFor="customCheckbox15">Деревянную дверь</label></li>
                                </ul>
                            </ul>
                            <p>Ac risus neque pulvinar tincidunt est. Tristique imperdiet viverra interdum in leo. Nullam ullamcorper id enim fermentum integer praesent bibendum.
                                In ullamcorper purus scelerisque malesuada et egestas. Ac dictumst mauris sed facilisis.</p>
                        </div>
                        <div className="cataloginfo__right__content"></div>
                    </div>
                    <div className="cataloginfo__bottom__wrapper">
                        <div className="cataloginfo__left__content"></div>
                        <div className="cataloginfo__right__content">
                            <h6>Eget quis quam metus, scelerisque.</h6>
                            <p>Odio felis sit leo, massa, mauris, at pulvinar ultrices. Eu porttitor molestie massa porttitor.
                                Quisque at turpis ut proin eu et magna etiam rhoncus.</p>
                            <p>Ac risus neque pulvinar tincidunt est. Tristique imperdiet viverra interdum in leo. Nullam ullamcorper id enim fermentum integer praesent bibendum.
                                In ullamcorper purus scelerisque malesuada et egestas. Ac dictumst mauris sed facilisis.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
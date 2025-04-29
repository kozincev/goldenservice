import NavComponent from "../../General/NavComponent/NavComponent";
import Lock from "../../Catalog/Products/Lock/Lock"
import Swiper3 from "../../component/swiper3/swiper3";
import Cataloginfo from "../../Catalog/Cataloginfo/Cataloginfo";
import Wcyb from "../../General/Wcyb/Wcyb";
import Footer from "../../General/Footer/Footer";
import Catalogswiper from "../../Catalog/Catalogswiper/Catalogswiper";



export default function Locklink(){
    return(
        <>
        <NavComponent/>
        <Lock/>
        <Catalogswiper/>
        <Cataloginfo/>
        <Wcyb/>
        <Footer/>
        </>
    )
}
import Cataloginfo from "../../Catalog/Cataloginfo/Cataloginfo";
import Catalogswiper from "../../Catalog/Catalogswiper/Catalogswiper";
import Blacklock from "../../Catalog/Products/Blacklock/Blacklock";
import Footer from "../../General/Footer/Footer";
import NavComponent from "../../General/NavComponent/NavComponent";
import Wcyb from "../../General/Wcyb/Wcyb";




export default function Blacklink(){
    return(
        <>
        <NavComponent/>
        <Blacklock/>
        <Catalogswiper/>
        <Cataloginfo/>
        <Wcyb/>
        <Footer/>
        </>
    )
}
import Cataloginfo from "../../Catalog/Cataloginfo/Cataloginfo";
import Catalogswiper from "../../Catalog/Catalogswiper/Catalogswiper";
import Yellowlock from "../../Catalog/Products/Yellowlock/Yellowlock";
import Footer from "../../General/Footer/Footer";
import NavComponent from "../../General/NavComponent/NavComponent";
import Wcyb from "../../General/Wcyb/Wcyb";




export default function Yellowlink(){
    return(
        <>
        <NavComponent/>
        <Yellowlock/>
        <Catalogswiper/>
        <Cataloginfo/>
        <Wcyb/>
        <Footer/>
        </>
    )
}
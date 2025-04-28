import Cataloginfo from "../../Catalog/Cataloginfo/Cataloginfo";
import Catalogswiper from "../../Catalog/Catalogswiper/Catalogswiper";
import Pinklock from "../../Catalog/Products/Pinklock/Pinklock";
import Footer from "../../General/Footer/Footer";
import NavComponent from "../../General/NavComponent/NavComponent";
import Wcyb from "../../General/Wcyb/Wcyb";




export default function Pinklink(){
    return(
        <>
        <NavComponent/>
        <Pinklock/>
        <Catalogswiper/>
        <Cataloginfo/>
        <Wcyb/>
        <Footer/>
        </>
    )
}




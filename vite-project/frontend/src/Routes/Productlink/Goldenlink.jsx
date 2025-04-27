import NavComponent from "../../General/NavComponent/NavComponent"
import Goldenlock from "../../Catalog/Products/Goldenlock/Goldenlock"
import Catalogswiper from "../../Catalog/Catalogswiper/Catalogswiper"
import Cataloginfo from "../../Catalog/Cataloginfo/Cataloginfo"
import Wcyb from "../../General/Wcyb/Wcyb"
import Footer from "../../General/Footer/Footer"


export default function Goldenlink(){
    return(
        <>
        <NavComponent/>
        <Goldenlock/>
        <Catalogswiper/>
        <Cataloginfo/>
        <Wcyb/>
        <Footer/>
        </>
    )
}
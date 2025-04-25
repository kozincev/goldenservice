import NavComponent from "../../General/NavComponent/NavComponent"
import Catalog from "../../Catalog/Catalog"
import Catalogswiper from "../../Catalog/Catalogswiper/Catalogswiper"
import Cataloginfo from "../../Catalog/Cataloginfo/Cataloginfo"
import Wcyb from "../../General/Wcyb/Wcyb"
import Footer from "../../General/Footer/Footer"



export default function Cataloglink() {
    return (
        <>
            <NavComponent />
            <Catalog />
            <Catalogswiper/>
            <Cataloginfo/>
            <Wcyb />
            <Footer />
        </>
    )
}
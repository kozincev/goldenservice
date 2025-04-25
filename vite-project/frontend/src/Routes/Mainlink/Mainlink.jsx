import NavComponent from "../../General/NavComponent/NavComponent"
import Header from "../../General/Header/Header"
import Infocompany from "../../General/Infocompany/Infocompany"
import Whygs from "../../General/Whygs/Whygs"
import Categoriesgeneral from "../../General/Categoriesgeneral/Categoriesgeneral"
import Popularproducts from "../../General/Popularproducts/Popularproducts"
import Wcyb from "../../General/Wcyb/Wcyb"
import Footer from "../../General/Footer/Footer"


export default function Mainlink(){
    return(
        <>
        <NavComponent/>
        <Header/>
        <Infocompany/>
        <Whygs/>
        <Categoriesgeneral/>
        <Popularproducts/>
        <Wcyb/>
        <Footer/>
        </>
    )
}
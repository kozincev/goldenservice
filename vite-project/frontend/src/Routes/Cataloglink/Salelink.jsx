import Footer from "../../General/Footer/Footer";
import NavComponent from "../../General/NavComponent/NavComponent";
import Howwework from "../../Wholesale/Howwework/Howwework";
import Projects from "../../Wholesale/Projects/Projects";
import Wholesalemain from "../../Wholesale/Wholesalemain/Wholesalemain";
import Whychooseus from "../../Wholesale/Whychooseus/Whychooseus";
import Wcyb from "../../General/Wcyb/Wcyb"



export default function Salelink(){
    return(
        <>
        <NavComponent/>
        <Wholesalemain/>
        <Howwework/>
        <Whychooseus/>
        <Projects/>
        <Wcyb/>
        <Footer/>
        </>
    )
}
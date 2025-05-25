import Aboutusinfo from "../../Aboutus/Aboutusinfo/Aboutusinfo"
import Aboutusmain from "../../Aboutus/Aboutusmain/Aboutusmain"
import Contacts from "../../Aboutus/Contacts/Contacts"
import Mission from "../../Aboutus/Mission/Mission"
import Footer from "../../General/Footer/Footer"
import NavComponent from "../../General/NavComponent/NavComponent"


export default function Aboutuslink(){
    return(
        <>
        <NavComponent/>
        <Aboutusmain/>
        <Aboutusinfo/>
        <Mission/>
        <Contacts/>
        <Footer/>
        </>
    )
}
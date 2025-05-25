import { Route, Routes } from "react-router-dom";
import { HashRouter } from "react-router-dom";
import Mainlink from "./Routes/Mainlink/Mainlink";
import Categorieslink from "./Routes/Categorieslink/Categorieslink";
import Cataloglink from "./Routes/Cataloglink/Cataloglink";
import ScrollToTop from "./component/Scrolltotop/Scrolltotop";
import Locklink from "./Routes/Productlink/Locklink";
import Salelink from "./Routes/Cataloglink/Salelink";
import Makinganorederlink from "./Routes/Cataloglink/Makinganorderlink";
import Confirmationlink from "./Routes/Cataloglink/Confirmationlink";
import Aboutuslink from "./Routes/Aboutuslink/Aboutuslink";

export default function MainRouter(){
    return(
        <>
        <HashRouter>
            <ScrollToTop/>
        <Routes>

        <Route path="/" index element={<Mainlink />}/>
        <Route path="/Categories" index element={<Categorieslink />}/>
        <Route path="/Catalog" index element={<Cataloglink />}/>
        <Route path="/Lock/:id" index element={<Locklink />}/>
        <Route path="/Order" index element={<Makinganorederlink />}/>
        <Route path="/Wholesale" index element={<Salelink />}/>
        <Route path="/order-confirmation" index element={<Confirmationlink />}/>
        <Route path="/Aboutus" index element={<Aboutuslink />}/>


        </Routes>
        </HashRouter>
        </>
    )
}
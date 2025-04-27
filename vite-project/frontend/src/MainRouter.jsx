import { Route, Routes } from "react-router-dom";
import { HashRouter } from "react-router-dom";
import Mainlink from "./Routes/Mainlink/Mainlink";
import Categorieslink from "./Routes/Categorieslink/Categorieslink";
import Cataloglink from "./Routes/Cataloglink/Cataloglink";
import Goldenlink from "./Routes/Productlink/Goldenlink";
import ScrollToTop from "./component/Scrolltotop/Scrolltotop";

export default function MainRouter(){
    return(
        <>
        <HashRouter>
            <ScrollToTop/>
        <Routes>

        <Route path="/" index element={<Mainlink />}/>
        <Route path="/Категории" index element={<Categorieslink />}/>
        <Route path="/Каталог" index element={<Cataloglink />}/>
        <Route path="/Золотой Замок" index element={<Goldenlink />}/>
        <Route path="/Золотой Замок/3" index element={<Goldenlink />}/>
        <Route path="/Золотой Замок/7" index element={<Goldenlink />}/>
        <Route path="/Золотой Замок/12" index element={<Goldenlink />}/>
        <Route path="/Золотой Замок/16" index element={<Goldenlink />}/>
        <Route path="/Золотой Замок/21" index element={<Goldenlink />}/>
        <Route path="/Золотой Замок/25" index element={<Goldenlink />}/>
        <Route path="/Золотой Замок/30" index element={<Goldenlink />}/>
        <Route path="/Золотой Замок/34" index element={<Goldenlink />}/>
        

        

        </Routes>
        </HashRouter>
        </>
    )
}
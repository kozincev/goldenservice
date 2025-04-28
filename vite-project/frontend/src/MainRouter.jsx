import { Route, Routes } from "react-router-dom";
import { HashRouter } from "react-router-dom";
import Mainlink from "./Routes/Mainlink/Mainlink";
import Categorieslink from "./Routes/Categorieslink/Categorieslink";
import Cataloglink from "./Routes/Cataloglink/Cataloglink";
import Goldenlink from "./Routes/Productlink/Goldenlink";
import ScrollToTop from "./component/Scrolltotop/Scrolltotop";
import Yellowlink from "./Routes/Productlink/Yellowlink";
import Blacklink from "./Routes/Productlink/Blackllink";
import Pinklink from "./Routes/Productlink/Pinklink";

export default function MainRouter(){
    return(
        <>
        <HashRouter>
            <ScrollToTop/>
        <Routes>

        <Route path="/" index element={<Mainlink />}/>
        <Route path="/Категории" index element={<Categorieslink />}/>
        <Route path="/Каталог" index element={<Cataloglink />}/>
        <Route path="/Розовый Замок" index element={<Pinklink />}/>
        <Route path="/Золотой Замок" index element={<Goldenlink />}/>
        <Route path="/Жёлтый Замок" index element={<Yellowlink />}/>
        <Route path="/Чёрный Замок" index element={<Blacklink />}/>
        <Route path="/Замок/1" index element={<Pinklink />}/>
        <Route path="/Замок/2" index element={<Yellowlink />}/>
        <Route path="/Замок/3" index element={<Goldenlink />}/>
        <Route path="/Замок/4" index element={<Blacklink />}/>
        <Route path="/Замок/5" index element={<Pinklink />}/>
        <Route path="/Замок/6" index element={<Yellowlink />}/>
        <Route path="/Замок/7" index element={<Goldenlink />}/>
        <Route path="/Замок/8" index element={<Blacklink />}/>
        <Route path="/Замок/9" index element={<Pinklink />}/>
        <Route path="/Замок/10" index element={<Pinklink />}/>
        <Route path="/Замок/11" index element={<Yellowlink />}/>
        <Route path="/Замок/12" index element={<Goldenlink />}/>
        <Route path="/Замок/13" index element={<Blacklink />}/>
        <Route path="/Замок/14" index element={<Pinklink />}/>
        <Route path="/Замок/15" index element={<Yellowlink />}/>
        <Route path="/Замок/16" index element={<Goldenlink />}/>
        <Route path="/Замок/17" index element={<Blacklink />}/>
        <Route path="/Замок/18" index element={<Pinklink />}/>
        <Route path="/Замок/19" index element={<Pinklink />}/>
        <Route path="/Замок/20" index element={<Yellowlink />}/>
        <Route path="/Замок/21" index element={<Goldenlink />}/>
        <Route path="/Замок/22" index element={<Blacklink />}/>
        <Route path="/Замок/23" index element={<Pinklink />}/>
        <Route path="/Замок/24" index element={<Yellowlink />}/>
        <Route path="/Замок/25" index element={<Goldenlink />}/>
        <Route path="/Замок/26" index element={<Blacklink />}/>
        <Route path="/Замок/27" index element={<Pinklink />}/>
        <Route path="/Замок/28" index element={<Pinklink />}/>
        <Route path="/Замок/29" index element={<Yellowlink />}/>
        <Route path="/Замок/30" index element={<Goldenlink />}/>        

        </Routes>
        </HashRouter>
        </>
    )
}
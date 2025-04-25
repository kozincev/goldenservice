import { Route, Routes } from "react-router-dom";
import { HashRouter } from "react-router-dom";
import Mainlink from "./Routes/Mainlink/Mainlink";
import Categorieslink from "./Routes/Categorieslink/Categorieslink";
import Cataloglink from "./Routes/Cataloglink/Cataloglink";

export default function MainRouter(){
    return(
        <>
        <HashRouter>
        <Routes>

        <Route path="/" index element={<Mainlink />}/>
        <Route path="/Категории" index element={<Categorieslink />}/>
        <Route path="/Каталог" index element={<Cataloglink />}/>
        

        </Routes>
        </HashRouter>
        </>
    )
}
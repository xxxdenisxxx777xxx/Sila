import { Route, Routes } from "react-router-dom"
import App from "../App";
import Lend from "../pages/Lend";
import AllProducts from "../pages/AllProducts";
import Contact from "../pages/Contact";

const AppRoute = () => {
    return (
        <Routes>
            <Route path="/" index element={<Lend />} />
            <Route path="/allproducts" element={<AllProducts />} />
            <Route path="/contacts" element={<Contact />} />
        </Routes>
    )
}

export default AppRoute;
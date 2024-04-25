import { Route, Routes } from "react-router-dom"
import App from "../App";
import Lend from "../components/Lend";
import AllProducts from "../components/AllProducts";

const AppRoute = () => {
    return (
        <Routes>
            <Route path="/" index element={<Lend />} />
            <Route path="/allproducts" element={<AllProducts />} />
        </Routes>
    )
}

export default AppRoute;
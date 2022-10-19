import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "../components/Navbar.jsx"

import Home from "../views/Home.jsx"
import Contacto from "../views/Contacto.jsx"


const Router = ()=> {
    return (
        <BrowserRouter>
            <Navbar></Navbar>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/contacto" element={<Contacto/>}></Route>
            </Routes>

        </BrowserRouter>
    )
}

export default Router
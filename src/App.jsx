import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./views/Home.jsx";
import Contact from "./views/Contacto.jsx";
import NotFound from "./views/NotFound.jsx";

import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="*" element={< NotFound/>}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;

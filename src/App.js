import { BrowserRouter, Routes, Route } from "react-router-dom";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import Home from './components/home/Home';
import Header from './components/header/Header';
import About from "./components/aboutus/About";
import Registration from "./components/user-registration/Registration";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/registtration" element={<Registration />} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;

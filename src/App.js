import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Home from './components/home/Home';
import Header from './components/header/Header';
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>

          <Route path="/" element={<Home />} />

        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
// components
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
// pages
import Home from "./pages/Home/Home";
import Speakers from "./pages/Speakers/Speakers";
import ScrollToTop from "./ScrollToTop";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <ScrollToTop>
          <div className="layout">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/speakers" element={<Speakers />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </div>
        </ScrollToTop>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;

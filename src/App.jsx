// App.jsx
import { Routes, Route } from "react-router-dom";
import Navbar from "./layout/header/Navbar";
import Footer from "./layout/footer/Footer";
import HomePage from "./pages/Home/HomePage";
import AboutPage from "./pages/about/AboutPage";
import ServicesPage from "./pages/services/ServicesPage";
import Gallary from "./pages/Gallary/Gallary";
import ContactPage from "./pages/contact/ContactPages";
import ScrollToTop from "./component/ScrollToTop"

function App() {
  return (
    <div className="flex flex-col min-h-screen">
   <ScrollToTop/>
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/gallary" element={<Gallary />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
